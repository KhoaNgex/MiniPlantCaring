require('./models/db');

const express = require('express');
const bodyparser = require('body-parser');
const morgan = require("morgan");
var cors = require("cors");

const temperatureRouter = require("./routes/temperatureRoutes");
const humidityRouter = require("./routes/humidityRoutes");
const lightRouter = require("./routes/lightRoutes");
const soil_moistureRouter = require("./routes/soil_moistureRoutes");

var app = express();

app.use(cors());

// http logger
app.use(morgan("combined"));

// body parser for resolve HTTP POST request
app.use(bodyparser.urlencoded({
    extended: true
}));
app.use(bodyparser.json());

app.listen(3000, () => {
    console.log('Express server started at port : 3000');
});

app.use('/temperature', temperatureRouter);
app.use("/humidity", humidityRouter);
app.use("/light", lightRouter);
app.use("/soil_moisture", soil_moistureRouter);
