const express = require("express");
const router = express.Router();

const addSemesterAPI = require("./addSemester");
const getSemesterAPI = require("./getSemester");

router.use("/add", addSemesterAPI);
router.use("/get", getSemesterAPI);

module.exports = router;
