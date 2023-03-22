const mongoose = require("mongoose");
const Humidity = mongoose.model("Humidities");

const getAllHumi = async (req, res) => {
  try {
    const data = await Humidity.find();
    res.json(data);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getLastHumi = async (req, res) => {
  try {
    const data = await Humidity.find().limit(1).sort({ $natural: -1 });
    res.json(data);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  getAllHumi,
  getLastHumi
};