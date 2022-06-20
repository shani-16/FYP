const express = require("express");
const router = express.Router();
const fetchuser = require("../middleware/fetchuser");
const { body, validationResult } = require("express-validator");
const { Course } = require("../models");

//Route 1: Add a new semester using POST : /api/course/addcourse : LOGIN REQUIRED

router.post(
  "/addcourse",
  fetchuser,
  [
    body("courseCode", "enter a valid course code"),
    body("courseTitle", "enter valid credit title"),
    body("creditHours", "enter a valid credit hours"),
  ],
  async (req, res) => {
    try {
      const { courseCode, courseTitle, creditHours } = req.body;
      //If there are errors, return bad request and errors
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
      }
      const newCourse = new Course({
        courseCode,
        courseTitle,
        creditHours,
        user: req.user.id,
      });
      const savedCourse = await newCourse.save();
      res.json(savedCourse);
    } catch (error) {
      console.error(error.message);
      res.status(500).send("Some Error Occured");
    }
  }
);
module.exports = router;
