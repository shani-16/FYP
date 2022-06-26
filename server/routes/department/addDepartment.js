const express = require("express");
const router = express.Router();
const verifyAuthToken = require("../../middleware/verifyAuthToken");
const { body, validationResult } = require("express-validator");
const { Department, User } = require("../../models");
const { failedResponse, HTTP_STATUS } = require("../../utils/commonFunctions");

//Route 1: Add a new department using POST : /api/department/departments : LOGIN REQUIRED
const METHOD_NAME_FOR_LOG = "Add Dept API ERROR";
router.post(
  "/",
  verifyAuthToken,
  [body("department", "enter a valid deparment")],
  async (req, res) => {
    let registeredUser = req.user.id;
    console.log("registeredUser = ", registeredUser);
    let user = await User.findOne({ registeredUser });
    console.log("checkUser = ", user);
    try {
      const { department } = req.body;
      if (!user) {
        failedResponse(res, HTTP_STATUS.BAD_REQUEST, "User Does not exist");
      } else {
        let registeredDepartment = await Department.findOne({ department });

        console.log("registered kuch b", registeredDepartment);
        // console.log("registeredDepartment", registeredDepartment.department);
        console.log("registeredUser try = ", registeredUser);
        console.log("justdepartment", department);
        if (registeredDepartment?.department == department) {
          failedResponse(
            res,
            HTTP_STATUS.BAD_REQUEST,
            "Department already exist"
          );
        } else {
          console.log("else department", department);
          //If there are errors, return bad request and errors
          const errors = validationResult(req);
          if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
          }
          const newDepartment = new Department({
            department,
            user: registeredUser,
          });
          const savedDepartment = await newDepartment.save();
          res.json(savedDepartment);
        }
      }
    } catch (error) {
      console.error(error.message);
      res.status(500).send(`${METHOD_NAME_FOR_LOG} ${error.message}`);
    }
  }
);
module.exports = router;
