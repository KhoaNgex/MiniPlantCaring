const mongoose = require('mongoose');

// set up mongoose
const uri =
  "mongodb+srv://khoanguyenakaivn:Ak10042002@khoahihi222.9y04maq.mongodb.net/plantApp?retryWrites=true&w=majority";

mongoose.connect(uri, { useNewUrlParser: true }, (err) => {
    if (!err) { console.log('MongoDB Connection Succeeded.') }
    else { console.log('Error in DB connection : ' + err) }
});

// register for model
require('./employee.model');
require("./pet.model");