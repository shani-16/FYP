const express = require("express");
const router = express.Router();
const verifyAuthToken = require("../middleware/verifyAuthToken");

const { body, validationResult } = require("express-validator");
const { Semester } = require("../models");

//Route 1: Add a new semester using POST : /api/semester/addsemester : LOGIN REQUIRED

router.post(
  "/addsemester",
  verifyAuthToken,
  [body("semester", "enter a valid semester")],
  async (req, res) => {
    try {
      const { semester } = req.body;
      //If there are errors, return bad request and errors
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
      }
      const newSemester = new Semester({
        semester,
        user: req.user.id,
      });
      const savedSemester = await newSemester.save();
      res.json(savedSemester);
    } catch (error) {
      console.error(error.message);
      res.status(500).send("Some Error Occured");
    }
  }
);
module.exports = router;
