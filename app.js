const path = require('path');

const express = require('express');
const mongoose = require('mongoose');
const session = require('express-session');
const MongoDBStore = require('connect-mongodb-session')(session);
const csrf = require('csurf');
const favicon = require('serve-favicon');
// const flash = require('express-flash-messages');
const flash = require('connect-flash');

const keys = require('./config/keys');
const User = require('./models/User');
const Student = require('./models/Student');
const Activity01 = require('./models/Activity01');
// require('./models/User');

mongoose.connect(keys.mongoURI, {
  useNewUrlParser: true,
  useFindAndModify: false
});

const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');
const authRouter = require('./routes/authRoutes');
const activityRouter = require('./routes/activityRoutes');

const app = express();
const store = new MongoDBStore({
  uri: keys.mongoURI,
  collection: 'sessions'
});
const csrfProtection = csrf();

app.set('view engine', 'ejs');
app.set('views', 'views');

app.use(express.json({ extended: true }));
app.use(express.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname, 'public')));
app.use(
  session({
    // secret: 'oidwvinpwinpiknvamnsvlnadsjdjvnncsz',
    secret: 'keys.sessionKey',
    resave: false,
    saveUninitialized: false,
    store: store
  })
);

app.use(flash());

app.use(csrfProtection);
app.use(favicon(path.join(__dirname, './public', 'favicon.ico')));

app.use((req, res, next) => {
  if (!req.session.user) {
    return next();
  }
  User.findById(req.session.user_id)
    .then(user => {
      req.user = user;
      next();
    })
    .catch(err => console.log(err));
});

app.use((req, res, next) => {
  res.locals.isAuthenticated = req.session.isLoggedIn;
  res.locals.csrfToken = req.csrfToken();
  next();
});

app.use('/users', usersRouter);
app.use(authRouter);
app.use(indexRouter);
app.use(activityRouter);

app.use(function(req, res, next) {
  res.status(404).redirect('/404');
});

const PORT = process.env.PORT || 5000;
app.listen(PORT);
