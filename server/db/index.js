const mongoose = require("mongoose");
const mongoURI =
  "mongodb://localhost:27017/obe?directConnection=true&tls=false&readPreference=primary";

const connectToMongo = () => {
  mongoose.connect(mongoURI, () => {
    console.log("connected to mongoose successfully");
  });
};

module.exports = connectToMongo;
