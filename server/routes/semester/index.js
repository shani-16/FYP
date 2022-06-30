const express = require("express");
const router = express.Router();

const addSemesterAPI = require("./addSemester");
router.use("/add", addSemesterAPI);

module.exports = router;
