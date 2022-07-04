const mongoose = require("mongoose");
const { Schema } = mongoose;

const QuestionMapSchema = new Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "user",
  },
  courseTitle: {
    type: String,
    required: true,
  },
  assessmentTask: {
    type: String,
    required: true,
  },
  questionNumber: {
    type: Number,
    required: true,
  },
  clo: {
    type: String,
    required: true,
  },
  plo: {
    type: String,
    required: true,
  },
  weightage: {
    type: Number,
    required: true,
  },
});
const QuestionMap = mongoose.model("questionmap", QuestionMapSchema);
module.exports = QuestionMap;
