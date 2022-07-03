const express = require("express");
const app = express.Router();
const auth = require("./auth/index");
const enrolnment = require("./enrolnment");
const semester = require("./semester");
const course = require("./course/index");
const assessment = require("./assessment");
const plo = require("./plo");
const clo = require("./clo");
const question = require("./question");
const questionMap = require("./questionmap");
const department = require("./department/index");

app.use("/auth", auth);
app.use("/enrolnment", enrolnment);
app.use("/semester", semester);
app.use("/course", course);
app.use("/assessment", assessment);
app.use("/plo", plo);
app.use("/clo", clo);
app.use("/question", question);
app.use("/questionmap", questionMap);
app.use("/department", department);

module.exports = app;
