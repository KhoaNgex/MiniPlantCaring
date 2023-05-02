const mongoose = require('mongoose');

var notificationSchema = new mongoose.Schema({
    plantName: {
        type: String,
        required: true,
    },
    notiType: {
        type: String,
        required: false,
    },
    newCondition: {
        type: Array,
        required: true,
    },
    noti: {
        type: String,
        required: true,
    },
    problem: {
        type: String,
        required: true,
    },
    solution: {
        type: String,
        required: true,
    },
    notiDate: {
        type: String,
        required: true,
    }
});

mongoose.model('Notifications', notificationSchema);