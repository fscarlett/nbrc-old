const Student = require('../models/Student');
// const Activity01 = require('../models/Activity01');

const CLOUDCUBE_URL = 'https://cloud-cube.s3.amazonaws.com/hdfb18ccxnip';
let IMAGE_URL = CLOUDCUBE_URL + '/public/';

/**
 *
 * Activity 1 GET */
exports.getActivity01 = (req, res, next) => {
  const studId = req.params.studentId;
  let questId = req.params.questionId;
  let correct = req.params.correct;
  let studentUrl = '/student/' + studId;
  let congratsUrl =
    '/activity-1-save/' + studId + '/' + questId + '/' + correct;

  // After 15 questions, round is done, save and go to Congrats page
  if (questId > 15) {
    return res.redirect(congratsUrl);
  }

  // Yeah I know...
  let answer = null;
  const questions = [
    {
      questionNumber: 1,
      imageUrl: IMAGE_URL + 'ac1/Activity_1_Image_2.JPG',
      answer: false
    },
    {
      questionNumber: 2,
      imageUrl: IMAGE_URL + 'ac1/Activity_1_Image_3.JPG',
      answer: true
    },
    {
      questionNumber: 3,
      imageUrl: IMAGE_URL + 'ac1/Activity_1_Image_5.JPG',
      answer: true
    },
    {
      questionNumber: 4,
      imageUrl: IMAGE_URL + 'ac1/Activity_1_Image_6.JPG',
      answer: true
    },
    {
      questionNumber: 5,
      imageUrl: IMAGE_URL + 'ac1/Activity_1_Image_7.JPG',
      answer: true
    },
    {
      questionNumber: 6,
      imageUrl: IMAGE_URL + 'ac1/Activity_1_Image_8.JPG',
      answer: true
    },
    {
      questionNumber: 7,
      imageUrl: IMAGE_URL + 'ac1/Activity_1_Image_9.JPG',
      answer: false
    },
    {
      questionNumber: 8,
      imageUrl: IMAGE_URL + 'ac1/Activity_1_Image_10.JPG',
      answer: false
    },
    {
      questionNumber: 9,
      imageUrl: IMAGE_URL + 'ac1/Activity_1_Image_11.JPG',
      answer: true
    },
    {
      questionNumber: 10,
      imageUrl: IMAGE_URL + 'ac1/Activity_1_Image_12.JPG',
      answer: true
    },
    {
      questionNumber: 11,
      imageUrl: IMAGE_URL + 'ac1/Activity_1_Image_13.JPG',
      answer: true
    },
    {
      questionNumber: 12,
      imageUrl: IMAGE_URL + 'ac1/Activity_1_Image_14.JPG',
      answer: false
    },
    {
      questionNumber: 13,
      imageUrl: IMAGE_URL + 'ac1/Activity_1_Image_15.JPG',
      answer: true
    },
    {
      questionNumber: 14,
      imageUrl: IMAGE_URL + 'ac1/Activity_1_Image_16.JPG',
      answer: true
    },
    {
      questionNumber: 15,
      imageUrl: IMAGE_URL + 'ac1/Activity_1_Image_17.JPG',
      answer: true
    },
    {
      questionNumber: 16,
      imageUrl: IMAGE_URL + 'ac1/Activity_1_Image_18.JPG',
      answer: false
    },
    {
      questionNumber: 17,
      imageUrl: IMAGE_URL + 'ac1/Activity_1_Image_19.JPG',
      answer: true
    },
    {
      questionNumber: 18,
      imageUrl: IMAGE_URL + 'ac1/Activity_1_Image_20.JPG',
      answer: false
    },
    {
      questionNumber: 19,
      imageUrl: IMAGE_URL + 'ac1/Activity_1_Image_21.JPG',
      answer: true
    },
    {
      questionNumber: 20,
      imageUrl: IMAGE_URL + 'ac1/Activity_1_Image_22.JPG',
      answer: true
    },
    {
      questionNumber: 21,
      imageUrl: IMAGE_URL + 'ac1/Activity_1_Image_23.JPG',
      answer: false
    },
    {
      questionNumber: 22,
      imageUrl: IMAGE_URL + 'ac1/Activity_1_Image_24.JPG',
      answer: false
    },
    {
      questionNumber: 23,
      imageUrl: IMAGE_URL + 'ac1/Activity_1_Image_25.JPG',
      answer: true
    },
    {
      questionNumber: 24,
      imageUrl: IMAGE_URL + 'ac1/Activity_1_Image_26.JPG',
      answer: true
    },
    {
      questionNumber: 25,
      imageUrl: IMAGE_URL + 'ac1/Activity_1_Image_27.JPG',
      answer: false
    },
    {
      questionNumber: 26,
      imageUrl: IMAGE_URL + 'ac1/Activity_1_Image_28.JPG',
      answer: true
    },
    {
      questionNumber: 27,
      imageUrl: IMAGE_URL + 'ac1/Activity_1_Image_31.JPG',
      answer: false
    },
    {
      questionNumber: 28,
      imageUrl: IMAGE_URL + 'ac1/Activity_1_Image_32.JPG',
      answer: true
    },
    {
      questionNumber: 29,
      imageUrl: IMAGE_URL + 'ac1/Activity_1_Image_33.JPG',
      answer: false
    },
    {
      questionNumber: 30,
      imageUrl: IMAGE_URL + 'ac1/Activity_1_Image_34.JPG',
      answer: false
    },
    {
      questionNumber: 31,
      imageUrl: IMAGE_URL + 'ac1/Activity_1_Image_35.JPG',
      answer: true
    },
    {
      questionNumber: 32,
      imageUrl: IMAGE_URL + 'ac1/Activity_1_Image_36.JPG',
      answer: true
    },
    {
      questionNumber: 33,
      imageUrl: IMAGE_URL + 'ac1/Activity_1_Image_38.JPG',
      answer: true
    },
    {
      questionNumber: 34,
      imageUrl: IMAGE_URL + 'ac1/Activity_1_Image_39.JPG',
      answer: true
    },
    {
      questionNumber: 35,
      imageUrl: IMAGE_URL + 'ac1/Activity_1_Image_40.JPG',
      answer: true
    },
    {
      questionNumber: 36,
      imageUrl: IMAGE_URL + 'ac1/Activity_1_Image_41.JPG',
      answer: false
    },
    {
      questionNumber: 37,
      imageUrl: IMAGE_URL + 'ac1/Activity_1_Image_42.JPG',
      answer: true
    },
    {
      questionNumber: 38,
      imageUrl: IMAGE_URL + 'ac1/Activity_1_Image_43.JPG',
      answer: true
    },
    {
      questionNumber: 39,
      imageUrl: IMAGE_URL + 'ac1/Activity_1_Image_44.JPG',
      answer: true
    },
    {
      questionNumber: 40,
      imageUrl: IMAGE_URL + 'ac1/Activity_1_Image_45.JPG',
      answer: false
    },
    {
      questionNumber: 41,
      imageUrl: IMAGE_URL + 'ac1/Activity_1_Image_47.JPG',
      answer: true
    },
    {
      questionNumber: 42,
      imageUrl: IMAGE_URL + 'ac1/Activity_1_Image_48.JPG',
      answer: true
    },
    {
      questionNumber: 43,
      imageUrl: IMAGE_URL + 'ac1/Activity_1_Image_49.JPG',
      answer: true
    },
    {
      questionNumber: 44,
      imageUrl: IMAGE_URL + 'ac1/Activity_1_Image_50.JPG',
      answer: false
    },
    {
      questionNumber: 45,
      imageUrl: IMAGE_URL + 'ac1/Activity_1_Image_51.JPG',
      answer: true
    },
    {
      questionNumber: 46,
      imageUrl: IMAGE_URL + 'ac1/Activity_1_Image_52.JPG',
      answer: true
    },
    {
      questionNumber: 47,
      imageUrl: IMAGE_URL + 'ac1/Activity_1_Image_53.JPG',
      answer: true
    },
    {
      questionNumber: 48,
      imageUrl: IMAGE_URL + 'ac1/Activity_1_Image_54.JPG',
      answer: false
    },
    {
      questionNumber: 49,
      imageUrl: IMAGE_URL + 'ac1/Activity_1_Image_55.JPG',
      answer: true
    },
    {
      questionNumber: 50,
      imageUrl: IMAGE_URL + 'ac1/Activity_1_Image_57.JPG',
      answer: true
    }
  ];

  // -------------------

  let questionList = [];

  if (questId == 1) {
    while (questionList.length < 15) {
      let newQ = Math.floor(Math.random() * 50) + 1;
      if (!questionList.includes(newQ)) {
        questionList.push(newQ);
      }
    }
  } else {
    questionList = req.params.questionList.split(',').map(Number);
  }

  let questSelection = questionList[questId - 1];
  const questionListString = questionList.join();

  // -------------------

  const question = questions[questSelection - 1];

  Student.findById(studId)
    .then(student => {
      res.render('activity/activity-1', {
        student: student,
        questId: questId,
        question: question,
        answer: answer,
        correct: correct,
        questionList: questionListString,
        reqMethod: 'GET',
        path: '/activity-1',
        title: 'Activity 1',
        isAuthenticated: req.session.isLoggedIn
      });
    })
    .catch(err => console.log(err));
};

/**  ========================================================================================
 *
 * Activity 1  POST */
exports.postActivity01 = (req, res, next) => {
  const studId = req.params.studentId;
  let questId = req.params.questionId;
  let correct = Number(req.params.correct);
  const questionListString = req.params.questionList;
  let questionList = questionListString.split(',').map(Number);

  let answer = null;
  req.body.ac1answer === 'true' ? (answer = true) : (answer = false);
  if (req.body.ac1answer === 'true') {
    correct++;
  }
  let correctString = correct.toString();

  // yeah I know
  const questions = [
    {
      questionNumber: 1,
      imageUrl: IMAGE_URL + 'ac1/Activity_1_Image_2.JPG',
      answer: false,
      message:
        'People are outside each other’s personal space when there is an arm’s length distance between them.'
    },
    {
      questionNumber: 2,
      imageUrl: IMAGE_URL + 'ac1/Activity_1_Image_3.JPG',
      answer: true,
      message:
        'People are inside each other’s personal space when there is less than an arm’s length distance between them.'
    },
    {
      questionNumber: 3,
      imageUrl: IMAGE_URL + 'ac1/Activity_1_Image_5.JPG',
      answer: true,
      message:
        'People are inside each other’s personal space when there is less than an arm’s length distance between them.'
    },
    {
      questionNumber: 4,
      imageUrl: IMAGE_URL + 'ac1/Activity_1_Image_6.JPG',
      answer: true,
      message:
        'People are inside each other’s personal space when there is less than an arm’s length distance between them.'
    },
    {
      questionNumber: 5,
      imageUrl: IMAGE_URL + 'ac1/Activity_1_Image_7.JPG',
      answer: true,
      message:
        'People are inside each other’s personal space when there is less than an arm’s length distance between them.'
    },
    {
      questionNumber: 6,
      imageUrl: IMAGE_URL + 'ac1/Activity_1_Image_8.JPG',
      answer: true,
      message:
        'People are inside each other’s personal space when there is less than an arm’s length distance between them.'
    },
    {
      questionNumber: 7,
      imageUrl: IMAGE_URL + 'ac1/Activity_1_Image_9.JPG',
      answer: false,
      message:
        'People are outside each other’s personal space when there is an arm’s length distance between them.'
    },
    {
      questionNumber: 8,
      imageUrl: IMAGE_URL + 'ac1/Activity_1_Image_10.JPG',
      answer: false,
      message:
        'People are outside each other’s personal space when there is an arm’s length distance between them.'
    },
    {
      questionNumber: 9,
      imageUrl: IMAGE_URL + 'ac1/Activity_1_Image_11.JPG',
      answer: true,
      message:
        'People are inside each other’s personal space when there is less than an arm’s length distance between them.'
    },
    {
      questionNumber: 10,
      imageUrl: IMAGE_URL + 'ac1/Activity_1_Image_12.JPG',
      answer: true,
      message:
        'People are inside each other’s personal space when there is less than an arm’s length distance between them.'
    },
    {
      questionNumber: 11,
      imageUrl: IMAGE_URL + 'ac1/Activity_1_Image_13.JPG',
      answer: true,
      message:
        'People are inside each other’s personal space when there is less than an arm’s length distance between them.'
    },
    {
      questionNumber: 12,
      imageUrl: IMAGE_URL + 'ac1/Activity_1_Image_14.JPG',
      answer: false,
      message:
        'People are outside each other’s personal space when there is an arm’s length distance between them.'
    },
    {
      questionNumber: 13,
      imageUrl: IMAGE_URL + 'ac1/Activity_1_Image_15.JPG',
      answer: true,
      message:
        'People are inside each other’s personal space when there is less than an arm’s length distance between them.'
    },
    {
      questionNumber: 14,
      imageUrl: IMAGE_URL + 'ac1/Activity_1_Image_16.JPG',
      answer: true,
      message:
        'People are inside each other’s personal space when there is less than an arm’s length distance between them.'
    },
    {
      questionNumber: 15,
      imageUrl: IMAGE_URL + 'ac1/Activity_1_Image_17.JPG',
      answer: true,
      message:
        'People are inside each other’s personal space when there is less than an arm’s length distance between them.'
    },
    {
      questionNumber: 16,
      imageUrl: IMAGE_URL + 'ac1/Activity_1_Image_18.JPG',
      answer: false,
      message:
        'People are outside each other’s personal space when there is an arm’s length distance between them.'
    },
    {
      questionNumber: 17,
      imageUrl: IMAGE_URL + 'ac1/Activity_1_Image_19.JPG',
      answer: true,
      message:
        'People are inside each other’s personal space when there is less than an arm’s length distance between them.'
    },
    {
      questionNumber: 18,
      imageUrl: IMAGE_URL + 'ac1/Activity_1_Image_20.JPG',
      answer: false,
      message:
        'People are outside each other’s personal space when there is an arm’s length distance between them.'
    },
    {
      questionNumber: 19,
      imageUrl: IMAGE_URL + 'ac1/Activity_1_Image_21.JPG',
      answer: true,
      message:
        'People are inside each other’s personal space when there is less than an arm’s length distance between them.'
    },
    {
      questionNumber: 20,
      imageUrl: IMAGE_URL + 'ac1/Activity_1_Image_22.JPG',
      answer: true,
      message:
        'People are inside each other’s personal space when there is less than an arm’s length distance between them.'
    },
    {
      questionNumber: 21,
      imageUrl: IMAGE_URL + 'ac1/Activity_1_Image_23.JPG',
      answer: false,
      message:
        'People are outside each other’s personal space when there is an arm’s length distance between them.'
    },
    {
      questionNumber: 22,
      imageUrl: IMAGE_URL + 'ac1/Activity_1_Image_24.JPG',
      answer: false,
      message:
        'People are outside each other’s personal space when there is an arm’s length distance between them.'
    },
    {
      questionNumber: 23,
      imageUrl: IMAGE_URL + 'ac1/Activity_1_Image_25.JPG',
      answer: true,
      message:
        'People are inside each other’s personal space when there is less than an arm’s length distance between them.'
    },
    {
      questionNumber: 24,
      imageUrl: IMAGE_URL + 'ac1/Activity_1_Image_26.JPG',
      answer: true,
      message:
        'People are inside each other’s personal space when there is less than an arm’s length distance between them.'
    },
    {
      questionNumber: 25,
      imageUrl: IMAGE_URL + 'ac1/Activity_1_Image_27.JPG',
      answer: false,
      message:
        'People are outside each other’s personal space when there is an arm’s length distance between them.'
    },
    {
      questionNumber: 26,
      imageUrl: IMAGE_URL + 'ac1/Activity_1_Image_28.JPG',
      answer: true,
      message:
        'People are inside each other’s personal space when there is less than an arm’s length distance between them.'
    },
    {
      questionNumber: 27,
      imageUrl: IMAGE_URL + 'ac1/Activity_1_Image_31.JPG',
      answer: false,
      message:
        'People are outside each other’s personal space when there is an arm’s length distance between them.'
    },
    {
      questionNumber: 28,
      imageUrl: IMAGE_URL + 'ac1/Activity_1_Image_32.JPG',
      answer: true,
      message:
        'People are inside each other’s personal space when there is less than an arm’s length distance between them.'
    },
    {
      questionNumber: 29,
      imageUrl: IMAGE_URL + 'ac1/Activity_1_Image_33.JPG',
      answer: false,
      message:
        'People are outside each other’s personal space when there is an arm’s length distance between them.'
    },
    {
      questionNumber: 30,
      imageUrl: IMAGE_URL + 'ac1/Activity_1_Image_34.JPG',
      answer: false,
      message:
        'People are outside each other’s personal space when there is an arm’s length distance between them.'
    },
    {
      questionNumber: 31,
      imageUrl: IMAGE_URL + 'ac1/Activity_1_Image_35.JPG',
      answer: true,
      message:
        'People are inside each other’s personal space when there is less than an arm’s length distance between them.'
    },
    {
      questionNumber: 32,
      imageUrl: IMAGE_URL + 'ac1/Activity_1_Image_36.JPG',
      answer: true,
      message:
        'People are inside each other’s personal space when there is less than an arm’s length distance between them.'
    },
    {
      questionNumber: 33,
      imageUrl: IMAGE_URL + 'ac1/Activity_1_Image_38.JPG',
      answer: true,
      message:
        'People are inside each other’s personal space when there is less than an arm’s length distance between them.'
    },
    {
      questionNumber: 34,
      imageUrl: IMAGE_URL + 'ac1/Activity_1_Image_39.JPG',
      answer: true,
      message:
        'People are inside each other’s personal space when there is less than an arm’s length distance between them.'
    },
    {
      questionNumber: 35,
      imageUrl: IMAGE_URL + 'ac1/Activity_1_Image_40.JPG',
      answer: true,
      message:
        'People are inside each other’s personal space when there is less than an arm’s length distance between them.'
    },
    {
      questionNumber: 36,
      imageUrl: IMAGE_URL + 'ac1/Activity_1_Image_41.JPG',
      answer: false,
      message:
        'People are outside each other’s personal space when there is an arm’s length distance between them.'
    },
    {
      questionNumber: 37,
      imageUrl: IMAGE_URL + 'ac1/Activity_1_Image_42.JPG',
      answer: true,
      message:
        'People are inside each other’s personal space when there is less than an arm’s length distance between them.'
    },
    {
      questionNumber: 38,
      imageUrl: IMAGE_URL + 'ac1/Activity_1_Image_43.JPG',
      answer: true,
      message:
        'People are inside each other’s personal space when there is less than an arm’s length distance between them.'
    },
    {
      questionNumber: 39,
      imageUrl: IMAGE_URL + 'ac1/Activity_1_Image_44.JPG',
      answer: true,
      message:
        'People are inside each other’s personal space when there is less than an arm’s length distance between them.'
    },
    {
      questionNumber: 40,
      imageUrl: IMAGE_URL + 'ac1/Activity_1_Image_45.JPG',
      answer: false,
      message:
        'People are outside each other’s personal space when there is an arm’s length distance between them.'
    },
    {
      questionNumber: 41,
      imageUrl: IMAGE_URL + 'ac1/Activity_1_Image_47.JPG',
      answer: true,
      message:
        'People are inside each other’s personal space when there is less than an arm’s length distance between them.'
    },
    {
      questionNumber: 42,
      imageUrl: IMAGE_URL + 'ac1/Activity_1_Image_48.JPG',
      answer: true,
      message:
        'People are inside each other’s personal space when there is less than an arm’s length distance between them.'
    },
    {
      questionNumber: 43,
      imageUrl: IMAGE_URL + 'ac1/Activity_1_Image_49.JPG',
      answer: true,
      message:
        'People are inside each other’s personal space when there is less than an arm’s length distance between them.'
    },
    {
      questionNumber: 44,
      imageUrl: IMAGE_URL + 'ac1/Activity_1_Image_50.JPG',
      answer: false,
      message:
        'People are outside each other’s personal space when there is an arm’s length distance between them.'
    },
    {
      questionNumber: 45,
      imageUrl: IMAGE_URL + 'ac1/Activity_1_Image_51.JPG',
      answer: true,
      message:
        'People are inside each other’s personal space when there is less than an arm’s length distance between them.'
    },
    {
      questionNumber: 46,
      imageUrl: IMAGE_URL + 'ac1/Activity_1_Image_52.JPG',
      answer: true,
      message:
        'People are inside each other’s personal space when there is less than an arm’s length distance between them.'
    },
    {
      questionNumber: 47,
      imageUrl: IMAGE_URL + 'ac1/Activity_1_Image_53.JPG',
      answer: true,
      message:
        'People are inside each other’s personal space when there is less than an arm’s length distance between them.'
    },
    {
      questionNumber: 48,
      imageUrl: IMAGE_URL + 'ac1/Activity_1_Image_54.JPG',
      answer: false,
      message:
        'People are outside each other’s personal space when there is an arm’s length distance between them.'
    },
    {
      questionNumber: 49,
      imageUrl: IMAGE_URL + 'ac1/Activity_1_Image_55.JPG',
      answer: true,
      message:
        'People are inside each other’s personal space when there is less than an arm’s length distance between them.'
    },
    {
      questionNumber: 50,
      imageUrl: IMAGE_URL + 'ac1/Activity_1_Image_57.JPG',
      answer: true,
      message:
        'People are inside each other’s personal space when there is less than an arm’s length distance between them.'
    }
  ];

  let questSelection = questionList[questId - 1];
  const question = questions[questSelection - 1];

  Student.findById(studId)
    .then(student => {
      res.render('activity/activity-1', {
        student: student,
        questId: questId,
        question: question,
        answer: answer,
        correct: correctString,
        questionList: questionListString,
        reqMethod: 'POST',
        path: '/activity-1',
        title: 'Activity 1',
        isAuthenticated: req.session.isLoggedIn
      });
    })
    .catch(err => console.log(err));
};

/**  ========================================================================================
 *
 * Activity 1 SAVE   */
exports.getActivity01Save = (req, res, next) => {
  const studId = req.params.studentId;
  let questId = Number(req.params.questionId);
  let correct = Number(req.params.correct);
  let thisScore = correct / (questId - 1);
  thisScore = thisScore.toFixed(2);
  let congratsUrl = '/activity-congrats/1/' + studId;

  Student.findById(studId).then(student => {
    let scoresArray = student.scores[0].ac_scores;
    let datesArray = student.scores[0].ac_dates;
    // let thisDate = new Date();
    let thisDate = new Date().toLocaleString('en-US', {
      timeZone: 'America/Los_Angeles'
    });
    scoresArray.push(thisScore);
    datesArray.push(thisDate);
    student.scores[0].ac_scores = scoresArray;
    student.scores[0].ac_dates = datesArray;

    student
      .save()
      .then(result => {
        res.redirect(congratsUrl);
      })
      .catch(err => console.log(err));
  });
};

/**  ========================================================================================
 *
 * Congrats GET */
exports.getCongrats = (req, res, next) => {
  const studId = req.params.studentId;
  const activity = req.params.activity;
  let studentUrl = '/student/' + req.params.studentId;
  let congratsUrl = '/activity-congrats/' + activity + '/' + studId;

  Student.findById(studId)
    .then(student => {
      res.render('activity/activity-congrats', {
        student: student,
        activity: activity,
        path: congratsUrl,
        title: 'Well Done!',
        isAuthenticated: req.session.isLoggedIn
      });
    })
    .catch(err => console.log(err));
};

/**  ========================================================================================
 *
 * Summary GET */
exports.getSummary = (req, res, next) => {
  const studId = req.params.studentId;
  let studentUrl = '/student/' + req.params.studentId;

  let sid8 = studId.slice(-8);

  Student.findById(studId)
    .then(student => {
      let currentScores1 = student.scores[0].ac_scores;
      let currentDates1 = student.scores[0].ac_dates;

      res.render('activity/activity-summary', {
        student: student,
        scores: currentScores1,
        dates: currentDates1,
        sid8: sid8,
        path: '/activity-summary1',
        title: 'Summary',
        isAuthenticated: req.session.isLoggedIn
      });
    })
    .catch(err => console.log(err));
};
