const express = require("express");
const router = express.Router();
const getQuestionMapAPI = require("./getQuestionMap");
const addQuestionMapAPI = require("./addQuestionMap");

router.use("/add", addQuestionMapAPI);
router.use("/get", getQuestionMapAPI);

module.exports = router;
