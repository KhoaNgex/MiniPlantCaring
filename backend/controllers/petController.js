const mongoose = require("mongoose");
const Pet = mongoose.model("Pet");

const insertPet = async (req, res) => {
  var pet = new Pet();
  pet.name = req.body.name;
  pet.animalType = req.body.animalType;
  try {
    const dataToSave = await pet.save();
    res.status(200).json(dataToSave);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

const getAllPet = async (req, res) => {
  try {
    const data = await Pet.find();
    res.json(data);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getOnePet = async (req, res) => {
  try {
    const data = await Pet.findById(req.params.id);
    res.json(data);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const updatePet = async (req, res) => {
  try {
    const id = req.params.id;
    const updatedData = req.body;
    const options = { new: true };

    const result = await Pet.findByIdAndUpdate(id, updatedData, options);

    res.send(result);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

const deletePet = async (req, res) => {
  try {
    const id = req.params.id;
    const data = await Pet.findByIdAndDelete(id);
    res.send(`Document with ${data.name} has been deleted..`);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

module.exports = {
  insertPet,
  getAllPet,
  getOnePet,
  updatePet,
  deletePet,
};
