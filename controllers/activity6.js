const Student = require('../models/Student');

const CLOUDCUBE_URL = 'https://cloud-cube.s3.amazonaws.com/hdfb18ccxnip';
let IMAGE_URL = CLOUDCUBE_URL + '/public/';

/**
 *
 * Activity 6 GET */
exports.getActivity06 = (req, res, next) => {
  const studId = req.params.studentId;
  let questId = req.params.questionId;
  let correct = req.params.correct;
  let studentUrl = '/student/' + studId;
  let congratsUrl =
    '/activity-6-save/' + studId + '/' + questId + '/' + correct;

  // After 15 questions, round is done, save and go to Congrats page
  if (questId > 15) {
    return res.redirect(congratsUrl);
  }

  // Yeah I know...
  let answer = null;
  const questions = [
    {
      questionNumber: 1,
      imageUrl: IMAGE_URL + 'ac6/Activity_6_Image_1.JPG',
      answer: false
    },
    {
      questionNumber: 2,
      imageUrl: IMAGE_URL + 'ac6/Activity_6_Image_2.JPG',
      answer: true
    },
    {
      questionNumber: 3,
      imageUrl: IMAGE_URL + 'ac6/Activity_6_Image_3.JPG',
      answer: false
    },
    {
      questionNumber: 4,
      imageUrl: IMAGE_URL + 'ac6/Activity_6_Image_4.JPG',
      answer: true
    },
    {
      questionNumber: 5,
      imageUrl: IMAGE_URL + 'ac6/Activity_6_Image_5.JPG',
      answer: true
    },
    {
      questionNumber: 6,
      imageUrl: IMAGE_URL + 'ac6/Activity_6_Image_6.JPG',
      answer: false
    },
    {
      questionNumber: 7,
      imageUrl: IMAGE_URL + 'ac6/Activity_6_Image_7.JPG',
      answer: false
    },
    {
      questionNumber: 8,
      imageUrl: IMAGE_URL + 'ac6/Activity_6_Image_8.JPG',
      answer: false
    },
    {
      questionNumber: 9,
      imageUrl: IMAGE_URL + 'ac6/Activity_6_Image_9.JPG',
      answer: true
    },
    {
      questionNumber: 10,
      imageUrl: IMAGE_URL + 'ac6/Activity_6_Image_10.JPG',
      answer: true
    },
    {
      questionNumber: 11,
      imageUrl: IMAGE_URL + 'ac6/Activity_6_Image_11.JPG',
      answer: true
    },
    {
      questionNumber: 12,
      imageUrl: IMAGE_URL + 'ac6/Activity_6_Image_12.JPG',
      answer: false
    },
    {
      questionNumber: 13,
      imageUrl: IMAGE_URL + 'ac6/Activity_6_Image_13.JPG',
      answer: true
    },
    {
      questionNumber: 14,
      imageUrl: IMAGE_URL + 'ac6/Activity_6_Image_14.JPG',
      answer: true
    },
    {
      questionNumber: 15,
      imageUrl: IMAGE_URL + 'ac6/Activity_6_Image_15.JPG',
      answer: true
    },
    {
      questionNumber: 16,
      imageUrl: IMAGE_URL + 'ac6/Activity_6_Image_16.JPG',
      answer: true
    },
    {
      questionNumber: 17,
      imageUrl: IMAGE_URL + 'ac6/Activity_6_Image_17.JPG',
      answer: false
    },
    {
      questionNumber: 18,
      imageUrl: IMAGE_URL + 'ac6/Activity_6_Image_18.JPG',
      answer: false
    },
    {
      questionNumber: 19,
      imageUrl: IMAGE_URL + 'ac6/Activity_6_Image_19.JPG',
      answer: false
    },
    {
      questionNumber: 20,
      imageUrl: IMAGE_URL + 'ac6/Activity_6_Image_20.JPG',
      answer: true
    },
    {
      questionNumber: 21,
      imageUrl: IMAGE_URL + 'ac6/Activity_6_Image_21.JPG',
      answer: false
    },
    {
      questionNumber: 22,
      imageUrl: IMAGE_URL + 'ac6/Activity_6_Image_22.JPG',
      answer: true
    },
    {
      questionNumber: 23,
      imageUrl: IMAGE_URL + 'ac6/Activity_6_Image_23.JPG',
      answer: false
    },
    {
      questionNumber: 24,
      imageUrl: IMAGE_URL + 'ac6/Activity_6_Image_24.JPG',
      answer: true
    },
    {
      questionNumber: 25,
      imageUrl: IMAGE_URL + 'ac6/Activity_6_Image_25.JPG',
      answer: true
    },
    {
      questionNumber: 26,
      imageUrl: IMAGE_URL + 'ac6/Activity_6_Image_26.JPG',
      answer: true
    },
    {
      questionNumber: 27,
      imageUrl: IMAGE_URL + 'ac6/Activity_6_Image_27.JPG',
      answer: true
    },
    {
      questionNumber: 28,
      imageUrl: IMAGE_URL + 'ac6/Activity_6_Image_28.JPG',
      answer: false
    },
    {
      questionNumber: 29,
      imageUrl: IMAGE_URL + 'ac6/Activity_6_Image_29.JPG',
      answer: false
    },
    {
      questionNumber: 30,
      imageUrl: IMAGE_URL + 'ac6/Activity_6_Image_30.JPG',
      answer: true
    },
    {
      questionNumber: 31,
      imageUrl: IMAGE_URL + 'ac6/Activity_6_Image_31.JPG',
      answer: false
    },
    {
      questionNumber: 32,
      imageUrl: IMAGE_URL + 'ac6/Activity_6_Image_32.JPG',
      answer: false
    },
    {
      questionNumber: 33,
      imageUrl: IMAGE_URL + 'ac6/Activity_6_Image_33.JPG',
      answer: false
    },
    {
      questionNumber: 34,
      imageUrl: IMAGE_URL + 'ac6/Activity_6_Image_34.JPG',
      answer: false
    },
    {
      questionNumber: 35,
      imageUrl: IMAGE_URL + 'ac6/Activity_6_Image_35.JPG',
      answer: true
    },
    {
      questionNumber: 36,
      imageUrl: IMAGE_URL + 'ac6/Activity_6_Image_36.JPG',
      answer: false
    },
    {
      questionNumber: 37,
      imageUrl: IMAGE_URL + 'ac6/Activity_6_Image_37.JPG',
      answer: false
    },
    {
      questionNumber: 38,
      imageUrl: IMAGE_URL + 'ac6/Activity_6_Image_38.JPG',
      answer: false
    },
    {
      questionNumber: 39,
      imageUrl: IMAGE_URL + 'ac6/Activity_6_Image_39.JPG',
      answer: true
    },
    {
      questionNumber: 40,
      imageUrl: IMAGE_URL + 'ac6/Activity_6_Image_40.JPG',
      answer: false
    },
    {
      questionNumber: 41,
      imageUrl: IMAGE_URL + 'ac6/Activity_6_Image_41.JPG',
      answer: true
    },
    {
      questionNumber: 42,
      imageUrl: IMAGE_URL + 'ac6/Activity_6_Image_42.JPG',
      answer: true
    },
    {
      questionNumber: 43,
      imageUrl: IMAGE_URL + 'ac6/Activity_6_Image_43.JPG',
      answer: true
    },
    {
      questionNumber: 44,
      imageUrl: IMAGE_URL + 'ac6/Activity_6_Image_44.JPG',
      answer: true
    },
    {
      questionNumber: 45,
      imageUrl: IMAGE_URL + 'ac6/Activity_6_Image_45.JPG',
      answer: true
    },
    {
      questionNumber: 46,
      imageUrl: IMAGE_URL + 'ac6/Activity_6_Image_46.JPG',
      answer: true
    },
    {
      questionNumber: 47,
      imageUrl: IMAGE_URL + 'ac6/Activity_6_Image_47.JPG',
      answer: false
    },
    {
      questionNumber: 48,
      imageUrl: IMAGE_URL + 'ac6/Activity_6_Image_48.JPG',
      answer: true
    },
    {
      questionNumber: 49,
      imageUrl: IMAGE_URL + 'ac6/Activity_6_Image_49.JPG',
      answer: true
    },
    {
      questionNumber: 50,
      imageUrl: IMAGE_URL + 'ac6/Activity_6_Image_50.JPG',
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
      res.render('activity/activity-6', {
        student: student,
        questId: questId,
        question: question,
        answer: answer,
        correct: correct,
        questionList: questionListString,
        reqMethod: 'GET',
        path: '/activity-6',
        title: 'Activity 6',
        isAuthenticated: req.session.isLoggedIn
      });
    })
    .catch(err => console.log(err));
};

/**  ========================================================================================
 *
 * Activity 6  POST */
exports.postActivity06 = (req, res, next) => {
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
      imageUrl: IMAGE_URL + 'ac6/Activity_6_Image_1.JPG',
      answer: false,
      message:
        'This is not sexual abuse because there are no private body parts being touched.'
    },
    {
      questionNumber: 2,
      imageUrl: IMAGE_URL + 'ac6/Activity_6_Image_2.JPG',
      answer: true,
      message:
        'This is sexual abuse because a private body part is being touched and both people have not agreed.'
    },
    {
      questionNumber: 3,
      imageUrl: IMAGE_URL + 'ac6/Activity_6_Image_3.JPG',
      answer: false,
      message:
        'This is not sexual abuse because there are no private body parts being touched.'
    },
    {
      questionNumber: 4,
      imageUrl: IMAGE_URL + 'ac6/Activity_6_Image_4.JPG',
      answer: true,
      message:
        'This could be sexual abuse if private body parts are being shown.'
    },
    {
      questionNumber: 5,
      imageUrl: IMAGE_URL + 'ac6/Activity_6_Image_5.JPG',
      answer: true,
      message:
        'This is sexual abuse because a private body part is being touched in public in front of someone who has not agreed.'
    },
    {
      questionNumber: 6,
      imageUrl: IMAGE_URL + 'ac6/Activity_6_Image_6.JPG',
      answer: false,
      message: 'This is not sexual abuse because both people seem to agree.'
    },
    {
      questionNumber: 7,
      imageUrl: IMAGE_URL + 'ac6/Activity_6_Image_7.JPG',
      answer: false,
      message:
        'This is not sexual abuse because there are no private body parts being touched.'
    },
    {
      questionNumber: 8,
      imageUrl: IMAGE_URL + 'ac6/Activity_6_Image_8.JPG',
      answer: false,
      message:
        'This is not sexual abuse because there are no private body parts being touched.'
    },
    {
      questionNumber: 9,
      imageUrl: IMAGE_URL + 'ac6/Activity_6_Image_9.JPG',
      answer: true,
      message:
        'This could be sexual abuse. Looking at private body parts without permission is sexual abuse.'
    },
    {
      questionNumber: 10,
      imageUrl: IMAGE_URL + 'ac6/Activity_6_Image_10.JPG',
      answer: true,
      message:
        'This could be sexual abuse. Looking at private body parts without permission is sexual abuse.'
    },
    {
      questionNumber: 11,
      imageUrl: IMAGE_URL + 'ac6/Activity_6_Image_11.JPG',
      answer: true,
      message:
        'This could be sexual abuse. Looking at private body parts without permission is sexual abuse.'
    },
    {
      questionNumber: 12,
      imageUrl: IMAGE_URL + 'ac6/Activity_6_Image_12.JPG',
      answer: false,
      message: 'This is not sexual abuse because both people seem to agree.'
    },
    {
      questionNumber: 13,
      imageUrl: IMAGE_URL + 'ac6/Activity_6_Image_13.JPG',
      answer: true,
      message:
        'This could be sexual abuse if private body parts are being shown.'
    },
    {
      questionNumber: 14,
      imageUrl: IMAGE_URL + 'ac6/Activity_6_Image_14.JPG',
      answer: true,
      message:
        'This is sexual abuse because a private body part is being touched and both people have not agreed.'
    },
    {
      questionNumber: 15,
      imageUrl: IMAGE_URL + 'ac6/Activity_6_Image_15.JPG',
      answer: true,
      message:
        'This is sexual abuse because a private body part is being touched and both people have not agreed.'
    },
    {
      questionNumber: 16,
      imageUrl: IMAGE_URL + 'ac6/Activity_6_Image_16.JPG',
      answer: true,
      message:
        'This is sexual abuse because a private body part is being touched and both people have not agreed.'
    },
    {
      questionNumber: 17,
      imageUrl: IMAGE_URL + 'ac6/Activity_6_Image_17.JPG',
      answer: false,
      message:
        'This is not sexual abuse because there are no private body parts being touched.'
    },
    {
      questionNumber: 18,
      imageUrl: IMAGE_URL + 'ac6/Activity_6_Image_18.JPG',
      answer: false,
      message:
        'This is not sexual abuse because there are no private body parts being touched.'
    },
    {
      questionNumber: 19,
      imageUrl: IMAGE_URL + 'ac6/Activity_6_Image_19.JPG',
      answer: false,
      message: 'This is not sexual abuse because it looks like a helping touch.'
    },
    {
      questionNumber: 20,
      imageUrl: IMAGE_URL + 'ac6/Activity_6_Image_20.JPG',
      answer: true,
      message:
        'This is sexual abuse because a private body part is being touched and both people have not agreed.'
    },
    {
      questionNumber: 21,
      imageUrl: IMAGE_URL + 'ac6/Activity_6_Image_21.JPG',
      answer: false,
      message: 'This is not sexual abuse because both people seem to agree.'
    },
    {
      questionNumber: 22,
      imageUrl: IMAGE_URL + 'ac6/Activity_6_Image_22.JPG',
      answer: true,
      message:
        'This could be sexual abuse if private body parts are being shown.'
    },
    {
      questionNumber: 23,
      imageUrl: IMAGE_URL + 'ac6/Activity_6_Image_23.JPG',
      answer: false,
      message: 'This is not sexual abuse because both people seem to agree.'
    },
    {
      questionNumber: 24,
      imageUrl: IMAGE_URL + 'ac6/Activity_6_Image_24.JPG',
      answer: true,
      message:
        'This is sexual abuse because a private body part is being touched and both people have not agreed.'
    },
    {
      questionNumber: 25,
      imageUrl: IMAGE_URL + 'ac6/Activity_6_Image_25.JPG',
      answer: true,
      message:
        'This could be sexual abuse if private body parts are being shown.'
    },
    {
      questionNumber: 26,
      imageUrl: IMAGE_URL + 'ac6/Activity_6_Image_26.JPG',
      answer: true,
      message: 'This could be sexual abuse because she cannot give consent.'
    },
    {
      questionNumber: 27,
      imageUrl: IMAGE_URL + 'ac6/Activity_6_Image_27.JPG',
      answer: true,
      message:
        'This could be sexual abuse. Looking at private body parts without permission is sexual abuse.'
    },
    {
      questionNumber: 28,
      imageUrl: IMAGE_URL + 'ac6/Activity_6_Image_28.JPG',
      answer: false,
      message: 'This is not sexual abuse because both people seem to agree.'
    },
    {
      questionNumber: 29,
      imageUrl: IMAGE_URL + 'ac6/Activity_6_Image_29.JPG',
      answer: false,
      message: 'This is not sexual abuse because both people seem to agree.'
    },
    {
      questionNumber: 30,
      imageUrl: IMAGE_URL + 'ac6/Activity_6_Image_30.JPG',
      answer: true,
      message:
        'This is sexual abuse because a private body part is being touched and both people have not agreed.'
    },
    {
      questionNumber: 31,
      imageUrl: IMAGE_URL + 'ac6/Activity_6_Image_31.JPG',
      answer: false,
      message: 'This is not sexual abuse because both people seem to agree.'
    },
    {
      questionNumber: 32,
      imageUrl: IMAGE_URL + 'ac6/Activity_6_Image_32.JPG',
      answer: false,
      message: 'This is not sexual abuse because both people seem to agree.'
    },
    {
      questionNumber: 33,
      imageUrl: IMAGE_URL + 'ac6/Activity_6_Image_33.JPG',
      answer: false,
      message:
        'This is not sexual abuse because there are no private body parts being touched.'
    },
    {
      questionNumber: 34,
      imageUrl: IMAGE_URL + 'ac6/Activity_6_Image_34.JPG',
      answer: false,
      message: 'This is not sexual abuse because it looks like a helping touch.'
    },
    {
      questionNumber: 35,
      imageUrl: IMAGE_URL + 'ac6/Activity_6_Image_35.JPG',
      answer: true,
      message:
        'This is sexual abuse because a private body part is being touched and both people have not agreed.'
    },
    {
      questionNumber: 36,
      imageUrl: IMAGE_URL + 'ac6/Activity_6_Image_36.JPG',
      answer: false,
      message:
        'This is not sexual abuse because there are no private body parts being touched.'
    },
    {
      questionNumber: 37,
      imageUrl: IMAGE_URL + 'ac6/Activity_6_Image_37.JPG',
      answer: false,
      message: 'This is not sexual abuse because it looks like a helping touch.'
    },
    {
      questionNumber: 38,
      imageUrl: IMAGE_URL + 'ac6/Activity_6_Image_38.JPG',
      answer: false,
      message:
        'This is not sexual abuse because no private body parts involved.'
    },
    {
      questionNumber: 39,
      imageUrl: IMAGE_URL + 'ac6/Activity_6_Image_39.JPG',
      answer: true,
      message:
        'This is sexual abuse because a private body part is being touched and both people have not agreed.'
    },
    {
      questionNumber: 40,
      imageUrl: IMAGE_URL + 'ac6/Activity_6_Image_40.JPG',
      answer: false,
      message:
        'This is not sexual abuse because there are no private body parts being touched.'
    },
    {
      questionNumber: 41,
      imageUrl: IMAGE_URL + 'ac6/Activity_6_Image_41.JPG',
      answer: true,
      message:
        'This is sexual abuse because a private body part is being touched and both people have not agreed.'
    },
    {
      questionNumber: 42,
      imageUrl: IMAGE_URL + 'ac6/Activity_6_Image_42.JPG',
      answer: true,
      message:
        'This is sexual abuse because a private body part is being touched and both people have not agreed.'
    },
    {
      questionNumber: 43,
      imageUrl: IMAGE_URL + 'ac6/Activity_6_Image_43.JPG',
      answer: true,
      message:
        'This is sexual abuse because a private body part is being touched and both people have not agreed.'
    },
    {
      questionNumber: 44,
      imageUrl: IMAGE_URL + 'ac6/Activity_6_Image_44.JPG',
      answer: true,
      message:
        'This could be sexual abuse. Looking at private body parts without permission is sexual abuse.'
    },
    {
      questionNumber: 45,
      imageUrl: IMAGE_URL + 'ac6/Activity_6_Image_45.JPG',
      answer: true,
      message:
        'This is sexual abuse because a private body part is being touched and both people have not agreed.'
    },
    {
      questionNumber: 46,
      imageUrl: IMAGE_URL + 'ac6/Activity_6_Image_46.JPG',
      answer: true,
      message:
        'This is sexual abuse because a private body part is being touched and both people have not agreed.'
    },
    {
      questionNumber: 47,
      imageUrl: IMAGE_URL + 'ac6/Activity_6_Image_47.JPG',
      answer: false,
      message:
        'This is not sexual abuse because no private body parts are involved and both people seem to agree.'
    },
    {
      questionNumber: 48,
      imageUrl: IMAGE_URL + 'ac6/Activity_6_Image_48.JPG',
      answer: true,
      message:
        'This is sexual abuse because a private body part is being touched and both people have not agreed.'
    },
    {
      questionNumber: 49,
      imageUrl: IMAGE_URL + 'ac6/Activity_6_Image_49.JPG',
      answer: true,
      message:
        'This is sexual abuse because a private body part is being touched and both people have not agreed.'
    },
    {
      questionNumber: 50,
      imageUrl: IMAGE_URL + 'ac6/Activity_6_Image_50.JPG',
      answer: true,
      message:
        'This is sexual abuse because a private body part is being touched and both people have not agreed.'
    }
  ];

  let questSelection = questionList[questId - 1];
  const question = questions[questSelection - 1];

  Student.findById(studId)
    .then(student => {
      res.render('activity/activity-6', {
        student: student,
        questId: questId,
        question: question,
        answer: answer,
        correct: correctString,
        questionList: questionListString,
        reqMethod: 'POST',
        path: '/activity-6',
        title: 'Activity 6',
        isAuthenticated: req.session.isLoggedIn
      });
    })
    .catch(err => console.log(err));
};

/**  ========================================================================================
 *
 * Activity 6 SAVE   */
exports.getActivity06Save = (req, res, next) => {
  const studId = req.params.studentId;
  let questId = Number(req.params.questionId);
  let correct = Number(req.params.correct);
  let thisScore = correct / (questId - 1);
  thisScore = thisScore.toFixed(2);
  let congratsUrl = '/activity-congrats/6/' + studId;

  Student.findById(studId).then(student => {
    let scoresArray = student.scores[5].ac_scores;
    let datesArray = student.scores[5].ac_dates;
    let thisDate = new Date();
    scoresArray.push(thisScore);
    datesArray.push(thisDate);
    student.scores[5].ac_scores = scoresArray;
    student.scores[5].ac_dates = datesArray;

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
 * Student  POST  activity 6 */
exports.postActivity06Leave = (req, res, next) => {
  const studId = req.params.studentId;
  let questId = Number(req.params.questionId);
  let correct = Number(req.params.correct);
  let thisScore = correct / (questId - 1);
  thisScore = thisScore.toFixed(2);

  const redirectUrl = '/student/' + studId;

  Student.findById(studId).then(student => {
    let scoresArray = student.scores[5].ac_scores;
    let datesArray = student.scores[5].ac_dates;
    let thisDate = new Date();
    scoresArray.push(thisScore);
    datesArray.push(thisDate);
    student.scores[5].ac_scores = scoresArray;
    student.scores[5].ac_dates = datesArray;

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
exports.getSummary6 = (req, res, next) => {
  const studId = req.params.studentId;
  let studentUrl = '/student/' + req.params.studentId;

  let sid8 = studId.slice(-8);

  Student.findById(studId)
    .then(student => {
      let currentScores1 = student.scores[5].ac_scores;
      let currentDates1 = student.scores[5].ac_dates;

      res.render('activity/activity-summary6', {
        student: student,
        scores: currentScores1,
        dates: currentDates1,
        sid8: sid8,
        path: '/activity-summary6',
        title: 'Summary',
        isAuthenticated: req.session.isLoggedIn
      });
    })
    .catch(err => console.log(err));
};
