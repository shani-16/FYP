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

const METHOD_NAME_FOR_LOG = "Delete Dept API ERROR";
router.delete("/:id", verifyAuthToken, async (req, res) => {
  try {
    let deptID = await Department.findById(req.params.id);
    console.log("Department Id ", deptID);
    if (deptID == null) {
      failedResponse(
        res,
        HTTP_STATUS.BAD_REQUEST,
        ` ${req.params.id} Department does not exist `
      );
      return;
    }

    if (deptID?.user.toString() != req.user.id) {
      failedResponse(
        res,
        HTTP_STATUS.BAD_REQUEST,
        ` ${deptID} METHOD_NAME_FOR_LOG `
      );
      return;
    }

    deptID = await Department.findByIdAndDelete(req.params.id);
    successResponse(
      res,
      HTTP_STATUS.OK,
      ` ${deptID.dept} Department Deleted Succesfully`,
      deptID.dept
    );
  } catch (error) {
    console.error(error.message);
    // return res.status(500);
    failedResponse(
      res,
      HTTP_STATUS.INTERNAL_SERVER_ERROR,
      ` METHOD_NAME_FOR_LOG `
    );
  }
});
module.exports = router;
