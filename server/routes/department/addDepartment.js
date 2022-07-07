const express = require("express");
const router = express.Router();
var mongoose = require("mongoose");
const verifyAuthToken = require("../../middleware/verifyAuthToken");
const { body, validationResult } = require("express-validator");
const { Department, User } = require("../../models");
const {
  failedResponse,
  HTTP_STATUS,
  successResponse,
} = require("../../utils/commonFunctions");

//Route 1: Add a new department using POST : /api/department/departments : LOGIN REQUIRED
const METHOD_NAME_FOR_LOG = "Add Dept API ERROR";
router.post(
  "/",
  verifyAuthToken,
  [body("dept", "enter a valid deparment")],
  async (req, res) => {
    let userID = req.user.id;

    console.log("header user id : ", userID);
    const { dept } = req.body;
    dept = dept.toUpperCase();
    let userRegistered = await User.findOne({
      _id: mongoose.Types.ObjectId(userID),
    });

    console.log("mongo user :  ", userRegistered);

    try {
      if (!userRegistered) {
        failedResponse(
          res,
          HTTP_STATUS.BAD_REQUEST,
          `Given userID = ${userID} is not registered `
        );
      } else {
        let departmentObj = await Department.findOne({
          user: mongoose.Types.ObjectId(userID),
          dept,
        });
        console.log("mongo department obj :  ", departmentObj);
        if (departmentObj?.dept == dept) {
          failedResponse(
            res,
            HTTP_STATUS.BAD_REQUEST,
            ` ${dept} department is already registered By ${userRegistered?.email}`
          );
        } else {
          const errors = validationResult(req);
          if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
          }
          const newDepartment = new Department({
            dept,
            user: req.user.id,
          });
          const savedDepartment = await newDepartment.save();
          successResponse(
            res,
            HTTP_STATUS.OK,
            `Department Added Succesfully By ${userRegistered?.email}`,
            savedDepartment
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
