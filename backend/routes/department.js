const express = require("express");
const router = express.Router();
const fetchuser = require("../middleware/fetchuser");
const Department = require("../models/Department");
const { body, validationResult } = require("express-validator");

//Route 1: Add a new department using POST : /api/department/newdepartment : LOGIN REQUIRED

router.post(
  "/newdepartment",
  fetchuser,
  [body("department", "enter a valid department").isLength({ min: 3 })],
  async (req, res) => {
    try {
      const { department } = req.body;
      //If there are errors, return bad request and errors
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
      }
      const newdepartment = new Department({
        department,
        user: req.user.id,
      });
      const savedDepartment = await newdepartment.save();
      res.json(savedDepartment);
    } catch (error) {
      console.error(error.message);
      res.status(500).send("Some Error Occured");
    }
  }
);
module.exports = router;
