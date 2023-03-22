const express = require("express");

var soil_moistureRouter = express.Router();

var {
  getAllSoil,
  getLastSoil,
} = require("../controllers/soil_moistureController");

soil_moistureRouter.get("/getAll", getAllSoil);
soil_moistureRouter.get("/getLast", getLastSoil);

module.exports = soil_moistureRouter;
