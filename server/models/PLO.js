const mongoose = require("mongoose");
const { Schema } = mongoose;

const PLOSchema = new Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "user",
  },
  semester: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "semester",
  },
  plo: {
    type: String,
  },
});
const PLO = mongoose.model("plo", PLOSchema);
module.exports = PLO;
