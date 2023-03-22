const express = require("express");

var temperatureRouter = express.Router();

var { getAllTemp, getLastTemp } = require("../controllers/temperatureController");

temperatureRouter.get("/getAll", getAllTemp);
temperatureRouter.get("/getLast", getLastTemp);

module.exports = temperatureRouter;
