const Student = require('../models/Student');

/**
 *
 * Activity 8 GET */
exports.getActivity08 = (req, res, next) => {
  const studId = req.params.studentId;
  let questId = req.params.questionId;
  let correct = req.params.correct;
  let studentUrl = '/student/' + studId;
  let congratsUrl =
    '/activity-8-save/' + studId + '/' + questId + '/' + correct;

  const questions = [
    {
      questionNumber: 1,
      title: 'Should your boyfriend or girlfriend always make you feel happy?',
      type: 'radio',
      choices: [
        {
          letter: 'a',
          text: 'Yes, a good relationship means you are happy all the time.'
        },
        {
          letter: 'b',
          text:
            'No, people can feel good feelings AND bad feelings when they are in a relationship.'
        }
      ],
      answer: 'b',
      points: 1
    },
    {
      questionNumber: 2,
      title: 'Which of the following is the safest place for a first date?',
      type: 'radio',
      choices: [
        { letter: 'a', text: 'The movies' },
        { letter: 'b', text: 'A hotel room' },
        { letter: 'c', text: "Someone's apartment" }
      ],
      answer: 'a',
      points: 1
    },
    {
      questionNumber: 3,
      title: 'Pick the 5 public places.',
      type: 'check',
      choices: [
        { letter: 'a', text: 'A movie theater' },
        { letter: 'b', text: 'The mall' },
        { letter: 'c', text: 'A hotel room' },
        { letter: 'd', text: 'Your bedroom' },
        { letter: 'e', text: 'A restaurant' },
        { letter: 'f', text: 'A bathroom' },
        { letter: 'g', text: 'A coffee shop' },
        { letter: 'h', text: 'A park' }
      ],
      answer: 'a b e g h',
      points: 5
    },
    {
      questionNumber: 4,
      title:
        'What 3 rules have to be followed for an adult to be in a relationship?',
      type: 'check',
      choices: [
        { letter: 'a', text: 'Both people have to be adults' },
        { letter: 'b', text: 'Meet face-to-face' },
        { letter: 'c', text: 'Agree to be in a relationship' },
        { letter: 'd', text: 'Always be available' },
        { letter: 'e', text: 'They have to be in love' },
        { letter: 'f', text: 'They have to have a job' }
      ],
      answer: 'b',
      points: 3
    },
    {
      questionNumber: 5,
      title: 'Pick 3 signs of an abusive relationship',
      type: 'check',
      choices: [
        { letter: 'a', text: 'They bring you flowers' },
        { letter: 'b', text: 'They hit you' },
        { letter: 'c', text: 'They don’t want you to have friends' },
        { letter: 'd', text: 'They meet your family' },
        { letter: 'e', text: 'They call you bad names' },
        { letter: 'f', text: 'They go on dates in public' }
      ],
      answer: 'b c e',
      points: 3
    },
    {
      questionNumber: 6,
      title: 'Everyone likes to see couples kissing in public.',
      type: 'radio',
      choices: [
        {
          letter: 'a',
          text: 'Yes'
        },
        {
          letter: 'b',
          text: 'No'
        }
      ],
      answer: 'b',
      points: 1
    },
    {
      questionNumber: 7,
      title: 'What is sexual touching?',
      type: 'radio',
      choices: [
        { letter: 'a', text: 'Touching someone’s knee' },
        { letter: 'b', text: 'Thinking about someone' },
        { letter: 'c', text: 'Holding hands' },
        { letter: 'd', text: 'Touching private body parts' }
      ],
      answer: 'd',
      points: 1
    },
    {
      questionNumber: 8,
      title: 'Pick the 4  private body parts.',
      type: 'check',
      choices: [
        { letter: 'a', text: 'Eyes' },
        { letter: 'b', text: 'Feet' },
        { letter: 'c', text: 'Penis' },
        { letter: 'd', text: 'Vagina' },
        { letter: 'e', text: 'Arms' },
        { letter: 'f', text: 'Butt' },
        { letter: 'g', text: 'Back' },
        { letter: 'h', text: 'Breasts' }
      ],
      answer: 'c d f h',
      points: 4
    },
    {
      questionNumber: 9,
      title:
        'What 3 rules have to be followed for sexual touching to be legal?',
      type: 'check',
      choices: [
        { letter: 'a', text: 'They have to use a condom' },
        { letter: 'b', text: 'Both people have to love each other' },
        { letter: 'c', text: 'They have to be married' },
        { letter: 'd', text: 'Both people have to be adults' },
        { letter: 'e', text: 'Both people have to agree' },
        { letter: 'f', text: 'They need to be in a private place' }
      ],
      answer: 'd e f',
      points: 3
    },
    {
      questionNumber: 10,
      title: 'What is sexual abuse?',
      type: 'radio',
      choices: [
        { letter: 'a', text: 'Hitting someone' },
        { letter: 'b', text: 'Calling someone names' },
        { letter: 'c', text: 'Taking someone’s money' },
        {
          letter: 'd',
          text:
            'Touching, showing, looking at, or talking about private body parts when it is not okay with both people'
        }
      ],
      answer: 'd',
      points: 1
    },
    {
      questionNumber: 11,
      title:
        'A person can still give consent for sex if they are drunk and passed out.',
      type: 'radio',
      choices: [{ letter: 'a', text: 'Yes' }, { letter: 'b', text: 'No' }],
      answer: 'b',
      points: 1
    },
    {
      questionNumber: 12,
      title:
        'If a person says yes to sex, they can still change their mind whenever they want.',
      type: 'radio',
      choices: [{ letter: 'a', text: 'Yes' }, { letter: 'b', text: 'No' }],
      answer: 'a',
      points: 1
    },
    {
      questionNumber: 13,
      title: 'It’s okay to have sex in public if nobody sees you.',
      type: 'radio',
      choices: [
        { letter: 'a', text: 'Yes, if nobody sees you.' },
        { letter: 'b', text: 'No, it’s against the law' }
      ],
      answer: 'b',
      points: 1
    },
    {
      questionNumber: 14,
      title: 'It is against the law to force someone into sexual touching',
      type: 'radio',
      choices: [{ letter: 'a', text: 'Yes' }, { letter: 'b', text: 'No' }],
      answer: 'a',
      points: 1
    },
    {
      questionNumber: 15,
      title: 'Birth control always works',
      type: 'radio',
      choices: [{ letter: 'a', text: 'Yes' }, { letter: 'b', text: 'No' }],
      answer: 'b',
      points: 1
    },
    {
      questionNumber: 16,
      title: 'Pick the 4 forms of birth control.',
      type: 'check',
      choices: [
        { letter: 'a', text: 'The pill' },
        { letter: 'b', text: 'Condoms' },
        { letter: 'c', text: 'A handstand after sex' },
        { letter: 'd', text: 'An IUD' },
        { letter: 'e', text: 'Going pee right after sex' },
        { letter: 'f', text: 'Having sex in the shower' },
        { letter: 'g', text: 'The shot' }
      ],
      answer: 'a b d g',
      points: 4
    },
    {
      questionNumber: 17,
      title: 'What type of sex can lead to pregnancy?',
      type: 'radio',
      choices: [
        { letter: 'a', text: 'Oral sex' },
        { letter: 'b', text: 'Anal sex' },
        { letter: 'c', text: 'Vaginal sex' }
      ],
      answer: 'c',
      points: 1
    },
    {
      questionNumber: 18,
      title:
        'What type of sex can lead to passing sexually transmitted infections?',
      type: 'radio',
      choices: [
        { letter: 'a', text: 'Oral sex' },
        { letter: 'b', text: 'Anal sex' },
        { letter: 'c', text: 'Vaginal sex' },
        { letter: 'd', text: 'All of the above' }
      ],
      answer: 'd',
      points: 1
    },
    {
      questionNumber: 19,
      title: 'Pick 3 symptoms of a sexually transmitted infection.',
      type: 'check',
      choices: [
        { letter: 'a', text: 'It hurts to go to the bathroom' },
        { letter: 'b', text: 'Ringing in your ears' },
        { letter: 'c', text: 'Sores on private body parts' },
        { letter: 'd', text: 'Hard to breathe ' },
        { letter: 'e', text: 'Smelly discharge ' },
        { letter: 'f', text: 'Missing teeth' }
      ],
      answer: 'a c e',
      points: 3
    },
    {
      questionNumber: 20,
      title: 'Do you know how to use a condom correctly?',
      type: 'radio',
      choices: [{ letter: 'a', text: 'Yes' }, { letter: 'b', text: 'No' }],
      answer: 'a b',
      points: 0
    }
  ];

  // ---------------------------

  // After all questions, round is done, save and go to Congrats page
  if (questId > questions.length) {
    return res.redirect(congratsUrl);
  }

  let question = questions[questId - 1];

  const answer = 'the answer';

  Student.findById(studId)
    .then(student => {
      res.render('activity/activity-8', {
        student: student,
        questId: questId,
        question: question,
        answer: answer,
        correct: correct,
        reqMethod: 'GET',
        path: '/activity-8',
        title: 'Activity 8',
        isAuthenticated: req.session.isLoggedIn
      });
    })
    .catch(err => console.log(err));
};

/**  ========================================================================================
 *
 * Activity 8  POST */
exports.postActivity08 = (req, res, next) => {
  const studId = req.params.studentId;
  let questId = req.params.questionId;
  let correct = Number(req.params.correct);

  const questions = [
    {
      questionNumber: 1,
      title: 'Should your boyfriend or girlfriend always make you feel happy?',
      type: 'radio',
      choices: [
        {
          letter: 'a',
          text: 'Yes, a good relationship means you are happy all the time.'
        },
        {
          letter: 'b',
          text:
            'No, people can feel good feelings AND bad feelings when they are in a relationship.'
        }
      ],
      answer: 'b',
      points: 1
    },
    {
      questionNumber: 2,
      title: 'Which of the following is the safest place for a first date?',
      type: 'radio',
      choices: [
        { letter: 'a', text: 'The movies' },
        { letter: 'b', text: 'A hotel room' },
        { letter: 'c', text: "Someone's apartment" }
      ],
      answer: 'a',
      points: 1
    },
    {
      questionNumber: 3,
      title: 'Pick the 5 public places.',
      type: 'check',
      choices: [
        { letter: 'a', text: 'A movie theater' },
        { letter: 'b', text: 'The mall' },
        { letter: 'c', text: 'A hotel room' },
        { letter: 'd', text: 'Your bedroom' },
        { letter: 'e', text: 'A restaurant' },
        { letter: 'f', text: 'A bathroom' },
        { letter: 'g', text: 'A coffee shop' },
        { letter: 'h', text: 'A park' }
      ],
      answer: ['a', 'b', 'e', 'g', 'h'],
      points: 5
    },
    {
      questionNumber: 4,
      title:
        'What 3 rules have to be followed for an adult to be in a relationship?',
      type: 'check',
      choices: [
        { letter: 'a', text: 'Both people have to be adults' },
        { letter: 'b', text: 'Meet face-to-face' },
        { letter: 'c', text: 'Agree to be in a relationship' },
        { letter: 'd', text: 'Always be available' },
        { letter: 'e', text: 'They have to be in love' },
        { letter: 'f', text: 'They have to have a job' }
      ],
      answer: ['a', 'b', 'c'],
      points: 3
    },
    {
      questionNumber: 5,
      title: 'Pick 3 signs of an abusive relationship',
      type: 'check',
      choices: [
        { letter: 'a', text: 'They bring you flowers' },
        { letter: 'b', text: 'They hit you' },
        { letter: 'c', text: 'They don’t want you to have friends' },
        { letter: 'd', text: 'They meet your family' },
        { letter: 'e', text: 'They call you bad names' },
        { letter: 'f', text: 'They go on dates in public' }
      ],
      answer: ['b', 'c', 'e'],
      points: 3
    },
    {
      questionNumber: 6,
      title: 'Everyone likes to see couples kissing in public.',
      type: 'radio',
      choices: [
        {
          letter: 'a',
          text: 'Yes'
        },
        {
          letter: 'b',
          text: 'No'
        }
      ],
      answer: 'b',
      points: 1
    },
    {
      questionNumber: 7,
      title: 'What is sexual touching?',
      type: 'radio',
      choices: [
        { letter: 'a', text: 'Touching someone’s knee' },
        { letter: 'b', text: 'Thinking about someone' },
        { letter: 'c', text: 'Holding hands' },
        { letter: 'd', text: 'Touching private body parts' }
      ],
      answer: 'd',
      points: 1
    },
    {
      questionNumber: 8,
      title: 'Pick the 4 private body parts.',
      type: 'check',
      choices: [
        { letter: 'a', text: 'Eyes' },
        { letter: 'b', text: 'Feet' },
        { letter: 'c', text: 'Penis' },
        { letter: 'd', text: 'Vagina' },
        { letter: 'e', text: 'Arms' },
        { letter: 'f', text: 'Butt' },
        { letter: 'g', text: 'Back' },
        { letter: 'h', text: 'Breasts' }
      ],
      answer: ['c', 'd', 'f', 'h'],
      points: 4
    },
    {
      questionNumber: 9,
      title:
        'What 3 rules have to be followed for sexual touching to be legal?',
      type: 'check',
      choices: [
        { letter: 'a', text: 'They have to use a condom' },
        { letter: 'b', text: 'Both people have to love each other' },
        { letter: 'c', text: 'They have to be married' },
        { letter: 'd', text: 'Both people have to be adults' },
        { letter: 'e', text: 'Both people have to agree' },
        { letter: 'f', text: 'They need to be in a private place' }
      ],
      answer: ['d', 'e', 'f'],
      points: 3
    },
    {
      questionNumber: 10,
      title: 'What is sexual abuse?',
      type: 'radio',
      choices: [
        { letter: 'a', text: 'Hitting someone' },
        { letter: 'b', text: 'Calling someone names' },
        { letter: 'c', text: 'Taking someone’s money' },
        {
          letter: 'd',
          text:
            'Touching, showing, looking at, or talking about private body parts when it is not okay with both people'
        }
      ],
      answer: 'd',
      points: 1,
      note: 'You can stop here if you participated in the introductory program.'
    },
    {
      questionNumber: 11,
      title:
        'A person can still give consent for sex if they are drunk and passed out.',
      type: 'radio',
      choices: [{ letter: 'a', text: 'Yes' }, { letter: 'b', text: 'No' }],
      answer: 'b',
      points: 1
    },
    {
      questionNumber: 12,
      title:
        'If a person says yes to sex, they can still change their mind whenever they want.',
      type: 'radio',
      choices: [{ letter: 'a', text: 'Yes' }, { letter: 'b', text: 'No' }],
      answer: 'a',
      points: 1
    },
    {
      questionNumber: 13,
      title: 'It’s okay to have sex in public if nobody sees you.',
      type: 'radio',
      choices: [
        { letter: 'a', text: 'Yes, if nobody sees you.' },
        { letter: 'b', text: 'No, it’s against the law' }
      ],
      answer: 'b',
      points: 1
    },
    {
      questionNumber: 14,
      title: 'It is against the law to force someone into sexual touching',
      type: 'radio',
      choices: [{ letter: 'a', text: 'Yes' }, { letter: 'b', text: 'No' }],
      answer: 'a',
      points: 1
    },
    {
      questionNumber: 15,
      title: 'Birth control always works',
      type: 'radio',
      choices: [{ letter: 'a', text: 'Yes' }, { letter: 'b', text: 'No' }],
      answer: 'b',
      points: 1
    },
    {
      questionNumber: 16,
      title: 'Pick the 4 forms of birth control.',
      type: 'check',
      choices: [
        { letter: 'a', text: 'The pill' },
        { letter: 'b', text: 'Condoms' },
        { letter: 'c', text: 'A handstand after sex' },
        { letter: 'd', text: 'An IUD' },
        { letter: 'e', text: 'Going pee right after sex' },
        { letter: 'f', text: 'Having sex in the shower' },
        { letter: 'g', text: 'The shot' }
      ],
      answer: ['a', 'b', 'd', 'g'],
      points: 4
    },
    {
      questionNumber: 17,
      title: 'What type of sex can lead to pregnancy?',
      type: 'radio',
      choices: [
        { letter: 'a', text: 'Oral sex' },
        { letter: 'b', text: 'Anal sex' },
        { letter: 'c', text: 'Vaginal sex' }
      ],
      answer: 'c',
      points: 1
    },
    {
      questionNumber: 18,
      title:
        'What type of sex can lead to passing sexually transmitted infections?',
      type: 'radio',
      choices: [
        { letter: 'a', text: 'Oral sex' },
        { letter: 'b', text: 'Anal sex' },
        { letter: 'c', text: 'Vaginal sex' },
        { letter: 'd', text: 'All of the above' }
      ],
      answer: 'd',
      points: 1
    },
    {
      questionNumber: 19,
      title: 'Pick 3 symptoms of a sexually transmitted infection.',
      type: 'check',
      choices: [
        { letter: 'a', text: 'It hurts to go to the bathroom' },
        { letter: 'b', text: 'Ringing in your ears' },
        { letter: 'c', text: 'Sores on private body parts' },
        { letter: 'd', text: 'Hard to breathe ' },
        { letter: 'e', text: 'Smelly discharge ' },
        { letter: 'f', text: 'Missing teeth' }
      ],
      answer: ['a', 'c', 'e'],
      points: 3
    },
    {
      questionNumber: 20,
      title: 'Do you know how to use a condom correctly?',
      type: 'radio',
      choices: [{ letter: 'a', text: 'Yes' }, { letter: 'b', text: 'No' }],
      answer: ['a', 'b'],
      points: 0
    }
  ];

  // -----------------------------------------------

  let question = questions[questId - 1];

  let answer = null;

  if (question.type === 'radio' && question.questionNumber !== 20) {
    var checked = req.body.name;
    if (req.body.name === question.answer) {
      answer = true;
      correct++;
    } else {
      answer = false;
    }
  }

  if (question.type === 'check' && question.questionNumber !== 20) {
    if (!req.body.name) {
      answer = false;
      var checked = [];
    } else {
      var checked = req.body.name;
      for (var i = 0; i <= req.body.name.length - 1; i++) {
        if (question.answer.includes(req.body.name[i])) {
          correct++;
        } else {
          // correct--;
        }
      }

      if (JSON.stringify(req.body.name) === JSON.stringify(question.answer)) {
        answer = true;
      } else {
        answer = false;
      }
    }
  }

  if (question.questionNumber === 20) {
    answer = true;
    if (!req.body.name) {
      var checked = [];
    } else {
      var checked = req.body.name;
    }
  }

  let correctString = correct.toString();

  Student.findById(studId)
    .then(student => {
      res.render('activity/activity-8', {
        student: student,
        questId: questId,
        question: question,
        checked: checked,
        answer: answer,
        correct: correctString,
        reqMethod: 'POST',
        path: '/activity-8',
        title: 'Activity 8',
        isAuthenticated: req.session.isLoggedIn
      });
    })
    .catch(err => console.log(err));
};

/**  ========================================================================================
 *
 * Activity 8 SAVE   */
exports.getActivity08Save = (req, res, next) => {
  const studId = req.params.studentId;
  let correct = Number(req.params.correct);
  // console.log('correct = ' + correct);
  let maxScore = 37; // a perfect score
  let thisScore = correct / maxScore;
  thisScore = thisScore.toFixed(2);
  let congratsUrl = '/activity-congrats/8/' + studId;

  Student.findById(studId).then(student => {
    // console.log(student.scores[0].ac_scores[0]);
    // console.log(thisScore);

    let scoresArray = student.scores[7].ac_scores;
    let datesArray = student.scores[7].ac_dates;
    let thisDate = new Date();
    scoresArray.push(thisScore);
    datesArray.push(thisDate);
    student.scores[7].ac_scores = scoresArray;
    student.scores[7].ac_dates = datesArray;

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
 * Student  POST  activity 8 */
exports.postActivity08Leave = (req, res, next) => {
  /* IF WE EVEN NEED TO SAVE ON LEAVE */

  const studId = req.params.studentId;
  let questId = Number(req.params.questionId) - 1;
  let correct = Number(req.params.correct);
  const score100List = [
    1,
    2,
    7,
    10,
    13,
    14,
    15,
    19,
    22,
    23,
    24,
    25,
    26,
    27,
    28,
    32,
    33,
    34,
    37
  ];
  let thisScore = correct / score100List[questId - 1];
  thisScore = thisScore.toFixed(2);

  const redirectUrl = '/student/' + studId;

  Student.findById(studId).then(student => {
    let scoresArray = student.scores[7].ac_scores;
    let datesArray = student.scores[7].ac_dates;
    let thisDate = new Date();
    scoresArray.push(thisScore);
    datesArray.push(thisDate);
    student.scores[7].ac_scores = scoresArray;
    student.scores[7].ac_dates = datesArray;

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
exports.getSummary8 = (req, res, next) => {
  const studId = req.params.studentId;
  let studentUrl = '/student/' + req.params.studentId;

  let sid8 = studId.slice(-8);

  Student.findById(studId)
    .then(student => {
      let currentScores1 = student.scores[7].ac_scores;
      let currentDates1 = student.scores[7].ac_dates;

      res.render('activity/activity-summary8', {
        student: student,
        scores: currentScores1,
        dates: currentDates1,
        sid8: sid8,
        path: '/activity-summary8',
        title: 'Summary',
        isAuthenticated: req.session.isLoggedIn
      });
    })
    .catch(err => console.log(err));
};
