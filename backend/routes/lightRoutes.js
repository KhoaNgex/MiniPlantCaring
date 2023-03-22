const express = require("express");

var lightRouter = express.Router();

var { getAllLight, getLastLight } = require("../controllers/lightController");

lightRouter.get("/getAll", getAllLight);
lightRouter.get("/getLast", getLastLight);

module.exports = lightRouter;
