const Student = require('../models/Student');
const User = require('../models/User');

const { validationResult } = require('express-validator');

exports.getSettings = (req, res, next) => {
  let uid = req.session.user._id;
  const backlink = req.headers.referer;
  let first = req.session.user.fname;
  let last = req.session.user.lname;
  let email = req.session.user.email;
  let userIdObj = {};

  let flashMessage = req.flash('error');
  if (flashMessage.length > 0) {
    flashMessage = flashMessage[0];
  } else {
    flashMessage = null;
  }

  res.render('settings', {
    path: '/settings',
    title: 'Settings',
    first: first,
    last: last,
    email: email,
    reqMethod: 'GET',
    message: '',
    errorMessage: '',
    flashMessage: flashMessage,
    backlink: backlink,
    validationErrors: []
  });
};

exports.postSettings = (req, res, next) => {
  const uid = req.session.user._id;

  const updatedFirst = req.body.first;
  const updatedLast = req.body.last;
  const updatedEmail = req.body.email;

  const errors = validationResult(req);

  if (updatedEmail !== req.session.user.email) {
    User.findOne({ email: updatedEmail }).then(userDoc => {
      if (userDoc) {
        req.flash(
          'error',
          'This email is already in use. Please enter a different email.'
        );
        return res.redirect('/settings');
      }
    });
  }

  if (!errors.isEmpty()) {
    let flashMessage = req.flash('error');
    if (flashMessage.length > 0) {
      flashMessage = flashMessage[0];
    } else {
      flashMessage = null;
    }

    return res.status(422).render('settings', {
      path: '/settings',
      title: 'Settings',
      backlink: '/roster',
      isAuthenticated: true,
      reqMethod: 'POST',
      message: '',
      flashMessage: flashMessage,
      errorMessage: errors.array()[0].msg,
      first: updatedFirst,
      last: updatedLast,
      email: updatedEmail,
      validationErrors: errors.array()
    });
  }

  User.findById(uid).then(user => {
    user.fname = updatedFirst;
    user.lname = updatedLast;
    user.email = updatedEmail;

    return user
      .save()
      .then(result => {
        req.session.user = user;
        let first = req.session.user.fname;
        let last = req.session.user.lname;
        let email = req.session.user.email;
        res.render('settings', {
          path: '/settings',
          title: 'Settings',
          first: first,
          last: last,
          email: email,
          reqMethod: 'GET',
          message: '',
          errorMessage: '',
          flashMessage: null,
          backlink: '/roster',
          message: 'Settings have been saved.',
          isAuthenticated: req.session.isLoggedIn,
          validationErrors: errors.array()
        });
      })
      .catch(err => console.log(err));
  });
};

exports.getRoster = (req, res, next) => {
  let uid = req.session.user._id;
  let teacherName = req.session.user.fname + ' ' + req.session.user.lname;
  let userIdObj = {};
  userIdObj = { userId: uid };

  if (req.session.user.admin) {
    userIdObj = {};
  }
  Student.find(userIdObj, null, { sort: { fname: 1 } }).then(students => {
    let last = students.lname;
    // console.log(students);
    res.render('roster', {
      students: students,
      path: '/roster',
      title: 'Students',
      teacherName: teacherName,
      isAuthenticated: req.session.isLoggedIn
    });
  });
};

exports.getNewStudent = (req, res, next) => {
  const teacherName = req.session.user.fname + ' ' + req.session.user.lname;
  res.render('new-student', {
    path: '/new-student',
    title: 'New Student',
    teacherName: teacherName,
    reqMethod: 'GET',
    backlink: '/roster',
    validationErrors: [],
    oldInput: { first: '', last: '', avatar: '' },
    isAuthenticated: req.session.isLoggedIn
  });
};

exports.postNewStudent = (req, res, next) => {
  const first = req.body.first;
  const last = req.body.last;
  const avatar = req.body.avatar;
  const teacherName = req.session.user.fname + ' ' + req.session.user.lname;
  const student = new Student({
    fname: first,
    lname: last,
    avatarUrl: avatar,
    userId: req.session.user._id,
    scores: [
      { name: 'activity1' },
      { name: 'activity2' },
      { name: 'activity3' },
      { name: 'activity4' },
      { name: 'activity5' },
      { name: 'activity6' },
      { name: 'activity7' },
      { name: 'activity8' }
    ]
  });

  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    return res.status(422).render('new-student', {
      path: '/new-student',
      title: 'New Student',
      teacherName: teacherName,
      backlink: '/roster',
      isAuthenticated: req.session.isLoggedIn,
      reqMethod: 'POST',
      errorMessage: errors.array()[0].msg,
      oldInput: { first: first, last: last, avatar: avatar },
      validationErrors: errors.array()
    });
  }

  student
    .save()
    .then(result => {
      res.redirect('/roster');
    })
    .catch(err => console.log(err));
};

exports.getStudent = (req, res, next) => {
  const studId = req.params.studentId;
  let sid8 = studId.slice(-8);
  const teacherName = req.session.user.fname + ' ' + req.session.user.lname;

  Student.findById(studId)
    .then(student => {
      // activity 1
      student.completedRounds1 = 0;
      student.runningScore1 = 0;
      let currentScores1 = student.scores[0].ac_scores || null;

      if (typeof student.scores[0].ac_scores[0] != 'undefined') {
        let scoresAvg1 =
          currentScores1.reduce((x, y) => x + y) / currentScores1.length;
        student.runningScore1 = scoresAvg1.toFixed(2) * 100;
        student.completedRounds1 = currentScores1.length;
      }

      // activity 2
      student.completedRounds2 = 0;
      student.runningScore2 = 0;
      let currentScores2 = student.scores[1].ac_scores || null;

      if (typeof student.scores[1].ac_scores[0] != 'undefined') {
        let scoresAvg2 =
          currentScores2.reduce((x, y) => x + y) / currentScores2.length;
        student.runningScore2 = scoresAvg2.toFixed(2) * 100;
        student.completedRounds2 = currentScores2.length;
      }

      // activity 3
      student.completedRounds3 = 0;
      student.runningScore3 = 0;
      let currentScores3 = student.scores[2].ac_scores || null;

      if (typeof student.scores[2].ac_scores[0] != 'undefined') {
        let scoresAvg3 =
          currentScores3.reduce((x, y) => x + y) / currentScores3.length;
        student.runningScore3 = scoresAvg3.toFixed(2) * 100;
        student.completedRounds3 = currentScores3.length;
      }

      // activity 4
      student.completedRounds4 = 0;
      student.runningScore4 = 0;
      let currentScores4 = student.scores[3].ac_scores || null;

      if (typeof student.scores[3].ac_scores[0] != 'undefined') {
        let scoresAvg4 =
          currentScores4.reduce((x, y) => x + y) / currentScores4.length;
        student.runningScore4 = scoresAvg4.toFixed(2) * 100;
        student.completedRounds4 = currentScores4.length;
      }

      // activity 5
      student.completedRounds5 = 0;
      student.runningScore5 = 0;
      let currentScores5 = student.scores[4].ac_scores || null;

      if (typeof student.scores[4].ac_scores[0] !== 'undefined') {
        let scoresAvg5 =
          currentScores5.reduce((x, y) => x + y) / currentScores5.length;
        student.runningScore5 = scoresAvg5.toFixed(2) * 100;
        student.completedRounds5 = currentScores5.length;
      }

      // activity 6
      student.completedRounds6 = 0;
      student.runningScore6 = 0;
      let currentScores6 = student.scores[5].ac_scores || null;

      if (typeof student.scores[5].ac_scores[0] !== 'undefined') {
        let scoresAvg6 =
          currentScores6.reduce((x, y) => x + y) / currentScores6.length;
        student.runningScore6 = scoresAvg6.toFixed(2) * 100;
        student.completedRounds6 = currentScores6.length;
      }

      // activity 7
      student.completedRounds7 = 0;
      student.runningScore7 = 0;
      let currentScores7 = student.scores[6].ac_scores || null;

      if (typeof student.scores[6].ac_scores[0] !== 'undefined') {
        let scoresAvg7 =
          currentScores7.reduce((x, y) => x + y) / currentScores7.length;
        student.runningScore7 = scoresAvg7.toFixed(2) * 100;
        student.completedRounds7 = currentScores7.length;
      }

      // activity 8
      student.completedRounds8 = 0;
      student.runningScore8 = 0;
      let currentScores8 = student.scores[7].ac_scores || null;

      if (typeof student.scores[7].ac_scores[0] !== 'undefined') {
        let scoresAvg8 =
          currentScores8.reduce((x, y) => x + y) / currentScores8.length;
        student.runningScore8 = scoresAvg8.toFixed(2) * 100;
        student.completedRounds8 = currentScores8.length;
      }

      res.render('student', {
        student: student,
        path: '/student',
        title: 'Student',
        teacherName: teacherName,
        sid8: sid8,
        isAuthenticated: req.session.isLoggedIn
      });
    })
    .catch(err => console.log(err));
};

/**  ========================================================================================
 *
 * Student  POST */
exports.postStudent = (req, res, next) => {
  const studId = req.params.studentId;
  let questId = Number(req.params.questionId);
  let correct = Number(req.params.correct);
  let thisScore = correct / (questId - 1);
  thisScore = thisScore.toFixed(2);

  const redirectUrl = '/student/' + studId;

  Student.findById(studId).then(student => {
    let scoresArray = student.scores[0].ac_scores;
    let datesArray = student.scores[0].ac_dates;
    let thisDate = new Date();
    scoresArray.push(thisScore);
    datesArray.push(thisDate);
    student.scores[0].ac_scores = scoresArray;
    student.scores[0].ac_dates = datesArray;

    student
      .save()
      .then(result => {
        res.redirect(redirectUrl);
      })
      .catch(err => console.log(err));
  });
};

exports.getEditStudent = (req, res, next) => {
  const studId = req.params.studentId;
  const backLink = '/student/' + studId;
  const teacherName = req.session.user.fname + ' ' + req.session.user.lname;

  Student.findById(studId)
    .then(student => {
      if (!student) {
        return res.redirect('/students');
      }
      res.render('edit-student', {
        student: student,
        path: '/edit-student',
        title: 'Edit Student Info',
        teacherName: teacherName,
        reqMethod: 'GET',
        backlink: backLink,
        validationErrors: [],
        message: '',
        isAuthenticated: req.session.isLoggedIn
      });
    })
    .catch(err => console.log(err));
};

exports.postEditStudent = (req, res, next) => {
  const stuId = req.params.studentId;
  const updatedFirst = req.body.first;
  const updatedLast = req.body.last;
  const updatedAvatar = req.body.avatar;
  const backLink = '/student/' + stuId;
  const teacherName = req.session.user.fname + ' ' + req.session.user.lname;

  const errors = validationResult(req);

  Student.findById(stuId).then(student => {
    student.fname = updatedFirst;
    student.lname = updatedLast;
    student.avatarUrl = updatedAvatar;

    if (!errors.isEmpty()) {
      const first = req.body.first;
      const last = req.body.last;
      const avatar = req.body.avatar;
      // const backLink = '/student/' + stuId;
      return res.status(422).render('edit-student', {
        student: student,
        path: '/edit-student',
        title: 'Edit Student Info',
        teacherName: teacherName,
        backlink: backLink,
        isAuthenticated: req.session.isLoggedIn,
        reqMethod: 'POST',
        message: '',
        errorMessage: errors.array()[0].msg,
        oldInput: { first: first, last: last, avatar: avatar },
        validationErrors: errors.array()
      });
    }

    return student
      .save()
      .then(result => {
        res.render('edit-student', {
          student: student,
          path: '/edit-student',
          title: 'Edit Student Info',
          teacherName: teacherName,
          backlink: backLink,
          reqMethod: 'GET',
          errorMessage: '',
          message: 'Student has been edited.',
          isAuthenticated: req.session.isLoggedIn,
          validationErrors: errors.array()
        });
      })
      .catch(err => console.log(err));
  });
};

exports.postDeleteStudent = (req, res, next) => {
  const stuId = req.body.studentId;

  Student.findByIdAndRemove(stuId)
    .then(() => {
      console.log('DESTROYED STUDENT');
      res.redirect('/roster');
    })
    .catch(err => console.log(err));
};
