const express = require("express");
const router = express.Router();

const addCourseAPI = require("./addCourse");
const getCourseAPI = require("./getCourse");
const getCourseByIDAPI = require("./getCourseByID");
router.use("/add", addCourseAPI);
router.use("/get", getCourseAPI);
router.use("/getbyid", getCourseByIDAPI);

module.exports = router;
