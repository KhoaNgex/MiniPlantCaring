const mongoose = require("mongoose");
const Light = mongoose.model("Light");

const getAllLight = async (req, res) => {
  try {
    const data = await Light.find();
    res.json(data);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getLastLight = async (req, res) => {
  try {
    const data = await Light.find().limit(1).sort({ $natural: -1 });
    res.json(data);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  getAllLight,
  getLastLight
};