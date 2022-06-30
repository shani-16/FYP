require("dotenv").config();
const express = require("express");
const router = express.Router();
const { body, validationResult } = require("express-validator");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { User } = require("../../models");
const {
  failedResponse,
  HTTP_STATUS,
  successResponse,
} = require("../../utils/commonFunctions");
const JWT_SECRET = process.env.JWT_SECRET;
const METHOD_NAME_FOR_LOG = "Login User API ERROR";
router.post(
  "/",
  [
    body("email", "enter a valid email").isEmail(),
    body("password", "password cannot be blanked").exists(),
  ],
  async (req, res) => {
    const errors = validationResult(req);
    console.log("errors.array() ", errors.array());
    if (!errors.isEmpty()) {
      failedResponse(res, HTTP_STATUS.BAD_REQUEST, errors.array());
    }

    console.log("req.body - ", req.body);
    const { email, password } = req.body;
    try {
      let user = await User.findOne({ email });
      if (!user) {
        failedResponse(res, HTTP_STATUS.BAD_REQUEST, `${email}  not found`);
      }
      const passwordCompare = await bcrypt.compare(password, user.password);
      if (!passwordCompare) {
        failedResponse(
          res,
          HTTP_STATUS.BAD_REQUEST,
          "Please login with correct credentials"
        );
      }
      const data = {
        user: {
          id: user.id,
        },
      };
      const authtoken = jwt.sign(data, JWT_SECRET);
      successResponse(res, HTTP_STATUS.OK, "Login Successfull ", authtoken);
    } catch (error) {
      console.error(error.message);
      failedResponse(
        res,
        HTTP_STATUS.INTERNAL_SERVER_ERROR,
        `${METHOD_NAME_FOR_LOG} ${error.message}`
      );
    }
  }
);

module.exports = router;
