const Student = require('../models/Student');

const CLOUDCUBE_URL = 'https://cloud-cube.s3.amazonaws.com/hdfb18ccxnip';
let IMAGE_URL = CLOUDCUBE_URL + '/public/';

/**
 *
 * Activity 3 GET */
exports.getActivity03 = (req, res, next) => {
  const studId = req.params.studentId;
  let questId = req.params.questionId;
  let correct = req.params.correct;
  let studentUrl = '/student/' + studId;
  let congratsUrl =
    '/activity-3-save/' + studId + '/' + questId + '/' + correct;

  // After 15 questions, round is done, save and go to Congrats page
  if (questId > 15) {
    return res.redirect(congratsUrl);
  }

  // Yeah I know...
  let answer = null;
  const questions = [
    {
      questionNumber: 1,
      imageUrl: IMAGE_URL + 'ac3/Activity_3_Image_1.JPG',
      answer: true
    },
    {
      questionNumber: 2,
      imageUrl: IMAGE_URL + 'ac3/Activity_3_Image_2.JPG',
      answer: false
    },
    {
      questionNumber: 3,
      imageUrl: IMAGE_URL + 'ac3/Activity_3_Image_3.JPG',
      answer: true
    },
    {
      questionNumber: 4,
      imageUrl: IMAGE_URL + 'ac3/Activity_3_Image_4.JPG',
      answer: false
    },
    {
      questionNumber: 5,
      imageUrl: IMAGE_URL + 'ac3/Activity_3_Image_5.JPG',
      answer: true
    },
    {
      questionNumber: 6,
      imageUrl: IMAGE_URL + 'ac3/Activity_3_Image_6.JPG',
      answer: true
    },
    {
      questionNumber: 7,
      imageUrl: IMAGE_URL + 'ac3/Activity_3_Image_7.JPG',
      answer: false
    },
    {
      questionNumber: 8,
      imageUrl: IMAGE_URL + 'ac3/Activity_3_Image_8.JPG',
      answer: false
    },
    {
      questionNumber: 9,
      imageUrl: IMAGE_URL + 'ac3/Activity_3_Image_9.JPG',
      answer: true
    },
    {
      questionNumber: 10,
      imageUrl: IMAGE_URL + 'ac3/Activity_3_Image_10.JPG',
      answer: true
    },
    {
      questionNumber: 11,
      imageUrl: IMAGE_URL + 'ac3/Activity_3_Image_11.JPG',
      answer: false
    },
    {
      questionNumber: 12,
      imageUrl: IMAGE_URL + 'ac3/Activity_3_Image_12.JPG',
      answer: false
    },
    {
      questionNumber: 13,
      imageUrl: IMAGE_URL + 'ac3/Activity_3_Image_13.JPG',
      answer: true
    },
    {
      questionNumber: 14,
      imageUrl: IMAGE_URL + 'ac3/Activity_3_Image_14.JPG',
      answer: false
    },
    {
      questionNumber: 15,
      imageUrl: IMAGE_URL + 'ac3/Activity_3_Image_15.JPG',
      answer: false
    },
    {
      questionNumber: 16,
      imageUrl: IMAGE_URL + 'ac3/Activity_3_Image_16.JPG',
      answer: true
    },
    {
      questionNumber: 17,
      imageUrl: IMAGE_URL + 'ac3/Activity_3_Image_17.JPG',
      answer: false
    },
    {
      questionNumber: 18,
      imageUrl: IMAGE_URL + 'ac3/Activity_3_Image_18.JPG',
      answer: true
    },
    {
      questionNumber: 19,
      imageUrl: IMAGE_URL + 'ac3/Activity_3_Image_19.JPG',
      answer: true
    },
    {
      questionNumber: 20,
      imageUrl: IMAGE_URL + 'ac3/Activity_3_Image_20.JPG',
      answer: true
    },
    {
      questionNumber: 21,
      imageUrl: IMAGE_URL + 'ac3/Activity_3_Image_21.JPG',
      answer: true
    },
    {
      questionNumber: 22,
      imageUrl: IMAGE_URL + 'ac3/Activity_3_Image_22.JPG',
      answer: true
    },
    {
      questionNumber: 23,
      imageUrl: IMAGE_URL + 'ac3/Activity_3_Image_23.JPG',
      answer: true
    },
    {
      questionNumber: 24,
      imageUrl: IMAGE_URL + 'ac3/Activity_3_Image_24.JPG',
      answer: false
    },
    {
      questionNumber: 25,
      imageUrl: IMAGE_URL + 'ac3/Activity_3_Image_25.JPG',
      answer: true
    },
    {
      questionNumber: 26,
      imageUrl: IMAGE_URL + 'ac3/Activity_3_Image_26.JPG',
      answer: false
    },
    {
      questionNumber: 27,
      imageUrl: IMAGE_URL + 'ac3/Activity_3_Image_27.JPG',
      answer: true
    },
    {
      questionNumber: 28,
      imageUrl: IMAGE_URL + 'ac3/Activity_3_Image_28.JPG',
      answer: false
    },
    {
      questionNumber: 29,
      imageUrl: IMAGE_URL + 'ac3/Activity_3_Image_29.JPG',
      answer: true
    },
    {
      questionNumber: 30,
      imageUrl: IMAGE_URL + 'ac3/Activity_3_Image_30.JPG',
      answer: true
    },
    {
      questionNumber: 31,
      imageUrl: IMAGE_URL + 'ac3/Activity_3_Image_31.JPG',
      answer: true
    },
    {
      questionNumber: 32,
      imageUrl: IMAGE_URL + 'ac3/Activity_3_Image_32.JPG',
      answer: true
    },
    {
      questionNumber: 33,
      imageUrl: IMAGE_URL + 'ac3/Activity_3_Image_33.JPG',
      answer: false
    },
    {
      questionNumber: 34,
      imageUrl: IMAGE_URL + 'ac3/Activity_3_Image_34.JPG',
      answer: true
    },
    {
      questionNumber: 35,
      imageUrl: IMAGE_URL + 'ac3/Activity_3_Image_35.JPG',
      answer: true
    },
    {
      questionNumber: 36,
      imageUrl: IMAGE_URL + 'ac3/Activity_3_Image_36.JPG',
      answer: true
    },
    {
      questionNumber: 37,
      imageUrl: IMAGE_URL + 'ac3/Activity_3_Image_37.JPG',
      answer: true
    },
    {
      questionNumber: 38,
      imageUrl: IMAGE_URL + 'ac3/Activity_3_Image_38.JPG',
      answer: false
    },
    {
      questionNumber: 39,
      imageUrl: IMAGE_URL + 'ac3/Activity_3_Image_39.JPG',
      answer: true
    },
    {
      questionNumber: 40,
      imageUrl: IMAGE_URL + 'ac3/Activity_3_Image_40.JPG',
      answer: true
    },
    {
      questionNumber: 41,
      imageUrl: IMAGE_URL + 'ac3/Activity_3_Image_41.JPG',
      answer: true
    },
    {
      questionNumber: 42,
      imageUrl: IMAGE_URL + 'ac3/Activity_3_Image_42.JPG',
      answer: true
    },
    {
      questionNumber: 43,
      imageUrl: IMAGE_URL + 'ac3/Activity_3_Image_43.JPG',
      answer: true
    },
    {
      questionNumber: 44,
      imageUrl: IMAGE_URL + 'ac3/Activity_3_Image_44.JPG',
      answer: true
    },
    {
      questionNumber: 45,
      imageUrl: IMAGE_URL + 'ac3/Activity_3_Image_45.JPG',
      answer: true
    },
    {
      questionNumber: 46,
      imageUrl: IMAGE_URL + 'ac3/Activity_3_Image_46.JPG',
      answer: true
    },
    {
      questionNumber: 47,
      imageUrl: IMAGE_URL + 'ac3/Activity_3_Image_47.JPG',
      answer: true
    },
    {
      questionNumber: 48,
      imageUrl: IMAGE_URL + 'ac3/Activity_3_Image_48.JPG',
      answer: false
    },
    {
      questionNumber: 49,
      imageUrl: IMAGE_URL + 'ac3/Activity_3_Image_49.JPG',
      answer: true
    },
    {
      questionNumber: 50,
      imageUrl: IMAGE_URL + 'ac3/Activity_3_Image_50.JPG',
      answer: false
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
      res.render('activity/activity-3', {
        student: student,
        questId: questId,
        question: question,
        answer: answer,
        correct: correct,
        questionList: questionListString,
        reqMethod: 'GET',
        path: '/activity-3',
        title: 'Activity 3',
        isAuthenticated: req.session.isLoggedIn
      });
    })
    .catch(err => console.log(err));
};

/**  ========================================================================================
 *
 * Activity 2  POST */
exports.postActivity03 = (req, res, next) => {
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
      imageUrl: IMAGE_URL + 'ac3/Activity_3_Image_1.JPG',
      answer: true,
      message: 'This is wanted touching because both people seem to agree.'
    },
    {
      questionNumber: 2,
      imageUrl: IMAGE_URL + 'ac3/Activity_3_Image_2.JPG',
      answer: false,
      message:
        'This is unwanted touching because both people don’t seem to agree.'
    },
    {
      questionNumber: 3,
      imageUrl: IMAGE_URL + 'ac3/Activity_3_Image_3.JPG',
      answer: true,
      message: 'This is wanted touching because both people seem to agree.'
    },
    {
      questionNumber: 4,
      imageUrl: IMAGE_URL + 'ac3/Activity_3_Image_4.JPG',
      answer: false,
      message:
        'This is unwanted touching because both people don’t seem to agree.'
    },
    {
      questionNumber: 5,
      imageUrl: IMAGE_URL + 'ac3/Activity_3_Image_5.JPG',
      answer: true,
      message: 'This is wanted touching because both people seem to agree.'
    },
    {
      questionNumber: 6,
      imageUrl: IMAGE_URL + 'ac3/Activity_3_Image_6.JPG',
      answer: true,
      message: 'This is wanted touching because both people seem to agree.'
    },
    {
      questionNumber: 7,
      imageUrl: IMAGE_URL + 'ac3/Activity_3_Image_7.JPG',
      answer: false,
      message:
        'This is unwanted touching because both people don’t seem to agree.'
    },
    {
      questionNumber: 8,
      imageUrl: IMAGE_URL + 'ac3/Activity_3_Image_8.JPG',
      answer: false,
      message:
        'This is unwanted touching because both people don’t seem to agree.'
    },
    {
      questionNumber: 9,
      imageUrl: IMAGE_URL + 'ac3/Activity_3_Image_9.JPG',
      answer: true,
      message: 'This is wanted touching because both people seem to agree.'
    },
    {
      questionNumber: 10,
      imageUrl: IMAGE_URL + 'ac3/Activity_3_Image_10.JPG',
      answer: true,
      message: 'This is wanted touching because both people seem to agree.'
    },
    {
      questionNumber: 11,
      imageUrl: IMAGE_URL + 'ac3/Activity_3_Image_11.JPG',
      answer: false,
      message:
        'This is unwanted touching because both people don’t seem to agree.'
    },
    {
      questionNumber: 12,
      imageUrl: IMAGE_URL + 'ac3/Activity_3_Image_12.JPG',
      answer: false,
      message:
        'This is unwanted touching because both people don’t seem to agree.'
    },
    {
      questionNumber: 13,
      imageUrl: IMAGE_URL + 'ac3/Activity_3_Image_13.JPG',
      answer: true,
      message: 'This is wanted touching because both people seem to agree.'
    },
    {
      questionNumber: 14,
      imageUrl: IMAGE_URL + 'ac3/Activity_3_Image_14.JPG',
      answer: false,
      message:
        'This is unwanted touching because both people don’t seem to agree.'
    },
    {
      questionNumber: 15,
      imageUrl: IMAGE_URL + 'ac3/Activity_3_Image_15.JPG',
      answer: false,
      message:
        'This is unwanted touching because both people don’t seem to agree.'
    },
    {
      questionNumber: 16,
      imageUrl: IMAGE_URL + 'ac3/Activity_3_Image_16.JPG',
      answer: true,
      message: 'This is wanted touching because both people seem to agree.'
    },
    {
      questionNumber: 17,
      imageUrl: IMAGE_URL + 'ac3/Activity_3_Image_17.JPG',
      answer: false,
      message:
        'This is unwanted touching because both people don’t seem to agree.'
    },
    {
      questionNumber: 18,
      imageUrl: IMAGE_URL + 'ac3/Activity_3_Image_18.JPG',
      answer: true,
      message: 'This is wanted touching because both people seem to agree.'
    },
    {
      questionNumber: 19,
      imageUrl: IMAGE_URL + 'ac3/Activity_3_Image_19.JPG',
      answer: true,
      message: 'This is wanted touching because both people seem to agree.'
    },
    {
      questionNumber: 20,
      imageUrl: IMAGE_URL + 'ac3/Activity_3_Image_20.JPG',
      answer: true,
      message: 'This is wanted touching because both people seem to agree.'
    },
    {
      questionNumber: 21,
      imageUrl: IMAGE_URL + 'ac3/Activity_3_Image_21.JPG',
      answer: true,
      message: 'This is wanted touching because both people seem to agree.'
    },
    {
      questionNumber: 22,
      imageUrl: IMAGE_URL + 'ac3/Activity_3_Image_22.JPG',
      answer: true,
      message: 'This is wanted touching because both people seem to agree.'
    },
    {
      questionNumber: 23,
      imageUrl: IMAGE_URL + 'ac3/Activity_3_Image_23.JPG',
      answer: true,
      message: 'This is wanted touching because both people seem to agree.'
    },
    {
      questionNumber: 24,
      imageUrl: IMAGE_URL + 'ac3/Activity_3_Image_24.JPG',
      answer: false,
      message:
        'This is unwanted touching because both people don’t seem to agree.'
    },
    {
      questionNumber: 25,
      imageUrl: IMAGE_URL + 'ac3/Activity_3_Image_25.JPG',
      answer: true,
      message: 'This is wanted touching because both people seem to agree.'
    },
    {
      questionNumber: 26,
      imageUrl: IMAGE_URL + 'ac3/Activity_3_Image_26.JPG',
      answer: false,
      message:
        'This is unwanted touching because both people don’t seem to agree.'
    },
    {
      questionNumber: 27,
      imageUrl: IMAGE_URL + 'ac3/Activity_3_Image_27.JPG',
      answer: true,
      message: 'This is wanted touching because both people seem to agree.'
    },
    {
      questionNumber: 28,
      imageUrl: IMAGE_URL + 'ac3/Activity_3_Image_28.JPG',
      answer: false,
      message:
        'This is unwanted touching because both people don’t seem to agree.'
    },
    {
      questionNumber: 29,
      imageUrl: IMAGE_URL + 'ac3/Activity_3_Image_29.JPG',
      answer: true,
      message: 'This is wanted touching because both people seem to agree.'
    },
    {
      questionNumber: 30,
      imageUrl: IMAGE_URL + 'ac3/Activity_3_Image_30.JPG',
      answer: true,
      message: 'This is wanted touching because both people seem to agree.'
    },
    {
      questionNumber: 31,
      imageUrl: IMAGE_URL + 'ac3/Activity_3_Image_31.JPG',
      answer: true,
      message: 'This is wanted touching because both people seem to agree.'
    },
    {
      questionNumber: 32,
      imageUrl: IMAGE_URL + 'ac3/Activity_3_Image_32.JPG',
      answer: true,
      message: 'This is wanted touching because both people seem to agree.'
    },
    {
      questionNumber: 33,
      imageUrl: IMAGE_URL + 'ac3/Activity_3_Image_33.JPG',
      answer: false,
      message:
        'This is unwanted touching because both people don’t seem to agree.'
    },
    {
      questionNumber: 34,
      imageUrl: IMAGE_URL + 'ac3/Activity_3_Image_34.JPG',
      answer: true,
      message: 'This is wanted touching because both people seem to agree.'
    },
    {
      questionNumber: 35,
      imageUrl: IMAGE_URL + 'ac3/Activity_3_Image_35.JPG',
      answer: true,
      message: 'This is wanted touching because both people seem to agree.'
    },
    {
      questionNumber: 36,
      imageUrl: IMAGE_URL + 'ac3/Activity_3_Image_36.JPG',
      answer: true,
      message: 'This is wanted touching because both people seem to agree.'
    },
    {
      questionNumber: 37,
      imageUrl: IMAGE_URL + 'ac3/Activity_3_Image_37.JPG',
      answer: true,
      message: 'This is wanted touching because both people seem to agree.'
    },
    {
      questionNumber: 38,
      imageUrl: IMAGE_URL + 'ac3/Activity_3_Image_38.JPG',
      answer: false,
      message:
        'This is unwanted touching because both people don’t seem to agree.'
    },
    {
      questionNumber: 39,
      imageUrl: IMAGE_URL + 'ac3/Activity_3_Image_39.JPG',
      answer: true,
      message: 'This is wanted touching because both people seem to agree.'
    },
    {
      questionNumber: 40,
      imageUrl: IMAGE_URL + 'ac3/Activity_3_Image_40.JPG',
      answer: true,
      message: 'This is wanted touching because both people seem to agree.'
    },
    {
      questionNumber: 41,
      imageUrl: IMAGE_URL + 'ac3/Activity_3_Image_41.JPG',
      answer: true,
      message: 'This is wanted touching because both people seem to agree.'
    },
    {
      questionNumber: 42,
      imageUrl: IMAGE_URL + 'ac3/Activity_3_Image_42.JPG',
      answer: true,
      message: 'This is wanted touching because both people seem to agree.'
    },
    {
      questionNumber: 43,
      imageUrl: IMAGE_URL + 'ac3/Activity_3_Image_43.JPG',
      answer: true,
      message: 'This is wanted touching because both people seem to agree.'
    },
    {
      questionNumber: 44,
      imageUrl: IMAGE_URL + 'ac3/Activity_3_Image_44.JPG',
      answer: true,
      message: 'This is wanted touching because both people seem to agree.'
    },
    {
      questionNumber: 45,
      imageUrl: IMAGE_URL + 'ac3/Activity_3_Image_45.JPG',
      answer: true,
      message: 'This is wanted touching because both people seem to agree.'
    },
    {
      questionNumber: 46,
      imageUrl: IMAGE_URL + 'ac3/Activity_3_Image_46.JPG',
      answer: true,
      message: 'This is wanted touching because both people seem to agree.'
    },
    {
      questionNumber: 47,
      imageUrl: IMAGE_URL + 'ac3/Activity_3_Image_47.JPG',
      answer: true,
      message: 'This is wanted touching because both people seem to agree.'
    },
    {
      questionNumber: 48,
      imageUrl: IMAGE_URL + 'ac3/Activity_3_Image_48.JPG',
      answer: false,
      message:
        'This is unwanted touching because both people don’t seem to agree.'
    },
    {
      questionNumber: 49,
      imageUrl: IMAGE_URL + 'ac3/Activity_3_Image_49.JPG',
      answer: true,
      message: 'This is wanted touching because both people seem to agree.'
    },
    {
      questionNumber: 50,
      imageUrl: IMAGE_URL + 'ac3/Activity_3_Image_50.JPG',
      answer: false,
      message:
        'This is unwanted touching because both people don’t seem to agree.'
    }
  ];

  let questSelection = questionList[questId - 1];
  const question = questions[questSelection - 1];

  Student.findById(studId)
    .then(student => {
      res.render('activity/activity-3', {
        student: student,
        questId: questId,
        question: question,
        answer: answer,
        correct: correctString,
        questionList: questionListString,
        reqMethod: 'POST',
        path: '/activity-3',
        title: 'Activity 3',
        isAuthenticated: req.session.isLoggedIn
      });
    })
    .catch(err => console.log(err));
};

/**  ========================================================================================
 *
 * Activity 3 SAVE   */
exports.getActivity03Save = (req, res, next) => {
  const studId = req.params.studentId;
  let questId = Number(req.params.questionId);
  let correct = Number(req.params.correct);
  let thisScore = correct / (questId - 1);
  thisScore = thisScore.toFixed(2);
  let congratsUrl = '/activity-congrats/3/' + studId;

  Student.findById(studId).then(student => {
    let scoresArray = student.scores[2].ac_scores;
    let datesArray = student.scores[2].ac_dates;
    let thisDate = new Date();
    scoresArray.push(thisScore);
    datesArray.push(thisDate);
    student.scores[2].ac_scores = scoresArray;
    student.scores[2].ac_dates = datesArray;

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
 * Student  POST  activity 3*/
exports.postActivity03Leave = (req, res, next) => {
  const studId = req.params.studentId;
  let questId = Number(req.params.questionId);
  let correct = Number(req.params.correct);
  let thisScore = correct / (questId - 1);
  thisScore = thisScore.toFixed(2);

  const redirectUrl = '/student/' + studId;

  Student.findById(studId).then(student => {
    let scoresArray = student.scores[2].ac_scores;
    let datesArray = student.scores[2].ac_dates;
    let thisDate = new Date();
    scoresArray.push(thisScore);
    datesArray.push(thisDate);
    student.scores[2].ac_scores = scoresArray;
    student.scores[2].ac_dates = datesArray;

    student
      .save()
      .then(result => {
        res.redirect(redirectUrl);
      })
      .catch(err => console.log(err));
  });
};

/**  ========================================================================================
 *
 * Summary GET */
exports.getSummary3 = (req, res, next) => {
  const studId = req.params.studentId;
  let studentUrl = '/student/' + req.params.studentId;

  let sid8 = studId.slice(-8);

  Student.findById(studId)
    .then(student => {
      let currentScores1 = student.scores[2].ac_scores;
      let currentDates1 = student.scores[2].ac_dates;

      res.render('activity/activity-summary3', {
        student: student,
        scores: currentScores1,
        dates: currentDates1,
        sid8: sid8,
        path: '/activity-summary3',
        title: 'Summary',
        isAuthenticated: req.session.isLoggedIn
      });
    })
    .catch(err => console.log(err));
};
