const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();

var corsOptions = {
  origin: "http://localhost:8001"
};

app.use(cors(corsOptions));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//const db = require("./app/models");
//const Role = db.role;
//db.sequelize.sync();

app.get("/", (req, res) => {
  res.json({ message: "Welcome to Alakh application." });
});

//require('./app/routes/auth.routes')(app);
//require('./app/routes/movie.routes')(app);

const PORT = 8001;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
