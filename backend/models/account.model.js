const mongoose = require('mongoose');

var accountSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: false,
    }
});

mongoose.model('Accounts',accountSchema);