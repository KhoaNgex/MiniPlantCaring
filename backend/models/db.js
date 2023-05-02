const mongoose = require("mongoose");

// set up mongoose
const uri =
  "mongodb+srv://khoanguyenakaivn:Ak10042002@khoahihi222.9y04maq.mongodb.net/plantApp?retryWrites=true&w=majority";

async function connectToDatabase() {
  try {
    await mongoose.connect(uri, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    });
    console.log('Connected to database');
  } catch (error) {
    console.error(error);
  }
}

connectToDatabase();

// register for model
require("./temperature.model");
require("./humidity.model");
require("./light.model");
require("./soil_moisture.model");
require("./explore.model");
require("./account.model");
