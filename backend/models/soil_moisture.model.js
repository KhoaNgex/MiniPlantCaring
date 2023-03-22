const mongoose = require('mongoose');

var soil_moistureSchema = new mongoose.Schema({
  value: {
    type: Number,
    required: true,
  },
  receivedAt: {
    type: Date,
    required: true,
  },
});

mongoose.model('Soil_moisture', soil_moistureSchema);