const Student = require('../models/Student');

const createQuest7List = function() {
  let questionList = [];

  if (questId == 1) {
    while (questionList.length < 6) {
      let newQ = Math.floor(Math.random() * 6) + 1;
      if (!questionList.includes(newQ)) {
        questionList.push(newQ);
      }
    }
    console.log(questionList);
  } else {
    questionList = req.params.questionList.split(',').map(Number);
    console.log(questionList);
  }

  return questionList;
};

/**
 *
 * Activity 7 GET */
exports.getActivity07 = (req, res, next) => {
  const studId = req.params.studentId;
  let questId = req.params.questionId;
  let correct = req.params.correct;
  let studentUrl = '/student/' + studId;
  let congratsUrl =
    '/activity-7-save/' + studId + '/' + questId + '/' + correct;

  const questions = [
    {
      questionNumber: 1,
      title: "Pick the people who are inside each other's personal space.",
      choices: [
        {
          letter: 'a',
          imgUrl: '/images/ac7/Activity_7_Question 1_Image_1.JPG'
        },
        {
          letter: 'b',
          imgUrl: '/images/ac7/Activity_7_Question 1_Image_2.JPG'
        },
        {
          letter: 'c',
          imgUrl: '/images/ac7/Activity_7_Question 1_Image_3.JPG'
        },
        {
          letter: 'd',
          imgUrl: '/images/ac7/Activity_7_Question 1_Image_7.JPG'
        }
      ],
      answer: 'd'
    },
    {
      questionNumber: 2,
      title: "Pick the people who are inside each other's personal space.",
      choices: [
        {
          letter: 'a',
          imgUrl: '/images/ac7/Activity_7_Question 1_Image_4.JPG'
        },
        {
          letter: 'b',
          imgUrl: '/images/ac7/Activity_7_Question 1_Image_5.JPG'
        },
        {
          letter: 'c',
          imgUrl: '/images/ac7/Activity_7_Question 1_Image_6.JPG'
        },
        {
          letter: 'd',
          imgUrl: '/images/ac7/Activity_7_Question 1_Image_8.JPG'
        }
      ],
      answer: 'd'
    },
    {
      questionNumber: 3,
      title: 'Pick the private place',
      choices: [
        {
          letter: 'a',
          imgUrl: '/images/ac7/Activity_7_Question 2_Image_1.JPG'
        },
        {
          letter: 'b',
          imgUrl: '/images/ac7/Activity_7_Question 2_Image_2.JPG'
        },
        {
          letter: 'c',
          imgUrl: '/images/ac7/Activity_7_Question 2_Image_3.JPG'
        },
        {
          letter: 'd',
          imgUrl: '/images/ac7/Activity_7_Question 2_Image_4.JPG'
        }
      ],
      answer: 'a'
    },
    {
      questionNumber: 4,
      title: 'Pick the private place',
      choices: [
        {
          letter: 'a',
          imgUrl: '/images/ac7/Activity_7_Question 2_Image_5.JPG'
        },
        {
          letter: 'b',
          imgUrl: '/images/ac7/Activity_7_Question 2_Image_6.JPG'
        },
        {
          letter: 'c',
          imgUrl: '/images/ac7/Activity_7_Question 2_Image_8.JPG'
        },
        {
          letter: 'd',
          imgUrl: '/images/ac7/Activity_7_Question 2_Image_7.JPG'
        }
      ],
      answer: 'c'
    },
    {
      questionNumber: 5,
      title: 'Pick the unwanted touching.',
      choices: [
        {
          letter: 'a',
          imgUrl: '/images/ac7/Activity_7_Question 3_Image_3.JPG'
        },
        {
          letter: 'b',
          imgUrl: '/images/ac7/Activity_7_Question 3_Image_2.JPG'
        },
        {
          letter: 'c',
          imgUrl: '/images/ac7/Activity_7_Question 3_Image_4.JPG'
        },
        {
          letter: 'd',
          imgUrl: '/images/ac7/Activity_7_Question 3_Image_5.JPG'
        }
      ],
      answer: 'b'
    },
    {
      questionNumber: 6,
      title: 'Pick the unwanted touching.',
      choices: [
        {
          letter: 'a',
          imgUrl: '/images/ac7/Activity_7_Question 3_Image_6.JPG'
        },
        {
          letter: 'b',
          imgUrl: '/images/ac7/Activity_7_Question 3_Image_8.JPG'
        },
        {
          letter: 'c',
          imgUrl: '/images/ac7/Activity_7_Question 3_Image_1.JPG'
        },
        {
          letter: 'd',
          imgUrl: '/images/ac7/Activity_7_Question 3_Image_7.JPG'
        }
      ],
      answer: 'c'
    },
    {
      questionNumber: 7,
      title: 'Pick the sexual touching that is okay with the law.',
      choices: [
        {
          letter: 'a',
          imgUrl: '/images/ac7/Activity_7_Question 4_Image_8.JPG'
        },
        {
          letter: 'b',
          imgUrl: '/images/ac7/Activity_7_Question 4_Image_1.JPG'
        },
        {
          letter: 'c',
          imgUrl: '/images/ac7/Activity_7_Question 4_Image_3.JPG'
        },
        {
          letter: 'd',
          imgUrl: '/images/ac7/Activity_7_Question 4_Image_7.JPG'
        }
      ],
      answer: 'b'
    },
    {
      questionNumber: 8,
      title: 'Pick the sexual touching that is okay with the law.',
      choices: [
        {
          letter: 'a',
          imgUrl: '/images/ac7/Activity_7_Question 4_Image_4.JPG'
        },
        {
          letter: 'b',
          imgUrl: '/images/ac7/Activity_7_Question 4_Image_5.JPG'
        },
        {
          letter: 'c',
          imgUrl: '/images/ac7/Activity_7_Question 4_Image_6.JPG'
        },
        {
          letter: 'd',
          imgUrl: '/images/ac7/Activity_7_Question 4_Image_2.JPG'
        }
      ],
      answer: 'd'
    },
    {
      questionNumber: 9,
      title: 'Pick the sexual abuse.',
      choices: [
        {
          letter: 'a',
          imgUrl: '/images/ac7/Activity_7_Question 5_Image_1.JPG'
        },
        {
          letter: 'b',
          imgUrl: '/images/ac7/Activity_7_Question 5_Image_8.JPG'
        },
        {
          letter: 'c',
          imgUrl: '/images/ac7/Activity_7_Question 5_Image_7.JPG'
        },
        {
          letter: 'd',
          imgUrl: '/images/ac7/Activity_7_Question 5_Image_6.JPG'
        }
      ],
      answer: 'a'
    },
    {
      questionNumber: 10,
      title: 'Pick the sexual abuse.',
      choices: [
        {
          letter: 'a',
          imgUrl: '/images/ac7/Activity_7_Question 5_Image_2.JPG'
        },
        {
          letter: 'b',
          imgUrl: '/images/ac7/Activity_7_Question 5_Image_4.JPG'
        },
        {
          letter: 'c',
          imgUrl: '/images/ac7/Activity_7_Question 5_Image_3.JPG'
        },
        {
          letter: 'd',
          imgUrl: '/images/ac7/Activity_7_Question 5_Image_5.JPG'
        }
      ],
      answer: 'c'
    },
    {
      questionNumber: 11,
      title: 'Pick too much touching in public.',
      choices: [
        {
          letter: 'a',
          imgUrl: '/images/ac7/Activity_7_Question 6_Image_1.JPG'
        },
        {
          letter: 'b',
          imgUrl: '/images/ac7/Activity_7_Question 6_Image_4.JPG'
        },
        {
          letter: 'c',
          imgUrl: '/images/ac7/Activity_7_Question 6_Image_3.JPG'
        },
        {
          letter: 'd',
          imgUrl: '/images/ac7/Activity_7_Question 6_Image_8.JPG'
        }
      ],
      answer: 'a'
    },
    {
      questionNumber: 12,
      title: 'Pick too much touching in public.',
      choices: [
        {
          letter: 'a',
          imgUrl: '/images/ac7/Activity_7_Question 6_Image_2.JPG'
        },
        {
          letter: 'b',
          imgUrl: '/images/ac7/Activity_7_Question 6_Image_5.JPG'
        },
        {
          letter: 'c',
          imgUrl: '/images/ac7/Activity_7_Question 6_Image_6.JPG'
        },
        {
          letter: 'd',
          imgUrl: '/images/ac7/Activity_7_Question 6_Image_7.JPG'
        }
      ],
      answer: 'a'
    }
  ];

  // ---------------------------

  // After all questions, round is done, save and go to Congrats page
  if (questId > questions.length) {
    return res.redirect(congratsUrl);
  }

  let question = questions[questId - 1];
  let answer = '';

  // -------------------

  Student.findById(studId)
    .then(student => {
      res.render('activity/activity-7', {
        student: student,
        questId: questId,
        question: question,
        checked: '',
        answer: answer,
        correct: correct,
        reqMethod: 'GET',
        path: '/activity-7',
        title: 'Activity 7',
        isAuthenticated: req.session.isLoggedIn
      });
    })
    .catch(err => console.log(err));
};

/**  ========================================================================================
 *
 * Activity 7  POST */
exports.postActivity07 = (req, res, next) => {
  const studId = req.params.studentId;
  let questId = req.params.questionId;
  let correct = Number(req.params.correct);

  const questions = [
    {
      questionNumber: 1,
      title: "Pick the people who are inside each other's personal space.",
      choices: [
        {
          letter: 'a',
          imgUrl: '/images/ac7/Activity_7_Question 1_Image_1.JPG'
        },
        {
          letter: 'b',
          imgUrl: '/images/ac7/Activity_7_Question 1_Image_2.JPG'
        },
        {
          letter: 'c',
          imgUrl: '/images/ac7/Activity_7_Question 1_Image_3.JPG'
        },
        {
          letter: 'd',
          imgUrl: '/images/ac7/Activity_7_Question 1_Image_7.JPG'
        }
      ],
      answer: 'd'
    },
    {
      questionNumber: 2,
      title: "Pick the people who are inside each other's personal space.",
      choices: [
        {
          letter: 'a',
          imgUrl: '/images/ac7/Activity_7_Question 1_Image_4.JPG'
        },
        {
          letter: 'b',
          imgUrl: '/images/ac7/Activity_7_Question 1_Image_5.JPG'
        },
        {
          letter: 'c',
          imgUrl: '/images/ac7/Activity_7_Question 1_Image_6.JPG'
        },
        {
          letter: 'd',
          imgUrl: '/images/ac7/Activity_7_Question 1_Image_8.JPG'
        }
      ],
      answer: 'd'
    },
    {
      questionNumber: 3,
      title: 'Pick the private place',
      choices: [
        {
          letter: 'a',
          imgUrl: '/images/ac7/Activity_7_Question 2_Image_1.JPG'
        },
        {
          letter: 'b',
          imgUrl: '/images/ac7/Activity_7_Question 2_Image_2.JPG'
        },
        {
          letter: 'c',
          imgUrl: '/images/ac7/Activity_7_Question 2_Image_3.JPG'
        },
        {
          letter: 'd',
          imgUrl: '/images/ac7/Activity_7_Question 2_Image_4.JPG'
        }
      ],
      answer: 'a'
    },
    {
      questionNumber: 4,
      title: 'Pick the private place',
      choices: [
        {
          letter: 'a',
          imgUrl: '/images/ac7/Activity_7_Question 2_Image_5.JPG'
        },
        {
          letter: 'b',
          imgUrl: '/images/ac7/Activity_7_Question 2_Image_6.JPG'
        },
        {
          letter: 'c',
          imgUrl: '/images/ac7/Activity_7_Question 2_Image_8.JPG'
        },
        {
          letter: 'd',
          imgUrl: '/images/ac7/Activity_7_Question 2_Image_7.JPG'
        }
      ],
      answer: 'c'
    },
    {
      questionNumber: 5,
      title: 'Pick the unwanted touching.',
      choices: [
        {
          letter: 'a',
          imgUrl: '/images/ac7/Activity_7_Question 3_Image_3.JPG'
        },
        {
          letter: 'b',
          imgUrl: '/images/ac7/Activity_7_Question 3_Image_2.JPG'
        },
        {
          letter: 'c',
          imgUrl: '/images/ac7/Activity_7_Question 3_Image_4.JPG'
        },
        {
          letter: 'd',
          imgUrl: '/images/ac7/Activity_7_Question 3_Image_5.JPG'
        }
      ],
      answer: 'b'
    },
    {
      questionNumber: 6,
      title: 'Pick the unwanted touching.',
      choices: [
        {
          letter: 'a',
          imgUrl: '/images/ac7/Activity_7_Question 3_Image_6.JPG'
        },
        {
          letter: 'b',
          imgUrl: '/images/ac7/Activity_7_Question 3_Image_8.JPG'
        },
        {
          letter: 'c',
          imgUrl: '/images/ac7/Activity_7_Question 3_Image_1.JPG'
        },
        {
          letter: 'd',
          imgUrl: '/images/ac7/Activity_7_Question 3_Image_7.JPG'
        }
      ],
      answer: 'c'
    },
    {
      questionNumber: 7,
      title: 'Pick the sexual touching that is okay with the law.',
      choices: [
        {
          letter: 'a',
          imgUrl: '/images/ac7/Activity_7_Question 4_Image_8.JPG'
        },
        {
          letter: 'b',
          imgUrl: '/images/ac7/Activity_7_Question 4_Image_1.JPG'
        },
        {
          letter: 'c',
          imgUrl: '/images/ac7/Activity_7_Question 4_Image_3.JPG'
        },
        {
          letter: 'd',
          imgUrl: '/images/ac7/Activity_7_Question 4_Image_7.JPG'
        }
      ],
      answer: 'b'
    },
    {
      questionNumber: 8,
      title: 'Pick the sexual touching that is okay with the law.',
      choices: [
        {
          letter: 'a',
          imgUrl: '/images/ac7/Activity_7_Question 4_Image_4.JPG'
        },
        {
          letter: 'b',
          imgUrl: '/images/ac7/Activity_7_Question 4_Image_5.JPG'
        },
        {
          letter: 'c',
          imgUrl: '/images/ac7/Activity_7_Question 4_Image_6.JPG'
        },
        {
          letter: 'd',
          imgUrl: '/images/ac7/Activity_7_Question 4_Image_2.JPG'
        }
      ],
      answer: 'd'
    },
    {
      questionNumber: 9,
      title: 'Pick the sexual abuse.',
      choices: [
        {
          letter: 'a',
          imgUrl: '/images/ac7/Activity_7_Question 5_Image_1.JPG'
        },
        {
          letter: 'b',
          imgUrl: '/images/ac7/Activity_7_Question 5_Image_8.JPG'
        },
        {
          letter: 'c',
          imgUrl: '/images/ac7/Activity_7_Question 5_Image_7.JPG'
        },
        {
          letter: 'd',
          imgUrl: '/images/ac7/Activity_7_Question 5_Image_6.JPG'
        }
      ],
      answer: 'a'
    },
    {
      questionNumber: 10,
      title: 'Pick the sexual abuse.',
      choices: [
        {
          letter: 'a',
          imgUrl: '/images/ac7/Activity_7_Question 5_Image_2.JPG'
        },
        {
          letter: 'b',
          imgUrl: '/images/ac7/Activity_7_Question 5_Image_4.JPG'
        },
        {
          letter: 'c',
          imgUrl: '/images/ac7/Activity_7_Question 5_Image_3.JPG'
        },
        {
          letter: 'd',
          imgUrl: '/images/ac7/Activity_7_Question 5_Image_5.JPG'
        }
      ],
      answer: 'c'
    },
    {
      questionNumber: 11,
      title: 'Pick too much touching in public.',
      choices: [
        {
          letter: 'a',
          imgUrl: '/images/ac7/Activity_7_Question 6_Image_1.JPG'
        },
        {
          letter: 'b',
          imgUrl: '/images/ac7/Activity_7_Question 6_Image_4.JPG'
        },
        {
          letter: 'c',
          imgUrl: '/images/ac7/Activity_7_Question 6_Image_3.JPG'
        },
        {
          letter: 'd',
          imgUrl: '/images/ac7/Activity_7_Question 6_Image_8.JPG'
        }
      ],
      answer: 'a'
    },
    {
      questionNumber: 12,
      title: 'Pick too much touching in public.',
      choices: [
        {
          letter: 'a',
          imgUrl: '/images/ac7/Activity_7_Question 6_Image_2.JPG'
        },
        {
          letter: 'b',
          imgUrl: '/images/ac7/Activity_7_Question 6_Image_5.JPG'
        },
        {
          letter: 'c',
          imgUrl: '/images/ac7/Activity_7_Question 6_Image_6.JPG'
        },
        {
          letter: 'd',
          imgUrl: '/images/ac7/Activity_7_Question 6_Image_7.JPG'
        }
      ],
      answer: 'a'
    }
  ];

  // -----------------------------------------------

  let answer = null;
  let question = questions[questId - 1];

  var checked = req.body.name;
  if (req.body.name === question.answer) {
    answer = true;
    correct++;
  }

  let correctString = correct.toString();

  Student.findById(studId)
    .then(student => {
      res.render('activity/activity-7', {
        student: student,
        questId: questId,
        question: question,
        answer: answer,
        checked: checked,
        correct: correctString,
        reqMethod: 'POST',
        path: '/activity-7',
        title: 'Activity 7',
        isAuthenticated: req.session.isLoggedIn
      });
    })
    .catch(err => console.log(err));
};

/**  ========================================================================================
 *
 * Activity 7 SAVE   */
exports.getActivity07Save = (req, res, next) => {
  const studId = req.params.studentId;
  let questId = Number(req.params.questionId);
  let correct = Number(req.params.correct);
  let thisScore = correct / (questId - 1);
  thisScore = thisScore.toFixed(2);
  let congratsUrl = '/activity-congrats/7/' + studId;

  Student.findById(studId).then(student => {
    let scoresArray = student.scores[6].ac_scores;
    let datesArray = student.scores[6].ac_dates;
    let thisDate = new Date();
    scoresArray.push(thisScore);
    datesArray.push(thisDate);
    student.scores[6].ac_scores = scoresArray;
    student.scores[6].ac_dates = datesArray;

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
 * Student  POST  activity 7 */
exports.postActivity07Leave = (req, res, next) => {
  const studId = req.params.studentId;
  let questId = Number(req.params.questionId);
  let correct = Number(req.params.correct);
  let thisScore = correct / (questId - 1);
  thisScore = thisScore.toFixed(2);

  const redirectUrl = '/student/' + studId;

  Student.findById(studId).then(student => {
    let scoresArray = student.scores[6].ac_scores;
    let datesArray = student.scores[6].ac_dates;
    let thisDate = new Date();
    scoresArray.push(thisScore);
    datesArray.push(thisDate);
    student.scores[6].ac_scores = scoresArray;
    student.scores[6].ac_dates = datesArray;

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
exports.getSummary7 = (req, res, next) => {
  const studId = req.params.studentId;
  let studentUrl = '/student/' + req.params.studentId;

  let sid8 = studId.slice(-8);

  Student.findById(studId)
    .then(student => {
      let currentScores1 = student.scores[6].ac_scores;
      let currentDates1 = student.scores[6].ac_dates;

      res.render('activity/activity-summary7', {
        student: student,
        scores: currentScores1,
        dates: currentDates1,
        sid8: sid8,
        path: '/activity-summary7',
        title: 'Summary',
        isAuthenticated: req.session.isLoggedIn
      });
    })
    .catch(err => console.log(err));
};
