const mongoose = require('mongoose');

var lightSchema = new mongoose.Schema({
  value: {
    type: Number,
    required: true,
  },
  receivedAt: {
    type: Date,
    required: true,
  },
});

mongoose.model('Light', lightSchema);