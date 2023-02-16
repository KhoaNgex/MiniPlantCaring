require('./models/db');

const express = require('express');
const path = require('path');
const exphbs = require('express-handlebars');
const bodyparser = require('body-parser');
const morgan = require("morgan");
var cors = require("cors");

const employeeRouter = require('./routes/employeeRoutes');
const petRouter = require("./routes/petRoutes");

var app = express();

app.use(cors());

// http logger
app.use(morgan("combined"));

// body parser for resolve HTTP POST request
app.use(bodyparser.urlencoded({
    extended: true
}));
app.use(bodyparser.json());

// set up template handlebars
app.set('views', path.join(__dirname, '/views/'));
app.engine('hbs', exphbs({ extname: 'hbs', defaultLayout: 'mainLayout', layoutsDir: __dirname + '/views/layouts/' }));
app.set('view engine', 'hbs');

app.listen(3000, () => {
    console.log('Express server started at port : 3000');
});

app.use('/employee', employeeRouter);
app.use("/pet", petRouter);

// test
app.get("/", (req, res) => {
  res.send("Hello World!");
});