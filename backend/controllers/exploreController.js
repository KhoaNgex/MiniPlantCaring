const mongoose = require("mongoose");
const Explore = mongoose.model("Explores");

const getAllExplorePlant = async (req, res) => {
  try {
    const data = await Explore.find();
    res.json(data);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
    getAllExplorePlant
};