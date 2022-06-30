const express = require("express");
const router = express.Router();

const addAssessmentAPI = require("./addAssessment");
router.use("/add", addAssessmentAPI);

module.exports = router;
