const mongoose = require("mongoose");
const Temperature = mongoose.model("Temperature");

const getAllTemp = async (req, res) => {
  try {
    const data = await Temperature.find();
    res.json(data);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getLastTemp = async (req, res) => {
  try {
    const data = await Temperature.find().limit(1).sort({ $natural: -1 });
    res.json(data);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  getAllTemp,
  getLastTemp,
};
