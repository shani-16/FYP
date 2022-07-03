const express = require("express");
const router = express.Router();

const addCourseAPI = require("./addCourse");
const getCourseAPI = require("./getCourse");
router.use("/add", addCourseAPI);
router.use("/get", getCourseAPI);

module.exports = router;
