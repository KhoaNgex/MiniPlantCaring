const express = require("express");

var humidityRouter = express.Router();

var { getAllHumi, getLastHumi } = require("../controllers/humidityController");

humidityRouter.get("/getAll", getAllHumi);
humidityRouter.get("/getLast", getLastHumi);

module.exports = humidityRouter;
