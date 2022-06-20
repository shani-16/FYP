const mongoose = require("mongoose");
const { Schema } = mongoose;

const QuestionSchema = new Schema({
  user:{
    type:mongoose.Schema.Types.ObjectId,
    ref:'user'},
  question_number: {
    type: Number,
    required: true,
  },
question_type:{
    type: String,
    required: true,
},
  newclass:{
    type: String,
    required: true,
  }
});
const Question=mongoose.model("question", QuestionSchema);
module.exports = Question;