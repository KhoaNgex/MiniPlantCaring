const mongoose = require("mongoose");
const Account = mongoose.model("Accounts");

const getAllAccounts = async (req, res) => {
  try {
    const data = await Account.find();
    res.json(data);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
    getAllAccounts
};