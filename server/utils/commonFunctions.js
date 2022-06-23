require("dotenv").config();
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");

const genSecretPassword = async (password) => {
  const salt = await bcrypt.genSalt(10);
  return await bcrypt.hash(password, salt);
};

const HTTP_STATUS = {
  OK: 200,
  BAD_REQUEST: 400,
  UNAUTHORIZED: 401,
  FORBIDDEN: 403,
  NOT_FOUND: 404,
  INTERNAL_SERVER_ERROR: 500,
};

const successResponse = (res, statusCode, successMessage = "", token = "") =>
  res.status(statusCode).send({
    success: true,
    status: "succesfull",
    message: successMessage,
    token: token ? token : null,
  });

const failedResponse = (res, statusCode, failedMessage = "") =>
  res
    .status(statusCode)
    .send({ success: false, status: "failed", message: failedMessage });

module.exports = {
  genSecretPassword,
  failedResponse,
  successResponse,
  HTTP_STATUS,
};
