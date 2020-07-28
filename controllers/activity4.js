const Student = require('../models/Student');
const CLOUDCUBE_URL = 'https://cloud-cube.s3.amazonaws.com/hdfb18ccxnip';
let IMAGE_URL = CLOUDCUBE_URL + '/public/';
// IMAGE_URL = '/images/';

/**
 *
 * Activity 4 GET */
exports.getActivity04 = (req, res, next) => {
  const studId = req.params.studentId;
  let questId = req.params.questionId;
  let correct = req.params.correct;
  let studentUrl = '/student/' + studId;
  let congratsUrl =
    '/activity-4-save/' + studId + '/' + questId + '/' + correct;

  // After 15 questions, round is done, save and go to Congrats page
  if (questId > 15) {
    return res.redirect(congratsUrl);
  }

  // Yeah I know...
  let answer = null;
  const questions = [
    {
      questionNumber: 1,
      imageUrl: IMAGE_URL + 'ac4/Activity_4_Image_1.JPG',
      answer: true
    },
    {
      questionNumber: 2,
      imageUrl: IMAGE_URL + 'ac4/Activity_4_Image_2.JPG',
      answer: true
    },
    {
      questionNumber: 3,
      imageUrl: IMAGE_URL + 'ac4/Activity_4_Image_3.JPG',
      answer: false
    },
    {
      questionNumber: 4,
      imageUrl: IMAGE_URL + 'ac4/Activity_4_Image_4.JPG',
      answer: false
    },
    {
      questionNumber: 5,
      imageUrl: IMAGE_URL + 'ac4/Activity_4_Image_5.JPG',
      answer: false
    },
    {
      questionNumber: 6,
      imageUrl: IMAGE_URL + 'ac4/Activity_4_Image_6.JPG',
      answer: false
    },
    {
      questionNumber: 7,
      imageUrl: IMAGE_URL + 'ac4/Activity_4_Image_7.JPG',
      answer: false
    },
    {
      questionNumber: 8,
      imageUrl: IMAGE_URL + 'ac4/Activity_4_Image_8.JPG',
      answer: false
    },
    {
      questionNumber: 9,
      imageUrl: IMAGE_URL + 'ac4/Activity_4_Image_9.JPG',
      answer: true
    },
    {
      questionNumber: 10,
      imageUrl: IMAGE_URL + 'ac4/Activity_4_Image_10.JPG',
      answer: true
    },
    {
      questionNumber: 11,
      imageUrl: IMAGE_URL + 'ac4/Activity_4_Image_11.JPG',
      answer: true
    },
    {
      questionNumber: 12,
      imageUrl: IMAGE_URL + 'ac4/Activity_4_Image_12.JPG',
      answer: true
    },
    {
      questionNumber: 13,
      imageUrl: IMAGE_URL + 'ac4/Activity_4_Image_13.JPG',
      answer: false
    },
    {
      questionNumber: 14,
      imageUrl: IMAGE_URL + 'ac4/Activity_4_Image_14.JPG',
      answer: true
    },
    {
      questionNumber: 15,
      imageUrl: IMAGE_URL + 'ac4/Activity_4_Image_15.JPG',
      answer: false
    },
    {
      questionNumber: 16,
      imageUrl: IMAGE_URL + 'ac4/Activity_4_Image_16.JPG',
      answer: true
    },
    {
      questionNumber: 17,
      imageUrl: IMAGE_URL + 'ac4/Activity_4_Image_17.JPG',
      answer: true
    },
    {
      questionNumber: 18,
      imageUrl: IMAGE_URL + 'ac4/Activity_4_Image_18.JPG',
      answer: false
    },
    {
      questionNumber: 19,
      imageUrl: IMAGE_URL + 'ac4/Activity_4_Image_19.JPG',
      answer: false
    },
    {
      questionNumber: 20,
      imageUrl: IMAGE_URL + 'ac4/Activity_4_Image_20.JPG',
      answer: false
    },
    {
      questionNumber: 21,
      imageUrl: IMAGE_URL + 'ac4/Activity_4_Image_21.JPG',
      answer: true
    },
    {
      questionNumber: 22,
      imageUrl: IMAGE_URL + 'ac4/Activity_4_Image_22.JPG',
      answer: false
    },
    {
      questionNumber: 23,
      imageUrl: IMAGE_URL + 'ac4/Activity_4_Image_23.JPG',
      answer: false
    },
    {
      questionNumber: 24,
      imageUrl: IMAGE_URL + 'ac4/Activity_4_Image_24.JPG',
      answer: true
    },
    {
      questionNumber: 25,
      imageUrl: IMAGE_URL + 'ac4/Activity_4_Image_25.JPG',
      answer: false
    },
    {
      questionNumber: 26,
      imageUrl: IMAGE_URL + 'ac4/Activity_4_Image_26.JPG',
      answer: false
    },
    {
      questionNumber: 27,
      imageUrl: IMAGE_URL + 'ac4/Activity_4_Image_27.JPG',
      answer: false
    },
    {
      questionNumber: 28,
      imageUrl: IMAGE_URL + 'ac4/Activity_4_Image_28.JPG',
      answer: false
    },
    {
      questionNumber: 29,
      imageUrl: IMAGE_URL + 'ac4/Activity_4_Image_29.JPG',
      answer: false
    },
    {
      questionNumber: 30,
      imageUrl: IMAGE_URL + 'ac4/Activity_4_Image_30.JPG',
      answer: false
    },
    {
      questionNumber: 31,
      imageUrl: IMAGE_URL + 'ac4/Activity_4_Image_31.JPG',
      answer: false
    },
    {
      questionNumber: 32,
      imageUrl: IMAGE_URL + 'ac4/Activity_4_Image_32.JPG',
      answer: true
    },
    {
      questionNumber: 33,
      imageUrl: IMAGE_URL + 'ac4/Activity_4_Image_33.JPG',
      answer: false
    },
    {
      questionNumber: 34,
      imageUrl: IMAGE_URL + 'ac4/Activity_4_Image_34.JPG',
      answer: true
    },
    {
      questionNumber: 35,
      imageUrl: IMAGE_URL + 'ac4/Activity_4_Image_35.JPG',
      answer: true
    },
    {
      questionNumber: 36,
      imageUrl: IMAGE_URL + 'ac4/Activity_4_Image_36.JPG',
      answer: true
    },
    {
      questionNumber: 37,
      imageUrl: IMAGE_URL + 'ac4/Activity_4_Image_37.JPG',
      answer: true
    },
    {
      questionNumber: 38,
      imageUrl: IMAGE_URL + 'ac4/Activity_4_Image_38.JPG',
      answer: true
    },
    {
      questionNumber: 39,
      imageUrl: IMAGE_URL + 'ac4/Activity_4_Image_39.JPG',
      answer: true
    },
    {
      questionNumber: 40,
      imageUrl: IMAGE_URL + 'ac4/Activity_4_Image_40.JPG',
      answer: false
    },
    {
      questionNumber: 41,
      imageUrl: IMAGE_URL + 'ac4/Activity_4_Image_41.JPG',
      answer: false
    },
    {
      questionNumber: 42,
      imageUrl: IMAGE_URL + 'ac4/Activity_4_Image_42.JPG',
      answer: false
    },
    {
      questionNumber: 43,
      imageUrl: IMAGE_URL + 'ac4/Activity_4_Image_43.JPG',
      answer: false
    },
    {
      questionNumber: 44,
      imageUrl: IMAGE_URL + 'ac4/Activity_4_Image_44.JPG',
      answer: false
    },
    {
      questionNumber: 45,
      imageUrl: IMAGE_URL + 'ac4/Activity_4_Image_45.JPG',
      answer: false
    },
    {
      questionNumber: 46,
      imageUrl: IMAGE_URL + 'ac4/Activity_4_Image_46.JPG',
      answer: false
    },
    {
      questionNumber: 47,
      imageUrl: IMAGE_URL + 'ac4/Activity_4_Image_47.JPG',
      answer: true
    },
    {
      questionNumber: 48,
      imageUrl: IMAGE_URL + 'ac4/Activity_4_Image_48.JPG',
      answer: true
    },
    {
      questionNumber: 49,
      imageUrl: IMAGE_URL + 'ac4/Activity_4_Image_49.JPG',
      answer: false
    },
    {
      questionNumber: 50,
      imageUrl: IMAGE_URL + 'ac4/Activity_4_Image_50.JPG',
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
      res.render('activity/activity-4', {
        student: student,
        questId: questId,
        question: question,
        answer: answer,
        correct: correct,
        questionList: questionListString,
        reqMethod: 'GET',
        path: '/activity-4',
        title: 'Activity 4',
        isAuthenticated: req.session.isLoggedIn
      });
    })
    .catch(err => console.log(err));
};

/**  ========================================================================================
 *
 * Activity 4  POST */
exports.postActivity04 = (req, res, next) => {
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
      imageUrl: IMAGE_URL + 'ac4/Activity_4_Image_1.JPG',
      answer: true,
      message: 'Touching private body parts in public is illegal.'
    },
    {
      questionNumber: 2,
      imageUrl: IMAGE_URL + 'ac4/Activity_4_Image_2.JPG',
      answer: true,
      message: 'Touching private body parts in public is illegal.'
    },
    {
      questionNumber: 3,
      imageUrl: IMAGE_URL + 'ac4/Activity_4_Image_3.JPG',
      answer: false,
      message: 'Most people think side hugs are okay in public.'
    },
    {
      questionNumber: 4,
      imageUrl: IMAGE_URL + 'ac4/Activity_4_Image_4.JPG',
      answer: false,
      message: 'Most people think holding hands is appropriate in public.'
    },
    {
      questionNumber: 5,
      imageUrl: IMAGE_URL + 'ac4/Activity_4_Image_5.JPG',
      answer: false,
      message:
        'Most people think kissing on the cheek is appropriate in public.'
    },
    {
      questionNumber: 6,
      imageUrl: IMAGE_URL + 'ac4/Activity_4_Image_6.JPG',
      answer: false,
      message: 'Most people think holding hands is appropriate in public.'
    },
    {
      questionNumber: 7,
      imageUrl: IMAGE_URL + 'ac4/Activity_4_Image_7.JPG',
      answer: false,
      message: 'Most people think that a kiss on the cheek is okay in public.'
    },
    {
      questionNumber: 8,
      imageUrl: IMAGE_URL + 'ac4/Activity_4_Image_8.JPG',
      answer: false,
      message: 'Most people think that holding hands is okay in public.'
    },
    {
      questionNumber: 9,
      imageUrl: IMAGE_URL + 'ac4/Activity_4_Image_9.JPG',
      answer: true,
      message: 'Touching private body parts  in public is illegal.'
    },
    {
      questionNumber: 10,
      imageUrl: IMAGE_URL + 'ac4/Activity_4_Image_10.JPG',
      answer: true,
      message: 'Touching private body parts  in public is illegal.'
    },
    {
      questionNumber: 11,
      imageUrl: IMAGE_URL + 'ac4/Activity_4_Image_11.JPG',
      answer: true,
      message: 'Touching private body parts  in public is illegal.'
    },
    {
      questionNumber: 12,
      imageUrl: IMAGE_URL + 'ac4/Activity_4_Image_12.JPG',
      answer: true,
      message: 'Touching private body parts  in public is illegal.'
    },
    {
      questionNumber: 13,
      imageUrl: IMAGE_URL + 'ac4/Activity_4_Image_13.JPG',
      answer: false,
      message: 'Most people that holding hands is okay in public.'
    },
    {
      questionNumber: 14,
      imageUrl: IMAGE_URL + 'ac4/Activity_4_Image_14.JPG',
      answer: true,
      message:
        'Most people think that making out is too much touching in public.'
    },
    {
      questionNumber: 15,
      imageUrl: IMAGE_URL + 'ac4/Activity_4_Image_15.JPG',
      answer: false,
      message: 'Most people think hugging is appropriate in public.'
    },
    {
      questionNumber: 16,
      imageUrl: IMAGE_URL + 'ac4/Activity_4_Image_16.JPG',
      answer: true,
      message: 'Touching private body parts in public is illegal.'
    },
    {
      questionNumber: 17,
      imageUrl: IMAGE_URL + 'ac4/Activity_4_Image_17.JPG',
      answer: true,
      message: 'Touching private body parts in public is illegal.'
    },
    {
      questionNumber: 18,
      imageUrl: IMAGE_URL + 'ac4/Activity_4_Image_18.JPG',
      answer: false,
      message: 'Most people think a kiss on the cheek is appropriate in public.'
    },
    {
      questionNumber: 19,
      imageUrl: IMAGE_URL + 'ac4/Activity_4_Image_19.JPG',
      answer: false,
      message:
        'Most people think putting your arm around someone is appropriate in public.'
    },
    {
      questionNumber: 20,
      imageUrl: IMAGE_URL + 'ac4/Activity_4_Image_20.JPG',
      answer: false,
      message: 'Most people think this touching is okay in public.'
    },
    {
      questionNumber: 21,
      imageUrl: IMAGE_URL + 'ac4/Activity_4_Image_21.JPG',
      answer: true,
      message: 'Touching private body parts in public is illegal.'
    },
    {
      questionNumber: 22,
      imageUrl: IMAGE_URL + 'ac4/Activity_4_Image_22.JPG',
      answer: false,
      message: 'Most people think that holding hands is okay in public.'
    },
    {
      questionNumber: 23,
      imageUrl: IMAGE_URL + 'ac4/Activity_4_Image_23.JPG',
      answer: false,
      message: 'Most people think that holding hands is okay in public.'
    },
    {
      questionNumber: 24,
      imageUrl: IMAGE_URL + 'ac4/Activity_4_Image_24.JPG',
      answer: true,
      message:
        'Most people think laying on top of each other is too much touching in public.'
    },
    {
      questionNumber: 25,
      imageUrl: IMAGE_URL + 'ac4/Activity_4_Image_25.JPG',
      answer: false,
      message: 'Most people think that shaking hands is okay in public.'
    },
    {
      questionNumber: 26,
      imageUrl: IMAGE_URL + 'ac4/Activity_4_Image_26.JPG',
      answer: false,
      message: 'Most people think touching a shoulder is appropriate in public.'
    },
    {
      questionNumber: 27,
      imageUrl: IMAGE_URL + 'ac4/Activity_4_Image_27.JPG',
      answer: false,
      message: 'Most people think a kiss on the cheek is appropriate in public.'
    },
    {
      questionNumber: 28,
      imageUrl: IMAGE_URL + 'ac4/Activity_4_Image_28.JPG',
      answer: false,
      message: 'Most people think hugging is appropriate in public.'
    },
    {
      questionNumber: 29,
      imageUrl: IMAGE_URL + 'ac4/Activity_4_Image_29.JPG',
      answer: false,
      message: 'Most people think a kiss on the cheek is okay in public.'
    },
    {
      questionNumber: 30,
      imageUrl: IMAGE_URL + 'ac4/Activity_4_Image_30.JPG',
      answer: false,
      message: 'Most people think that hugging is okay in public.'
    },
    {
      questionNumber: 31,
      imageUrl: IMAGE_URL + 'ac4/Activity_4_Image_31.JPG',
      answer: false,
      message: 'Most people think that a side hug is okay in public.'
    },
    {
      questionNumber: 32,
      imageUrl: IMAGE_URL + 'ac4/Activity_4_Image_32.JPG',
      answer: false,
      message: 'Most people think that a side hug is okay in public.'
    },
    {
      questionNumber: 33,
      imageUrl: IMAGE_URL + 'ac4/Activity_4_Image_33.JPG',
      answer: false,
      message: 'Most people think this touching is okay in public.'
    },
    {
      questionNumber: 34,
      imageUrl: IMAGE_URL + 'ac4/Activity_4_Image_34.JPG',
      answer: true,
      message:
        'Most people think that lying on someone is too much touching in public.'
    },
    {
      questionNumber: 35,
      imageUrl: IMAGE_URL + 'ac4/Activity_4_Image_35.JPG',
      answer: true,
      message:
        'Most friends feel uncomfortable when people make out in front of them.'
    },
    {
      questionNumber: 36,
      imageUrl: IMAGE_URL + 'ac4/Activity_4_Image_36.JPG',
      answer: true,
      message: 'Touching private body parts in public is illegal.'
    },
    {
      questionNumber: 37,
      imageUrl: IMAGE_URL + 'ac4/Activity_4_Image_37.JPG',
      answer: true,
      message:
        'Most friends feel uncomfortable when people make out in front of them.'
    },
    {
      questionNumber: 38,
      imageUrl: IMAGE_URL + 'ac4/Activity_4_Image_38.JPG',
      answer: true,
      message: 'Touching private body parts in public is illegal.'
    },
    {
      questionNumber: 39,
      imageUrl: IMAGE_URL + 'ac4/Activity_4_Image_39.JPG',
      answer: true,
      message: 'Touching private body parts in public is illegal.'
    },
    {
      questionNumber: 40,
      imageUrl: IMAGE_URL + 'ac4/Activity_4_Image_40.JPG',
      answer: false,
      message: 'Most people think this touching is okay in public.'
    },
    {
      questionNumber: 41,
      imageUrl: IMAGE_URL + 'ac4/Activity_4_Image_41.JPG',
      answer: false,
      message: 'Most people think that holding hands is okay in public.'
    },
    {
      questionNumber: 42,
      imageUrl: IMAGE_URL + 'ac4/Activity_4_Image_42.JPG',
      answer: false,
      message: 'Most people think that holding hands is okay in public.'
    },
    {
      questionNumber: 43,
      imageUrl: IMAGE_URL + 'ac4/Activity_4_Image_43.JPG',
      answer: false,
      message: 'Most people think that a hug is okay in public'
    },
    {
      questionNumber: 44,
      imageUrl: IMAGE_URL + 'ac4/Activity_4_Image_44.JPG',
      answer: false,
      message:
        'Most people think having an arm around someone is okay in public.'
    },
    {
      questionNumber: 45,
      imageUrl: IMAGE_URL + 'ac4/Activity_4_Image_45.JPG',
      answer: false,
      message: 'Most people think that holding hands is okay in public.'
    },
    {
      questionNumber: 46,
      imageUrl: IMAGE_URL + 'ac4/Activity_4_Image_46.JPG',
      answer: false,
      message:
        'Most people think that having an arm around someone is okay in public.'
    },
    {
      questionNumber: 47,
      imageUrl: IMAGE_URL + 'ac4/Activity_4_Image_47.JPG',
      answer: true,
      message:
        'Most people think that making out is too much touching on the bus.'
    },
    {
      questionNumber: 48,
      imageUrl: IMAGE_URL + 'ac4/Activity_4_Image_48.JPG',
      answer: true,
      message: 'Touching private body parts in public is illegal.'
    },
    {
      questionNumber: 49,
      imageUrl: IMAGE_URL + 'ac4/Activity_4_Image_49.JPG',
      answer: false,
      message: 'Most people think this touching is okay in public.'
    },
    {
      questionNumber: 50,
      imageUrl: IMAGE_URL + 'ac4/Activity_4_Image_50.JPG',
      answer: false,
      message: 'Most people think that a kiss on the cheek is okay in public.'
    }
  ];

  let questSelection = questionList[questId - 1];
  const question = questions[questSelection - 1];

  Student.findById(studId)
    .then(student => {
      res.render('activity/activity-4', {
        student: student,
        questId: questId,
        question: question,
        answer: answer,
        correct: correctString,
        questionList: questionListString,
        reqMethod: 'POST',
        path: '/activity-4',
        title: 'Activity 4',
        isAuthenticated: req.session.isLoggedIn
      });
    })
    .catch(err => console.log(err));
};

/**  ========================================================================================
 *
 * Activity 4 SAVE   */
exports.getActivity04Save = (req, res, next) => {
  const studId = req.params.studentId;
  let questId = Number(req.params.questionId);
  let correct = Number(req.params.correct);
  let thisScore = correct / (questId - 1);
  thisScore = thisScore.toFixed(2);
  let congratsUrl = '/activity-congrats/4/' + studId;

  Student.findById(studId).then(student => {
    let scoresArray = student.scores[3].ac_scores;
    let datesArray = student.scores[3].ac_dates;
    let thisDate = new Date();
    scoresArray.push(thisScore);
    datesArray.push(thisDate);
    student.scores[3].ac_scores = scoresArray;
    student.scores[3].ac_dates = datesArray;

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
 * Student  POST  activity 4*/
exports.postActivity04Leave = (req, res, next) => {
  const studId = req.params.studentId;
  let questId = Number(req.params.questionId);
  let correct = Number(req.params.correct);
  let thisScore = correct / (questId - 1);
  thisScore = thisScore.toFixed(2);

  const redirectUrl = '/student/' + studId;

  Student.findById(studId).then(student => {
    let scoresArray = student.scores[3].ac_scores;
    let datesArray = student.scores[3].ac_dates;
    let thisDate = new Date();
    scoresArray.push(thisScore);
    datesArray.push(thisDate);
    student.scores[3].ac_scores = scoresArray;
    student.scores[3].ac_dates = datesArray;

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
exports.getSummary4 = (req, res, next) => {
  const studId = req.params.studentId;
  let studentUrl = '/student/' + req.params.studentId;

  let sid8 = studId.slice(-8);

  Student.findById(studId)
    .then(student => {
      let currentScores1 = student.scores[3].ac_scores;
      let currentDates1 = student.scores[3].ac_dates;

      res.render('activity/activity-summary4', {
        student: student,
        scores: currentScores1,
        dates: currentDates1,
        sid8: sid8,
        path: '/activity-summary4',
        title: 'Summary',
        isAuthenticated: req.session.isLoggedIn
      });
    })
    .catch(err => console.log(err));
};
