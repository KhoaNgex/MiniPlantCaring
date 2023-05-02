const mongoose = require("mongoose");
const Notification = mongoose.model("Notifications");

const getAllNotifications = async (req, res) => {
  try {
    const data = await Notification.find();
    res.json(data);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
    getAllNotifications
};