const express = require("express");
const router = express.Router();

const addCourseAPI = require("./addCourse");
const getCourseAPI = require("./getCourse");
const deleteCourseAPI = require("./deleteCourse");
const updateCourseAPI = require("./updateCourse");

router.use("/add", addCourseAPI);
router.use("/get", getCourseAPI);
router.use("/delete", deleteCourseAPI);
router.use("/update", updateCourseAPI);

module.exports = router;
