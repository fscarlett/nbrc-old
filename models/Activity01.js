const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const activity1Schema = new Schema({
  questionNumber: {
    type: Number,
    required: true
  },
  imageUrl: {
    type: String,
    required: false
  },
  answer: {
    type: Boolean,
    required: false
  }
});

module.exports = mongoose.model('Activity01', activity1Schema);
