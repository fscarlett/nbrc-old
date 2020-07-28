const express = require('express');
const router = express.Router();

const { check, body } = require('express-validator');
const isAuth = require('../middleware/is-auth');

const activityController = require('../controllers/activity');
const activityController2 = require('../controllers/activity2');
const activityController3 = require('../controllers/activity3');
const activityController4 = require('../controllers/activity4');
const activityController5 = require('../controllers/activity5');
const activityController6 = require('../controllers/activity6');
const activityController7 = require('../controllers/activity7');
const activityController8 = require('../controllers/activity8');

/* ============================ activity 1 pages ============================= */
/* GET Activity 1 page */
router.get(
  '/activity/activity-1/:studentId/:questionId/:correct/:questionList',
  isAuth,
  activityController.getActivity01
);

/* POST Activity 1 page */
router.post(
  '/activity/activity-1/:studentId/:questionId/:correct/:questionList',
  isAuth,
  activityController.postActivity01
);

/* GET Activity 1 Save page */
router.get(
  '/activity-1-save/:studentId/:questionId/:correct',
  isAuth,
  activityController.getActivity01Save
);

/* GET Summary 1 page */
router.get(
  '/activity-summary1/:studentId',
  isAuth,
  activityController.getSummary
);

/* ============================ activity 2 pages ============================= */
/* GET Activity 2 page */
router.get(
  '/activity/activity-2/:studentId/:questionId/:correct/:questionList',
  isAuth,
  activityController2.getActivity02
);

/* POST Activity 2 page */
router.post(
  '/activity/activity-2/:studentId/:questionId/:correct/:questionList',
  isAuth,
  activityController2.postActivity02
);

/* GET Activity 2 Save page - this fires after 15 rounds */
router.get(
  '/activity-2-save/:studentId/:questionId/:correct',
  isAuth,
  activityController2.getActivity02Save
);

/* POST Activity 2 Leave page - saves when AC2 is left early */
router.post(
  '/activity-2-leave/:studentId/:questionId/:correct',
  isAuth,
  activityController2.postActivity02Leave
);

/* GET Summary page */
router.get(
  '/activity-summary2/:studentId',
  isAuth,
  activityController2.getSummary2
);

/* ============================ activity 3 pages ============================= */
/* GET Activity 3 page */
router.get(
  '/activity/activity-3/:studentId/:questionId/:correct/:questionList',
  isAuth,
  activityController3.getActivity03
);

/* POST Activity 3 page */
router.post(
  '/activity/activity-3/:studentId/:questionId/:correct/:questionList',
  isAuth,
  activityController3.postActivity03
);

/* GET Activity 3 Save page - this fires after 15 rounds */
router.get(
  '/activity-3-save/:studentId/:questionId/:correct',
  isAuth,
  activityController3.getActivity03Save
);

/* POST Activity 3 Leave page - saves when AC2 is left early */
router.post(
  '/activity-3-leave/:studentId/:questionId/:correct',
  isAuth,
  activityController3.postActivity03Leave
);

/* GET Summary page */
router.get(
  '/activity-summary3/:studentId',
  isAuth,
  activityController3.getSummary3
);

/* ============================ activity 4 pages ============================= */
/* GET Activity 4 page */
router.get(
  '/activity/activity-4/:studentId/:questionId/:correct/:questionList',
  isAuth,
  activityController4.getActivity04
);

/* POST Activity 4 page */
router.post(
  '/activity/activity-4/:studentId/:questionId/:correct/:questionList',
  isAuth,
  activityController4.postActivity04
);

/* GET Activity 4 Save page - this fires after 15 rounds */
router.get(
  '/activity-4-save/:studentId/:questionId/:correct',
  isAuth,
  activityController4.getActivity04Save
);

/* POST Activity 4 Leave page - saves when AC2 is left early */
router.post(
  '/activity-4-leave/:studentId/:questionId/:correct',
  isAuth,
  activityController4.postActivity04Leave
);

/* GET Summary page */
router.get(
  '/activity-summary4/:studentId',
  isAuth,
  activityController4.getSummary4
);

/* ============================ activity 5 pages ============================= */
/* GET Activity 5 page */
router.get(
  '/activity/activity-5/:studentId/:questionId/:correct/:questionList',
  isAuth,
  activityController5.getActivity05
);

/* POST Activity 5 page */
router.post(
  '/activity/activity-5/:studentId/:questionId/:correct/:questionList',
  isAuth,
  activityController5.postActivity05
);

/* GET Activity 5 Save page - this fires after 15 rounds */
router.get(
  '/activity-5-save/:studentId/:questionId/:correct',
  isAuth,
  activityController5.getActivity05Save
);

/* POST Activity 5 Leave page - saves when AC2 is left early */
router.post(
  '/activity-5-leave/:studentId/:questionId/:correct',
  isAuth,
  activityController5.postActivity05Leave
);

/* GET Summary page */
router.get(
  '/activity-summary5/:studentId',
  isAuth,
  activityController5.getSummary5
);

/* ============================ activity 6 pages ============================= */
/* GET Activity 6 page */
router.get(
  '/activity/activity-6/:studentId/:questionId/:correct/:questionList',
  isAuth,
  activityController6.getActivity06
);

/* POST Activity 6 page */
router.post(
  '/activity/activity-6/:studentId/:questionId/:correct/:questionList',
  isAuth,
  activityController6.postActivity06
);

/* GET Activity 6 Save page - this fires after 15 rounds */
router.get(
  '/activity-6-save/:studentId/:questionId/:correct',
  isAuth,
  activityController6.getActivity06Save
);

/* POST Activity 6 Leave page - saves when AC6 is left early */
router.post(
  '/activity-6-leave/:studentId/:questionId/:correct',
  isAuth,
  activityController6.postActivity06Leave
);

/* GET Summary page */
router.get(
  '/activity-summary6/:studentId',
  isAuth,
  activityController6.getSummary6
);

/* ============================ activity 7 pages ============================= */
/* GET Activity 7 page */
router.get(
  '/activity/activity-7/:studentId/:questionId/:correct',
  isAuth,
  activityController7.getActivity07
);

/* POST Activity 7 page */
router.post(
  '/activity/activity-7/:studentId/:questionId/:correct',
  isAuth,
  activityController7.postActivity07
);

/* GET Activity 7 Save page  */
router.get(
  '/activity-7-save/:studentId/:questionId/:correct',
  isAuth,
  activityController7.getActivity07Save
);

/* POST Activity 7 Leave page - saves when AC6 is left early */
router.post(
  '/activity-7-leave/:studentId/:questionId/:correct',
  isAuth,
  activityController7.postActivity07Leave
);

/* GET Summary page */
router.get(
  '/activity-summary7/:studentId',
  isAuth,
  activityController7.getSummary7
);

/* ============================ activity 8 pages ============================= */
/* GET Activity 8 page */
router.get(
  '/activity/activity-8/:studentId/:questionId/:correct',
  isAuth,
  activityController8.getActivity08
);

/* POST Activity 8 page */
router.post(
  '/activity/activity-8/:studentId/:questionId/:correct',
  [
    body('name', 'Nothing was selected.')
      .not()
      .isEmpty()
  ],
  isAuth,
  activityController8.postActivity08
);

/* GET Activity 8 Save page  */
router.get(
  '/activity-8-save/:studentId/:questionId/:correct',
  isAuth,
  activityController8.getActivity08Save
);

/* POST Activity 8 Leave page  */
router.post(
  '/activity-8-leave/:studentId/:questionId/:correct',
  isAuth,
  activityController8.postActivity08Leave
);

/* GET Summary page */
router.get(
  '/activity-summary8/:studentId',
  isAuth,
  activityController8.getSummary8
);

/* ============================ generic activity pages ============================= */

/* GET Congrats page */
router.get(
  '/activity-congrats/:activity/:studentId',
  isAuth,
  activityController.getCongrats
);

// /* GET Edit Student page */
// router.get('/edit-student/:studentId', isAuth, adminController.getEditStudent);

// /* POST Edit Student page */
// router.post(
//   '/edit-student/:studentId',
//   isAuth,
//   adminController.postEditStudent
// );

// /* GET terms and services. NOT RESTRICTED */
// router.get('/terms', function (req, res, next) {
//   res.render('terms', { title: 'Terms and Services' });
// });

module.exports = router;
