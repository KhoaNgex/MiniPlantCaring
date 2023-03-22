const mongoose = require("mongoose");
const Soil_moisture = mongoose.model("Soil_moisture");

const getAllSoil = async (req, res) => {
  try {
    const data = await Soil_moisture.find();
    res.json(data);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getLastSoil = async (req, res) => {
  try {
    const data = await Soil_moisture.find().limit(1).sort({ $natural: -1 });
    res.json(data);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};


module.exports = {
  getAllSoil,
  getLastSoil
};