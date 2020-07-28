var passport = require('passport'),
  LocalStrategy = require('passport-local').Strategy;

const mongoose = require('mongoose');

const User = mongoose.model('users');

passport.use(
  new LocalStrategy(function (email, password, done) {
    {
      usernameField: 'email'
    },
    User.findOne({ email: email }, function(err, user) {
      if (err) {
        return done(err);
      }
      if (!user) {
        return done(null, false, { message: 'Incorrect username.' });
      }
      if (!user.validPassword(password)) {
        return done(null, false, { message: 'Incorrect password.' });
      }
      return done(null, user);
    });
  })
);
