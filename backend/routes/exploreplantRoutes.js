const express = require("express");

var explorePlantRouter = express.Router();

var { getAllExplorePlant } = require("../controllers/exploreController");

explorePlantRouter.get("/getAll", getAllExplorePlant);
module.exports = explorePlantRouter;