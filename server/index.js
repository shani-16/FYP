const dotenv=require("dotenv")
dotenv.config()
const connectToMongo = require("./db");
const express = require("express");
var cors = require("cors");
connectToMongo();
const API = require("./routes/index.js");
const app = express();
const port = process.env.PORT||3001;
app.use(cors());
//Middle Ware
app.use(express.json());

//Available Routes
app.use("/api", API);
app.listen(port, () => {
  console.log(`OBE listening on port ${port}`);
});
