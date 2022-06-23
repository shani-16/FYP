const express = require("express");
const router = express.Router();
const verifyAuthToken = require("../../middleware/verifyAuthToken");
const { body, validationResult } = require("express-validator");
const { Department } = require("../../models");

//Route 1: Add a new department using POST : /api/department/departments : LOGIN REQUIRED
const METHOD_NAME_FOR_LOG = "Add Dept API ERROR";
router.post(
  "/",
  verifyAuthToken,
  [body("department", "enter a valid deparment")],
  async (req, res) => {
    try {
      const { department } = req.body;
      //If there are errors, return bad request and errors
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
      }
      const newDepartment = new Department({
        department,
        user: req.user.id,
      });
      const savedDepartment = await newDepartment.save();
      res.json(savedDepartment);
    } catch (error) {
      console.error(error.message);
      res.status(500).send(`${METHOD_NAME_FOR_LOG} ${error.message}`);
    }
  }
);
module.exports = router;
