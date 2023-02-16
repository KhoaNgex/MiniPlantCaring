const express = require("express");

var employeeRouter = express.Router();

var { 
  getEmployeeInsertForm,
  insertUpdateEmployee,
  getEmployeeList,
  getEmployeeUpdateForm,
  deteleEmployee,
} = require("../controllers/employeeController");

employeeRouter.get("/", getEmployeeInsertForm);

employeeRouter.post("/", insertUpdateEmployee);

employeeRouter.get("/list", getEmployeeList);

employeeRouter.get("/:id", getEmployeeUpdateForm);

employeeRouter.get("/delete/:id", deteleEmployee);

module.exports = employeeRouter;
