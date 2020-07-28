const Student = require('../models/Student');

const CLOUDCUBE_URL = 'https://cloud-cube.s3.amazonaws.com/hdfb18ccxnip';
let IMAGE_URL = CLOUDCUBE_URL + '/public/';

/**
 *
 * Activity 5 GET */
exports.getActivity05 = (req, res, next) => {
  const studId = req.params.studentId;
  let questId = req.params.questionId;
  let correct = req.params.correct;
  let studentUrl = '/student/' + studId;
  let congratsUrl =
    '/activity-5-save/' + studId + '/' + questId + '/' + correct;

  // After 15 questions, round is done, save and go to Congrats page
  if (questId > 15) {
    return res.redirect(congratsUrl);
  }

  // Yeah I know...
  let answer = null;
  const questions = [
    {
      questionNumber: 1,
      imageUrl: IMAGE_URL + 'ac5/Activity_5_Image_1.JPG',
      answer: true
    },
    {
      questionNumber: 2,
      imageUrl: IMAGE_URL + 'ac5/Activity_5_Image_2.JPG',
      answer: false
    },
    {
      questionNumber: 3,
      imageUrl: IMAGE_URL + 'ac5/Activity_5_Image_3.JPG',
      answer: true
    },
    {
      questionNumber: 4,
      imageUrl: IMAGE_URL + 'ac5/Activity_5_Image_4.JPG',
      answer: false
    },
    {
      questionNumber: 5,
      imageUrl: IMAGE_URL + 'ac5/Activity_5_Image_5.JPG',
      answer: false
    },
    {
      questionNumber: 6,
      imageUrl: IMAGE_URL + 'ac5/Activity_5_Image_6.JPG',
      answer: false
    },
    {
      questionNumber: 7,
      imageUrl: IMAGE_URL + 'ac5/Activity_5_Image_7.JPG',
      answer: false
    },
    {
      questionNumber: 8,
      imageUrl: IMAGE_URL + 'ac5/Activity_5_Image_8.JPG',
      answer: true
    },
    {
      questionNumber: 9,
      imageUrl: IMAGE_URL + 'ac5/Activity_5_Image_9.JPG',
      answer: false
    },
    {
      questionNumber: 10,
      imageUrl: IMAGE_URL + 'ac5/Activity_5_Image_10.JPG',
      answer: true
    },
    {
      questionNumber: 11,
      imageUrl: IMAGE_URL + 'ac5/Activity_5_Image_11.JPG',
      answer: true
    },
    {
      questionNumber: 12,
      imageUrl: IMAGE_URL + 'ac5/Activity_5_Image_12.JPG',
      answer: false
    },
    {
      questionNumber: 13,
      imageUrl: IMAGE_URL + 'ac5/Activity_5_Image_13.JPG',
      answer: true
    },
    {
      questionNumber: 14,
      imageUrl: IMAGE_URL + 'ac5/Activity_5_Image_14.JPG',
      answer: false
    },
    {
      questionNumber: 15,
      imageUrl: IMAGE_URL + 'ac5/Activity_5_Image_15.JPG',
      answer: true
    },
    {
      questionNumber: 16,
      imageUrl: IMAGE_URL + 'ac5/Activity_5_Image_16.JPG',
      answer: true
    },
    {
      questionNumber: 17,
      imageUrl: IMAGE_URL + 'ac5/Activity_5_Image_17.JPG',
      answer: false
    },
    {
      questionNumber: 18,
      imageUrl: IMAGE_URL + 'ac5/Activity_5_Image_18.JPG',
      answer: true
    },
    {
      questionNumber: 19,
      imageUrl: IMAGE_URL + 'ac5/Activity_5_Image_19.JPG',
      answer: false
    },
    {
      questionNumber: 20,
      imageUrl: IMAGE_URL + 'ac5/Activity_5_Image_20.JPG',
      answer: false
    },
    {
      questionNumber: 21,
      imageUrl: IMAGE_URL + 'ac5/Activity_5_Image_21.JPG',
      answer: true
    },
    {
      questionNumber: 22,
      imageUrl: IMAGE_URL + 'ac5/Activity_5_Image_22.JPG',
      answer: false
    },
    {
      questionNumber: 23,
      imageUrl: IMAGE_URL + 'ac5/Activity_5_Image_23.JPG',
      answer: false
    },
    {
      questionNumber: 24,
      imageUrl: IMAGE_URL + 'ac5/Activity_5_Image_24.JPG',
      answer: true
    },
    {
      questionNumber: 25,
      imageUrl: IMAGE_URL + 'ac5/Activity_5_Image_25.JPG',
      answer: false
    },
    {
      questionNumber: 26,
      imageUrl: IMAGE_URL + 'ac5/Activity_5_Image_26.JPG',
      answer: true
    },
    {
      questionNumber: 27,
      imageUrl: IMAGE_URL + 'ac5/Activity_5_Image_27.JPG',
      answer: false
    },
    {
      questionNumber: 28,
      imageUrl: IMAGE_URL + 'ac5/Activity_5_Image_28.JPG',
      answer: true
    },
    {
      questionNumber: 29,
      imageUrl: IMAGE_URL + 'ac5/Activity_5_Image_29.JPG',
      answer: true
    },
    {
      questionNumber: 30,
      imageUrl: IMAGE_URL + 'ac5/Activity_5_Image_30.JPG',
      answer: true
    },
    {
      questionNumber: 31,
      imageUrl: IMAGE_URL + 'ac5/Activity_5_Image_31.JPG',
      answer: false
    },
    {
      questionNumber: 32,
      imageUrl: IMAGE_URL + 'ac5/Activity_5_Image_32.JPG',
      answer: false
    },
    {
      questionNumber: 33,
      imageUrl: IMAGE_URL + 'ac5/Activity_5_Image_33.JPG',
      answer: false
    },
    {
      questionNumber: 34,
      imageUrl: IMAGE_URL + 'ac5/Activity_5_Image_34.JPG',
      answer: false
    },
    {
      questionNumber: 35,
      imageUrl: IMAGE_URL + 'ac5/Activity_5_Image_35.JPG',
      answer: true
    },
    {
      questionNumber: 36,
      imageUrl: IMAGE_URL + 'ac5/Activity_5_Image_36.JPG',
      answer: false
    },
    {
      questionNumber: 37,
      imageUrl: IMAGE_URL + 'ac5/Activity_5_Image_37.JPG',
      answer: false
    },
    {
      questionNumber: 38,
      imageUrl: IMAGE_URL + 'ac5/Activity_5_Image_38.JPG',
      answer: false
    },
    {
      questionNumber: 39,
      imageUrl: IMAGE_URL + 'ac5/Activity_5_Image_39.JPG',
      answer: false
    },
    {
      questionNumber: 40,
      imageUrl: IMAGE_URL + 'ac5/Activity_5_Image_40.JPG',
      answer: false
    },
    {
      questionNumber: 41,
      imageUrl: IMAGE_URL + 'ac5/Activity_5_Image_41.JPG',
      answer: false
    },
    {
      questionNumber: 42,
      imageUrl: IMAGE_URL + 'ac5/Activity_5_Image_42.JPG',
      answer: false
    },
    {
      questionNumber: 43,
      imageUrl: IMAGE_URL + 'ac5/Activity_5_Image_43.JPG',
      answer: false
    },
    {
      questionNumber: 44,
      imageUrl: IMAGE_URL + 'ac5/Activity_5_Image_44.JPG',
      answer: true
    },
    {
      questionNumber: 45,
      imageUrl: IMAGE_URL + 'ac5/Activity_5_Image_45.JPG',
      answer: false
    },
    {
      questionNumber: 46,
      imageUrl: IMAGE_URL + 'ac5/Activity_5_Image_46.JPG',
      answer: false
    },
    {
      questionNumber: 47,
      imageUrl: IMAGE_URL + 'ac5/Activity_5_Image_47.JPG',
      answer: false
    },
    {
      questionNumber: 48,
      imageUrl: IMAGE_URL + 'ac5/Activity_5_Image_48.JPG',
      answer: false
    },
    {
      questionNumber: 49,
      imageUrl: IMAGE_URL + 'ac5/Activity_5_Image_49.JPG',
      answer: false
    },
    {
      questionNumber: 50,
      imageUrl: IMAGE_URL + 'ac5/Activity_5_Image_50.JPG',
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
      res.render('activity/activity-5', {
        student: student,
        questId: questId,
        question: question,
        answer: answer,
        correct: correct,
        questionList: questionListString,
        reqMethod: 'GET',
        path: '/activity-5',
        title: 'Activity 5',
        isAuthenticated: req.session.isLoggedIn
      });
    })
    .catch(err => console.log(err));
};

/**  ========================================================================================
 *
 * Activity 5  POST */
exports.postActivity05 = (req, res, next) => {
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
      imageUrl: IMAGE_URL + 'ac5/Activity_5_Image_1.JPG',
      answer: true,
      message:
        'A sexual touch is okay when:<br> &#10004; Both people are adults.<br> &#10004; Both people agree. <br> &#10004; They are in a private place.'
    },
    {
      questionNumber: 2,
      imageUrl: IMAGE_URL + 'ac5/Activity_5_Image_2.JPG',
      answer: false,
      message:
        'A sexual touch is okay when:<br> &#10004; Both people are adults.<br> &#10004; Both people agree. <br> &#9421; They are in a private place.'
    },
    {
      questionNumber: 3,
      imageUrl: IMAGE_URL + 'ac5/Activity_5_Image_3.JPG',
      answer: true,
      message:
        'A sexual touch is okay when:<br> &#10004; Both people are adults.<br> &#10004; Both people agree. <br> &#10004; They are in a private place.'
    },
    {
      questionNumber: 4,
      imageUrl: IMAGE_URL + 'ac5/Activity_5_Image_4.JPG',
      answer: false,
      message:
        'A sexual touch is okay when:<br> &#10004; Both people are adults.<br> &#9421; Both people agree. <br> &#10004; They are in a private place.'
    },
    {
      questionNumber: 5,
      imageUrl: IMAGE_URL + 'ac5/Activity_5_Image_5.JPG',
      answer: false,
      message:
        'A sexual touch is okay when:<br> &#10004; Both people are adults.<br> &#10004; Both people agree. <br> &#9421; They are in a private place.'
    },
    {
      questionNumber: 6,
      imageUrl: IMAGE_URL + 'ac5/Activity_5_Image_6.JPG',
      answer: false,
      message:
        'A sexual touch is okay when:<br> &#10004; Both people are adults.<br> &#10004; Both people agree. <br> &#9421; They are in a private place.'
    },
    {
      questionNumber: 7,
      imageUrl: IMAGE_URL + 'ac5/Activity_5_Image_7.JPG',
      answer: false,
      message:
        'A sexual touch is okay when:<br> &#10004; Both people are adults.<br> &#9421; Both people agree. <br> &#10004; They are in a private place.'
    },
    {
      questionNumber: 8,
      imageUrl: IMAGE_URL + 'ac5/Activity_5_Image_8.JPG',
      answer: true,
      message:
        'A sexual touch is okay when:<br> &#10004; Both people are adults.<br> &#10004; Both people agree. <br> &#10004; They are in a private place.'
    },
    {
      questionNumber: 9,
      imageUrl: IMAGE_URL + 'ac5/Activity_5_Image_9.JPG',
      answer: false,
      message:
        'A sexual touch is okay when:<br> &#10004; Both people are adults.<br> &#10004; Both people agree. <br> &#9421; They are in a private place.'
    },
    {
      questionNumber: 10,
      imageUrl: IMAGE_URL + 'ac5/Activity_5_Image_10.JPG',
      answer: true,
      message:
        'A sexual touch is okay when:<br> &#10004; Both people are adults.<br> &#10004; Both people agree. <br> &#10004; They are in a private place.'
    },
    {
      questionNumber: 11,
      imageUrl: IMAGE_URL + 'ac5/Activity_5_Image_11.JPG',
      answer: true,
      message:
        'A sexual touch is okay when:<br> &#10004; Both people are adults.<br> &#10004; Both people agree. <br> &#10004; They are in a private place.'
    },
    {
      questionNumber: 12,
      imageUrl: IMAGE_URL + 'ac5/Activity_5_Image_12.JPG',
      answer: false,
      message:
        'A sexual touch is okay when:<br> &#10004; Both people are adults.<br> &#9421; Both people agree. <br> &#10004; They are in a private place.'
    },
    {
      questionNumber: 13,
      imageUrl: IMAGE_URL + 'ac5/Activity_5_Image_13.JPG',
      answer: true,
      message:
        'A sexual touch is okay when:<br> &#10004; Both people are adults.<br> &#10004; Both people agree. <br> &#10004; They are in a private place.'
    },
    {
      questionNumber: 14,
      imageUrl: IMAGE_URL + 'ac5/Activity_5_Image_14.JPG',
      answer: false,
      message:
        'A sexual touch is okay when:<br> &#10004; Both people are adults.<br> &#9421; Both people agree. <br> &#10004; They are in a private place.'
    },
    {
      questionNumber: 15,
      imageUrl: IMAGE_URL + 'ac5/Activity_5_Image_15.JPG',
      answer: true,
      message:
        'A sexual touch is okay when:<br> &#10004; Both people are adults.<br> &#10004; Both people agree. <br> &#10004; They are in a private place.'
    },
    {
      questionNumber: 16,
      imageUrl: IMAGE_URL + 'ac5/Activity_5_Image_16.JPG',
      answer: true,
      message:
        'A sexual touch is okay when:<br> &#10004; Both people are adults.<br> &#10004; Both people agree. <br> &#10004; They are in a private place.'
    },
    {
      questionNumber: 17,
      imageUrl: IMAGE_URL + 'ac5/Activity_5_Image_17.JPG',
      answer: false,
      message:
        'A sexual touch is okay when:<br> &#10004; Both people are adults.<br> &#9421; Both people agree. <br> &#9421; They are in a private place.'
    },
    {
      questionNumber: 18,
      imageUrl: IMAGE_URL + 'ac5/Activity_5_Image_18.JPG',
      answer: true,
      message:
        'A sexual touch is okay when:<br> &#10004; Both people are adults.<br> &#10004; Both people agree. <br> &#10004; They are in a private place.'
    },
    {
      questionNumber: 19,
      imageUrl: IMAGE_URL + 'ac5/Activity_5_Image_19.JPG',
      answer: false,
      message:
        'A sexual touch is okay when:<br> &#10004; Both people are adults.<br> &#10004; Both people agree. <br> &#9421; They are in a private place.'
    },
    {
      questionNumber: 20,
      imageUrl: IMAGE_URL + 'ac5/Activity_5_Image_20.JPG',
      answer: false,
      message:
        'A sexual touch is okay when:<br> &#10004; Both people are adults.<br> &#9421; Both people agree. <br> &#10004; They are in a private place.'
    },
    {
      questionNumber: 21,
      imageUrl: IMAGE_URL + 'ac5/Activity_5_Image_21.JPG',
      answer: true,
      message:
        'A sexual touch is okay when:<br> &#10004; Both people are adults.<br> &#10004; Both people agree. <br> &#10004; They are in a private place.'
    },
    {
      questionNumber: 22,
      imageUrl: IMAGE_URL + 'ac5/Activity_5_Image_22.JPG',
      answer: false,
      message:
        'A sexual touch is okay when:<br> &#10004; Both people are adults.<br> &#9421; Both people agree. <br> &#10004; They are in a private place.'
    },
    {
      questionNumber: 23,
      imageUrl: IMAGE_URL + 'ac5/Activity_5_Image_23.JPG',
      answer: false,
      message:
        'A sexual touch is okay when:<br> &#10004; Both people are adults.<br> &#10004; Both people agree. <br> &#9421; They are in a private place.'
    },
    {
      questionNumber: 24,
      imageUrl: IMAGE_URL + 'ac5/Activity_5_Image_24.JPG',
      answer: true,
      message:
        'A sexual touch is okay when:<br> &#10004; Both people are adults.<br> &#10004; Both people agree. <br> &#10004; They are in a private place.'
    },
    {
      questionNumber: 25,
      imageUrl: IMAGE_URL + 'ac5/Activity_5_Image_25.JPG',
      answer: false,
      message:
        'A sexual touch is okay when:<br> &#10004; Both people are adults.<br> &#10004; Both people agree. <br> &#9421; They are in a private place.'
    },
    {
      questionNumber: 26,
      imageUrl: IMAGE_URL + 'ac5/Activity_5_Image_26.JPG',
      answer: true,
      message:
        'A sexual touch is okay when:<br> &#10004; Both people are adults.<br> &#10004; Both people agree. <br> &#10004; They are in a private place.'
    },
    {
      questionNumber: 27,
      imageUrl: IMAGE_URL + 'ac5/Activity_5_Image_27.JPG',
      answer: false,
      message:
        'A sexual touch is okay when:<br> &#10004; Both people are adults.<br> &#9421; Both people agree. <br> &#9421; They are in a private place.'
    },
    {
      questionNumber: 28,
      imageUrl: IMAGE_URL + 'ac5/Activity_5_Image_28.JPG',
      answer: true,
      message:
        'A sexual touch is okay when:<br> &#10004; Both people are adults.<br> &#10004; Both people agree. <br> &#10004; They are in a private place.'
    },
    {
      questionNumber: 29,
      imageUrl: IMAGE_URL + 'ac5/Activity_5_Image_29.JPG',
      answer: true,
      message:
        'A sexual touch is okay when:<br> &#10004; Both people are adults.<br> &#10004; Both people agree. <br> &#10004; They are in a private place.'
    },
    {
      questionNumber: 30,
      imageUrl: IMAGE_URL + 'ac5/Activity_5_Image_30.JPG',
      answer: true,
      message:
        'A sexual touch is okay when:<br> &#10004; Both people are adults.<br> &#10004; Both people agree. <br> &#10004; They are in a private place.'
    },
    {
      questionNumber: 31,
      imageUrl: IMAGE_URL + 'ac5/Activity_5_Image_31.JPG',
      answer: false,
      message:
        'A sexual touch is okay when:<br> &#10004; Both people are adults.<br> &#10004; Both people agree. <br> &#9421; They are in a private place.'
    },
    {
      questionNumber: 32,
      imageUrl: IMAGE_URL + 'ac5/Activity_5_Image_32.JPG',
      answer: false,
      message:
        'A sexual touch is okay when:<br> &#10004; Both people are adults.<br> &#9421; Both people agree. <br> &#9421; They are in a private place.'
    },
    {
      questionNumber: 33,
      imageUrl: IMAGE_URL + 'ac5/Activity_5_Image_33.JPG',
      answer: false,
      message:
        'A sexual touch is okay when:<br> &#10004; Both people are adults.<br> &#10004; Both people agree. <br> &#9421; They are in a private place.'
    },
    {
      questionNumber: 34,
      imageUrl: IMAGE_URL + 'ac5/Activity_5_Image_34.JPG',
      answer: false,
      message:
        'A sexual touch is okay when:<br> &#10004; Both people are adults.<br> &#10004; Both people agree. <br> &#9421; They are in a private place.'
    },
    {
      questionNumber: 35,
      imageUrl: IMAGE_URL + 'ac5/Activity_5_Image_35.JPG',
      answer: true,
      message:
        'A sexual touch is okay when:<br> &#10004; Both people are adults.<br> &#10004; Both people agree. <br> &#10004; They are in a private place.'
    },
    {
      questionNumber: 36,
      imageUrl: IMAGE_URL + 'ac5/Activity_5_Image_36.JPG',
      answer: false,
      message:
        'A sexual touch is okay when:<br> &#10004; Both people are adults.<br> &#10004; Both people agree. <br> &#9421; They are in a private place.'
    },
    {
      questionNumber: 37,
      imageUrl: IMAGE_URL + 'ac5/Activity_5_Image_37.JPG',
      answer: false,
      message:
        'A sexual touch is okay when:<br> &#10004; Both people are adults.<br> &#9421; Both people agree. <br> &#10004; They are in a private place.'
    },
    {
      questionNumber: 38,
      imageUrl: IMAGE_URL + 'ac5/Activity_5_Image_38.JPG',
      answer: false,
      message:
        'A sexual touch is okay when:<br> &#10004; Both people are adults.<br> &#10004; Both people agree. <br> &#9421; They are in a private place.'
    },
    {
      questionNumber: 39,
      imageUrl: IMAGE_URL + 'ac5/Activity_5_Image_39.JPG',
      answer: false,
      message:
        'A sexual touch is okay when:<br> &#10004; Both people are adults.<br> &#10004; Both people agree. <br> &#9421; They are in a private place.'
    },
    {
      questionNumber: 40,
      imageUrl: IMAGE_URL + 'ac5/Activity_5_Image_40.JPG',
      answer: false,
      message:
        'A sexual touch is okay when:<br> &#10004; Both people are adults.<br> &#9421; Both people agree. <br> &#10004; They are in a private place.'
    },
    {
      questionNumber: 41,
      imageUrl: IMAGE_URL + 'ac5/Activity_5_Image_41.JPG',
      answer: false,
      message:
        'A sexual touch is okay when:<br> &#10004; Both people are adults.<br> &#10004; Both people agree. <br> &#9421; They are in a private place.'
    },
    {
      questionNumber: 42,
      imageUrl: IMAGE_URL + 'ac5/Activity_5_Image_42.JPG',
      answer: false,
      message:
        'A sexual touch is okay when:<br> &#10004; Both people are adults.<br> &#10004; Both people agree. <br> &#9421; They are in a private place.'
    },
    {
      questionNumber: 43,
      imageUrl: IMAGE_URL + 'ac5/Activity_5_Image_43.JPG',
      answer: false,
      message:
        'A sexual touch is okay when:<br> &#10004; Both people are adults.<br> &#9421; Both people agree. <br> &#10004; They are in a private place.'
    },
    {
      questionNumber: 44,
      imageUrl: IMAGE_URL + 'ac5/Activity_5_Image_44.JPG',
      answer: true,
      message:
        'A sexual touch is okay when:<br> &#10004; Both people are adults.<br> &#10004; Both people agree. <br> &#10004; They are in a private place.'
    },
    {
      questionNumber: 45,
      imageUrl: IMAGE_URL + 'ac5/Activity_5_Image_45.JPG',
      answer: false,
      message:
        'A sexual touch is okay when:<br> &#10004; Both people are adults.<br> &#10004; Both people agree. <br> &#9421; They are in a private place.'
    },
    {
      questionNumber: 46,
      imageUrl: IMAGE_URL + 'ac5/Activity_5_Image_46.JPG',
      answer: false,
      message:
        'A sexual touch is okay when:<br> &#10004; Both people are adults.<br> &#10004; Both people agree. <br> &#9421; They are in a private place.'
    },
    {
      questionNumber: 47,
      imageUrl: IMAGE_URL + 'ac5/Activity_5_Image_47.JPG',
      answer: false,
      message:
        'A sexual touch is okay when:<br> &#10004; Both people are adults.<br> &#10004; Both people agree. <br> &#9421; They are in a private place.'
    },
    {
      questionNumber: 48,
      imageUrl: IMAGE_URL + 'ac5/Activity_5_Image_48.JPG',
      answer: false,
      message:
        'A sexual touch is okay when:<br> &#10004; Both people are adults.<br> &#10004; Both people agree. <br> &#9421; They are in a private place.'
    },
    {
      questionNumber: 49,
      imageUrl: IMAGE_URL + 'ac5/Activity_5_Image_49.JPG',
      answer: false,
      message:
        'A sexual touch is okay when:<br> &#10004; Both people are adults.<br> &#10004; Both people agree. <br> &#9421; They are in a private place.'
    },
    {
      questionNumber: 50,
      imageUrl: IMAGE_URL + 'ac5/Activity_5_Image_50.JPG',
      answer: false,
      message:
        'A sexual touch is okay when:<br> &#10004; Both people are adults.<br> &#9421; Both people agree. <br> &#9421; They are in a private place.'
    }
  ];

  let questSelection = questionList[questId - 1];
  const question = questions[questSelection - 1];

  Student.findById(studId)
    .then(student => {
      res.render('activity/activity-5', {
        student: student,
        questId: questId,
        question: question,
        answer: answer,
        correct: correctString,
        questionList: questionListString,
        reqMethod: 'POST',
        path: '/activity-5',
        title: 'Activity 5',
        isAuthenticated: req.session.isLoggedIn
      });
    })
    .catch(err => console.log(err));
};

/**  ========================================================================================
 *
 * Activity 5 SAVE   */
exports.getActivity05Save = (req, res, next) => {
  const studId = req.params.studentId;
  let questId = Number(req.params.questionId);
  let correct = Number(req.params.correct);
  let thisScore = correct / (questId - 1);
  thisScore = thisScore.toFixed(2);
  let congratsUrl = '/activity-congrats/5/' + studId;

  Student.findById(studId).then(student => {
    let scoresArray = student.scores[4].ac_scores;
    let datesArray = student.scores[4].ac_dates;
    let thisDate = new Date();
    scoresArray.push(thisScore);
    datesArray.push(thisDate);
    student.scores[4].ac_scores = scoresArray;
    student.scores[4].ac_dates = datesArray;

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
 * Student  POST  activity 5 */
exports.postActivity05Leave = (req, res, next) => {
  const studId = req.params.studentId;
  let questId = Number(req.params.questionId);
  let correct = Number(req.params.correct);
  let thisScore = correct / (questId - 1);
  thisScore = thisScore.toFixed(2);

  const redirectUrl = '/student/' + studId;

  Student.findById(studId).then(student => {
    let scoresArray = student.scores[4].ac_scores;
    let datesArray = student.scores[4].ac_dates;
    let thisDate = new Date();
    scoresArray.push(thisScore);
    datesArray.push(thisDate);
    student.scores[4].ac_scores = scoresArray;
    student.scores[4].ac_dates = datesArray;

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
exports.getSummary5 = (req, res, next) => {
  const studId = req.params.studentId;
  let studentUrl = '/student/' + req.params.studentId;

  let sid8 = studId.slice(-8);

  Student.findById(studId)
    .then(student => {
      let currentScores1 = student.scores[4].ac_scores;
      let currentDates1 = student.scores[4].ac_dates;

      res.render('activity/activity-summary5', {
        student: student,
        scores: currentScores1,
        dates: currentDates1,
        sid8: sid8,
        path: '/activity-summary5',
        title: 'Summary',
        isAuthenticated: req.session.isLoggedIn
      });
    })
    .catch(err => console.log(err));
};
