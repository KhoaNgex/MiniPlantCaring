const mongoose = require('mongoose');

var temperatureSchema = new mongoose.Schema({
  value: {
    type: Number,
    required: true,
  },
  receivedAt: {
    type: Date,
    required: true,
  },
});

mongoose.model('Temperature', temperatureSchema);