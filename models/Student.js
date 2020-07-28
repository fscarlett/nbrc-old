const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const scoreSchema = new Schema({
  name: 'string',
  ac_scores: ['number'],
  ac_dates: ['date']
});

const studentSchema = new Schema({
  fname: {
    type: String,
    required: true
  },
  lname: {
    type: String,
    required: false
  },
  avatarUrl: {
    type: String,
    required: false
  },
  date: {
    type: Date,
    default: Date.now
  },
  userId: {
    type: Schema.Types.ObjectId,
    ref: 'User'
  },
  scores: [scoreSchema]
});

module.exports = mongoose.model('Student', studentSchema);
