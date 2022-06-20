const mongoose = require("mongoose");
const { Schema } = mongoose;

const QuestionMapSchema = new Schema({
  user:{
    type:mongoose.Schema.Types.ObjectId,
    ref:'user'},
  class_number: {
    type: Number,
    required: true,
  },
assessment_task:{
    type: String,
    required: true,
},
  question_number:{
    type: Number,
    required: true,
  },
  clo:{
    type: Number,
    required: true,
  },
  weightage:{
    type: Number,
    required: true,
  }
});
const QuestionMap=mongoose.model("questionmap", QuestionMapSchema);
module.exports = QuestionMap;