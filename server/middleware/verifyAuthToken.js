require("dotenv").config();
const jwt = require("jsonwebtoken");
const JWT_SECRET = process.env.JWT_SECRET;
const verifyAuthToken = async (req, res, next) => {
  //Get user from jwt token and add id to request
  const METHOD_NAME_FOR_LOGS = "Verify Auth Token ERROR";
  const token = req.header("auth-token");

  try {
    if (!token) {
      return res.status(400).send({ error: "Please provide token" });
    } else {
      const data = await jwt.verify(token, JWT_SECRET);
      req.user = data.user;
      next();
    }
  } catch (error) {
    res.status(500).send({
      error: `${METHOD_NAME_FOR_LOGS} ${error} invalid token = ${token}`,
    });
  }
};
module.exports = verifyAuthToken;
