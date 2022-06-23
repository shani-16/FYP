require("dotenv").config();
const express = require("express");
const router = express.Router();
const { body, validationResult } = require("express-validator");
const jwt = require("jsonwebtoken");
const { User } = require("../../models");
const {
  genSecretPassword,
  failedResponse,
  HTTP_STATUS,
  successResponse,
} = require("../../utils/commonFunctions");
const JWT_SECRET = process.env.JWT_SECRET;
//ROUTE 1: Create a user using POST "/api/auth/createuser" :Doesn't require authentication
const METHOD_NAME_FOR_LOG = "Create User API ERROR";
router.post(
  "/",
  [
    body("name", "enter a valid name").isLength({ min: 3 }),
    body("email", "enter a valid email").isEmail(),
    body("password", "password must be atleast 5 characters").isLength({
      min: 5,
    }),
  ],
  async (req, res) => {
    let success = false;
    const { name, email, password, confirmPassword } = req.body;
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      failedResponse(res, HTTP_STATUS.BAD_REQUEST, errors.array());
      return;
    }
    try {
      let user = await User.findOne({ email });
      if (user) {
        failedResponse(res, HTTP_STATUS.BAD_REQUEST, "Email already exists");
        return;
      } else {
        console.log(
          "password === confirmPassword ",
          password === confirmPassword
        );
        console.log("password  ", password);
        console.log(" confirmPassword ", confirmPassword);
        if (password === confirmPassword) {
          let hashPassword = await genSecretPassword(password);
          user = await User.create({
            name,
            email,
            password: hashPassword,
          });
          const data = {
            user: {
              id: user.id,
            },
          };
          const authTokenOBE = jwt.sign(data, JWT_SECRET);
          // success = true;
          // res.json({
          //   success,
          //   data: {
          //     authTokenOBE,
          //   },
          //   message: "User created Successfully ",
          // });
          successResponse(
            res,
            HTTP_STATUS.OK,
            "User created Successfully",
            authTokenOBE
          );
        } else {
          failedResponse(
            res,
            HTTP_STATUS.BAD_REQUEST,
            "Confirm Password not matched"
          );
          return;
        }
      }
      //Create a new user
    } catch (error) {
      console.error(`${METHOD_NAME_FOR_LOG} ${error.message}`);
      failedResponse(res, HTTP_STATUS.INTERNAL_SERVER_ERROR, error.message);
    }
  }
);
module.exports = router;
