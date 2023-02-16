const mongoose = require("mongoose");

var petSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  animalType: {
    type: String,
    required: false,
  },
});

mongoose.model("Pet", petSchema);
