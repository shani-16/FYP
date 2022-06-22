require("dotenv").config();
const connectToMongo = require("./db");
const express = require("express");
var cors = require("cors");
const mongoURI = process.env.DB_URL;
connectToMongo(mongoURI);
const API = require("./routes");
const app = express();
const port = process.env.PORT || 5000;
app.use(cors());
//Middle Ware
app.use(express.json());

//Available Routes
app.use("/api", API);
app.listen(port, () => {
  console.log(`OBE listening on port ${port}`);
});
