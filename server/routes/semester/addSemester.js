const express = require("express");
const router = express.Router();
var mongoose = require("mongoose");
const verifyAuthToken = require("../../middleware/verifyAuthToken");
const { body, validationResult } = require("express-validator");
const { Semester, User, Department } = require("../../models");
const {
  failedResponse,
  HTTP_STATUS,
  successResponse,
} = require("../../utils/commonFunctions");

//Route 1: Add a new semester using POST : /api/semester/add : LOGIN REQUIRED
const METHOD_NAME_FOR_LOG = "Add Semester API ERROR";
router.post(
  "/",
  verifyAuthToken,
  [body("semester", "enter a valid semester")],
  async (req, res) => {
    let userID = req.user.id;
    // let deptID = req.department.id;
    console.log("userID ", userID);
    // console.log("deptID ", deptID);

    const { semester } = req.body;
    let userRegistered = await User.findOne({
      _id: mongoose.Types.ObjectId(userID),
    });
    // let departmentRegistered = await Department.findOne({
    //   _id: mongoose.Types.ObjectId(deptID),
    // });

    console.log("user id ", userRegistered);

    try {
      if (!userRegistered) {
        failedResponse(
          res,
          HTTP_STATUS.BAD_REQUEST,
          `Given userID = ${userID} is not registered `
        );
      } else {
        let semesterObj = await Semester.findOne({
          user: mongoose.Types.ObjectId(userID),
        });
        if (semesterObj?.semester == semester) {
          failedResponse(
            res,
            HTTP_STATUS.BAD_REQUEST,
            ` ${semester} semester is already registered By ${userRegistered?.email}`
          );
        } else {
          const errors = validationResult(req);
          if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
          }
          const newSemester = new Semester({
            semester,
            user: userID,
          });
          const savedSemester = await newSemester.save();
          successResponse(
            res,
            HTTP_STATUS.OK,
            `Semester Added Succesfully By ${userRegistered?.email}`,
            savedSemester
          );
        }
      }
    } catch (error) {
      console.error(error.message);
      res.status(500).send(`${METHOD_NAME_FOR_LOG} ${error.message}`);
    }
  }
);
module.exports = router;
