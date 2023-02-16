const express = require("express");

var petRouter = express.Router();

var {
  insertPet,
  getAllPet,
  getOnePet,
  updatePet,
  deletePet,
} = require("../controllers/petController");

petRouter.post("/insert", insertPet);
petRouter.get("/getAll", getAllPet);
petRouter.get("/getOne/:id", getOnePet);
petRouter.patch("/update/:id", updatePet);
petRouter.delete("/delete/:id", deletePet);

module.exports = petRouter;
