const express = require("express");

var accountRouter = express.Router();

var { getAllAccounts } = require("../controllers/accountController");

accountRouter.get("/getAll", getAllAccounts);
module.exports = accountRouter;