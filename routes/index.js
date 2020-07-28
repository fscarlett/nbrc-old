const express = require('express');
const router = express.Router();
const { check, body } = require('express-validator');

const isAuth = require('../middleware/is-auth');

const adminController = require('../controllers/admin');

/* GET home page. 
NOT RESTRICTED
*/
router.get('/', function(req, res, next) {
  res.render('index', {
    title: 'Relationships Decoded',
    isAuthenticated: req.session.isLoggedIn
  });
});

/* GET teacher user profile page. RESTRICTED */
router.get('/settings', isAuth, adminController.getSettings);

/* POST teacher user profile page. RESTRICTED */
router.post(
  '/settings',
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
  ],
  isAuth,
  adminController.postSettings
);

/* GET student roster page. RESTRICTED */
router.get('/roster', isAuth, adminController.getRoster);

/* GET new student page. RESTRICTED */
router.get('/new-student', isAuth, adminController.getNewStudent);

/* POST new student roster page. RESTRICTED */
router.post(
  '/new-student',
  check('first', 'First Name is required.')
    .not()
    .isEmpty(),
  isAuth,
  adminController.postNewStudent
);

/* GET student page */
router.get('/student/:studentId', isAuth, adminController.getStudent);

/* POST student page */
router.post(
  '/student/:studentId/:questionId/:correct',
  isAuth,
  adminController.postStudent
);

/* GET Edit Student page */
router.get('/edit-student/:studentId', isAuth, adminController.getEditStudent);

/* POST Edit Student page */
router.post(
  '/edit-student/:studentId',
  check('first', 'First Name is required.')
    .not()
    .isEmpty(),
  isAuth,
  adminController.postEditStudent
);

/* POST Delete Student page */
router.post('/delete-student', isAuth, adminController.postDeleteStudent);

/* GET terms and services. NOT RESTRICTED */
router.get('/terms', function(req, res, next) {
  const backlink = req.headers.referer;
  let teacherName = '';
  if (req.session.isLoggedIn) {
    teacherName = req.session.user.fname + ' ' + req.session.user.lname;
  }

  res.render('terms', {
    title: 'Terms and Services',
    teacherName: teacherName,
    backlink: backlink,
    isAuthenticated: req.session.isLoggedIn
  });
});

/* GET 404 NOT RESTRICTED */
router.get('/404', function(req, res, next) {
  res.render('404', { title: '404: Page Not Found', backlink: '/' });
});

module.exports = router;
