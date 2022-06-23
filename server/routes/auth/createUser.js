require("dotenv").config();
const express = require("express");
const router = express.Router();
const { body, validationResult } = require("express-validator");
const jwt = require("jsonwebtoken");
const { User } = require("../../models");
const { genSecretPassword } = require("../../utils/commonFunctions");
const JWT_SECRET = process.env.JWT_SECRET;
//ROUTE 1: Create a user using POST "/api/auth/createuser" :Doesn't require authentication
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
    const { email, password, name } = req.body;
    //If there are errors, return bad request and errors
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    //Check Whether the user with this email exists already
    try {
      let user = await User.findOne({ email });
      if (user) {
        return res.status(400).json({
          success,
          alert: "Sorry a user with this email exists already",
        });
      }
      //Create a new user
      let secPass = await genSecretPassword(password);
      user = await User.create({
        name,
        email,
        password: secPass,
      });
      const data = {
        user: {
          id: user.id,
        },
      };
      const authtoken = jwt.sign(data, JWT_SECRET);
      success = true;
      res.json({ success, authtoken });
    } catch (error) {
      console.error(error.message);
      res.status(500).send(`create user api error ${error.message}`);
    }
  }
);
module.exports = router;
