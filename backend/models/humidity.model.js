const mongoose = require('mongoose');

var humiditySchema = new mongoose.Schema({
  value: {
    type: Number,
    required: true,
  },
  receivedAt: {
    type: Date,
    required: true,
  },
});

mongoose.model('Humidities', humiditySchema);