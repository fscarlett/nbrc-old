const express = require('express');
const { check, body } = require('express-validator');

const authController = require('../controllers/auth');
const User = require('../models/User');

const router = express.Router();

// const passport = require('passport');

/* GET teacher login page. */
router.get('/login', authController.getLogin);

router.post(
  '/login',
  [check('email').normalizeEmail()],
  authController.postLogin
);

router.post('/logout', authController.postLogout);

router.get('/message', authController.getMessage);

router.get('/reset', authController.getReset);

router.post('/reset', authController.postReset);

router.get('/reset/:token', authController.getNewPassword);

/* GET edit password (when already logged in). */
router.get('/edit-password', authController.getEditPassword);

router.post(
  '/new-password',
  [
    body(
      'password',
      'Please enter a password with at least 12 characters.'
    ).isLength({ min: 12 }),
    body('pw2').custom((value, { req }) => {
      if (value !== req.body.password) {
        throw new Error('Passwords do not match.');
      }
      return true;
    })
  ],
  authController.postNewPassword
);

/* POST edit password (when already logged in). */
router.post(
  '/edit-password',
  [
    body(
      'password',
      'Please enter a password with at least 12 characters.'
    ).isLength({ min: 12 }),
    body('pw2').custom((value, { req }) => {
      if (value !== req.body.password) {
        throw new Error('Passwords do not match.');
      }
      return true;
    })
  ],
  authController.postEditPassword
);

/* GET teacher registration page. */
router.get('/register', authController.getRegister);

/* POST teacher registration page. */
router.post(
  '/register',
  [
    check('first', 'First Name is required.')
      .not()
      .isEmpty(),
    check('last', 'Last Name is required.')
      .not()
      .isEmpty(),
    check('email')
      .isEmail()
      .withMessage('Please enter a valid email.')
      .normalizeEmail()
      .custom((value, { req }) => {
        return User.findOne({ email: value }).then(user => {
          if (user) {
            return Promise.reject(
              'That email is already taken. Please enter a different email.'
            );
          }
        });
      }),
    body(
      'pw1',
      'Please enter a password with at least 12 characters.'
    ).isLength({ min: 12 }),
    body('pw2').custom((value, { req }) => {
      if (value !== req.body.pw1) {
        throw new Error('Passwords do not match.');
      }
      return true;
    })
  ],
  authController.postRegister
);

module.exports = router;

// module.exports = app => {
//   app.post(
//     '/login',
//     passport.authenticate('local', {
//       successRedirect: '/',
//       failureRedirect: '/login',
//       failureFlash: true
//     })
//   );
// };
