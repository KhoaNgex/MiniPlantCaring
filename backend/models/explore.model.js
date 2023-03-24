const mongoose = require('mongoose');

var exploreSchema = new mongoose.Schema({
    plantName: {
        type: String,
        required: true,
    },
    plantScienceName: {
        type: String,
        required: false,
    },
    mainImage: {
        type: String,
        required: true,
    },
    minIdealTemp: {
        type: Number,
        required: true,
    },
    maxIdealTemp: {
        type: Number,
        required: true,
    },
    light: {
        type: String,
        required: true,
      },
    watering: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    image1: {
        type: String,
        required: true,
    },
    image2: {
        type: String,
        required: true,
    },
    descTemp: {
        type: String,
        required: true,
    },
    descLight: {
        type: String,
        required: true,
    },
    descWatering: {
        type: String,
        required: true,
    },
});

mongoose.model('Explores', exploreSchema);