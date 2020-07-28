const crypto = require('crypto');

const bcrypt = require('bcryptjs');
const nodemailer = require('nodemailer');
const sendgridTransport = require('nodemailer-sendgrid-transport');

const { validationResult } = require('express-validator');

const User = require('../models/User');

const transporter = nodemailer.createTransport(
  sendgridTransport({
    auth: {
      api_key:
        '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'
    }
  })
);

exports.getLogin = (req, res, next) => {
  let flashMessageError = req.flash('error');
  let flashMessageSuccess = req.flash('success');
  let flashMessage;
  let flashClass;
  if (flashMessageError.length > 0) {
    flashMessage = flashMessageError[0];
    flashClass = 'flash-red';
  } else if (flashMessageSuccess.length > 0) {
    flashMessage = flashMessageSuccess[0];
    flashClass = 'flash-green';
  } else {
    flashMessage = null;
  }
  res.render('auth/login', {
    path: '/login',
    title: 'Log In',
    flashMessage: flashMessage,
    flashClass: flashClass,
    backlink: '/'
  });
};

exports.postLogin = (req, res, next) => {
  const email = req.body.email;
  const password = req.body.password;
  User.findOne({ email: email }).then(user => {
    if (!user) {
      req.flash('error', 'The email or password you entered is incorrect.');
      return res.redirect('/login');
    }
    bcrypt
      .compare(password, user.password)
      .then(doMatch => {
        if (doMatch) {
          req.session.isLoggedIn = true;
          req.session.user = user;
          return req.session.save(err => {
            console.log(err);
            res.redirect('/roster');
          });
        }
        req.flash('error', 'The email or password you entered is incorrect.');
        res.redirect('/login');
      })
      .catch(err => {
        console.log(err);
        res.redirect('/login');
      });
  });
};

exports.postLogout = (req, res, next) => {
  req.session.destroy(err => {
    console.log(err);
    res.redirect('/');
  });
};

exports.getRegister = (req, res, next) => {
  res.render('auth/register', {
    path: '/register',
    title: 'New Teacher',
    backlink: '/',
    reqMethod: 'GET',
    isAuthenticated: false,
    oldInput: { first: '', last: '', email: '', pw1: '', pw2: '' },
    validationErrors: []
  });
};

exports.postRegister = (req, res, next) => {
  // console.log(req);
  const first = req.body.first;
  const last = req.body.last;
  const email = req.body.email;
  const pw1 = req.body.pw1;
  const pw2 = req.body.pw2;
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    return res.status(422).render('auth/register', {
      path: '/register',
      title: 'New Teacher',
      backlink: '/',
      isAuthenticated: false,
      reqMethod: 'POST',
      errorMessage: errors.array()[0].msg,
      oldInput: { first: first, last: last, email: email, pw1: pw1, pw2: pw2 },
      validationErrors: errors.array()
    });
  }

  User.findOne({ email: email })
    .then(userDoc => {
      if (userDoc) {
        return res.redirect('/register');
      }
      return bcrypt
        .hash(pw1, 12)
        .then(hashedPassword => {
          const user = new User({
            fname: first,
            lname: last,
            email: email,
            password: hashedPassword
          });
          return user.save();
        })
        .then(result => {
          res.redirect('/login');
        });
    })
    .catch(err => {
      console.log(err);
    });
};

exports.getReset = (req, res, next) => {
  let flashMessage = req.flash('error');
  if (flashMessage.length > 0) {
    flashMessage = flashMessage[0];
  } else {
    flashMessage = null;
  }

  res.render('auth/reset', {
    path: '/reset',
    title: 'Reset Password',
    flashMessage: flashMessage,
    backlink: '/login',
    reqMethod: 'GET',
    isAuthenticated: false,
    validationErrors: []
  });
};

exports.postReset = (req, res, next) => {
  crypto.randomBytes(32, (err, buffer) => {
    if (err) {
      console.log(err);
      return res.redirect('/reset');
    }
    const token = buffer.toString('hex');
    User.findOne({ email: req.body.email })
      .then(user => {
        if (!user) {
          req.flash('error', 'No account with that email was found.');
          return res.redirect('/reset');
        }
        user.resetToken = token;
        user.resetTokenExpiration = Date.now() + 3600000;
        return user.save();
      })
      .then(result => {
        if (process.env.BASE_URL === 'evening-temple-86093') {
          baseUrl = 'evening-temple-86093';
        } else {
          baseUrl = 'nbrc-dev';
        }
        req.flash(
          'error',
          'Success! You have been sent an email with a link to reset your password. This link will expire in one hour.'
        );
        res.redirect('/message');
        transporter.sendMail({
          to: req.body.email,
          from: 'reset@relationshipsdecodedapp.com',
          subject: 'Your Relationships Decoded password reset',
          html: `
          <p>You requested a password reset for the Relationships Decoded app</p>
          <p><a href="https://${baseUrl}.herokuapp.com/reset/${token}"> Click this link to set a new password</a></p>
          <p>If you did not request a password reset, ignore this email. The link will expire after 1 hour.</p>

          `
        });
      })
      .catch(err => {
        console.log(err);
      });
  });
};

exports.getNewPassword = (req, res, next) => {
  const token = req.params.token;
  User.findOne({ resetToken: token, resetTokenExpiration: { $gt: Date.now() } })
    .then(user => {
      if (!user) {
        req.flash('error', 'The password reset link has expired.');
        return res.redirect('/message');
      }
      res.render('auth/new-password', {
        path: '/new-password',
        title: 'New Password',
        userId: user._id.toString(),
        passwordToken: token,
        backlink: '/login',
        reqMethod: 'GET',
        isAuthenticated: false,
        validationErrors: []
      });
    })
    .catch(err => {
      console.log(err);
    });
};

exports.postNewPassword = (req, res, next) => {
  const newPassword = req.body.password;
  const pw2 = req.body.pw2;
  const errors = validationResult(req);
  const userId = req.body.userId;
  const passwordToken = req.body.passwordToken;
  let resetUser;

  if (!errors.isEmpty()) {
    console.log(errors.array());

    return res.status(422).render('auth/new-password', {
      path: '/new-password',
      title: 'New Password',
      backlink: '/login',
      userId: userId,
      passwordToken: passwordToken,
      isAuthenticated: false,
      reqMethod: 'POST',
      errorMessage: errors.array()[0].msg,
      validationErrors: errors.array()
    });
  }

  User.findOne({
    resetToken: passwordToken,
    resetTokenExpiration: { $gt: Date.now() },
    _id: userId
  })
    .then(user => {
      resetUser = user;
      return bcrypt.hash(newPassword, 12);
    })
    .then(hashedPassword => {
      resetUser.password = hashedPassword;
      resetUser.resetToken = undefined;
      resetUser.resetTokenExpiration = undefined;
      return resetUser.save();
    })
    .then(result => {
      res.redirect('/login');
    })
    .catch(err => {
      console.log(err);
    });
};

exports.getMessage = (req, res, next) => {
  let flashMessage = req.flash('error');
  if (flashMessage.length > 0) {
    flashMessage = flashMessage[0];
  } else {
    flashMessage = null;
  }
  res.render('auth/message', {
    path: '/message',
    title: 'Message',
    flashMessage: flashMessage,
    backlink: '/'
  });
};

exports.getEditPassword = (req, res, next) => {
  // const token = req.params.token;
  let uid = req.session.user._id;
  // const backlink = req.headers.referer;

  let flashMessage = req.flash('error');
  if (flashMessage.length > 0) {
    flashMessage = flashMessage[0];
  } else {
    flashMessage = null;
  }

  res.render('auth/edit-password', {
    path: '/edit-password',
    title: 'Edit Password',
    userId: uid,
    backlink: '/settings',
    flashMessage: flashMessage,
    reqMethod: 'GET',
    isAuthenticated: true,
    validationErrors: []
  });
};

exports.postEditPassword = (req, res, next) => {
  const uid = req.session.user._id;

  const newPassword = req.body.password;
  const pw2 = req.body.pw2;
  const errors = validationResult(req);
  let resetUser;

  if (!errors.isEmpty()) {
    console.log(errors.array());

    return res.status(422).render('auth/edit-password', {
      path: '/edit-password',
      title: 'Edit Password',
      backlink: '/settings',
      userId: uid,
      isAuthenticated: true,
      reqMethod: 'POST',
      errorMessage: errors.array()[0].msg,
      validationErrors: errors.array()
    });
  }

  User.findById(uid)
    .then(user => {
      resetUser = user;
      return bcrypt.hash(newPassword, 12);
    })
    .then(hashedPassword => {
      resetUser.password = hashedPassword;
      resetUser.resetToken = undefined;
      resetUser.resetTokenExpiration = undefined;
      return resetUser.save();
    })
    .then(result => {
      req.flash(
        'success',
        'Your password was successfully reset. You may now log in with your new password.'
      );
      res.redirect('/login');
    })
    .catch(err => {
      console.log(err);
    });
};
