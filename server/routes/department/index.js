const express = require("express");
const router = express.Router();
const getDepartmentAPI = require("./getDepartment");
const addDepartmentsAPI = require("./addDepartment");
const deleteDepartmentAPI = require("./deleteDepartment");

router.use("/add", addDepartmentsAPI);
router.use("/getall", getDepartmentAPI);
router.use("/delete", deleteDepartmentAPI);

module.exports = router;
