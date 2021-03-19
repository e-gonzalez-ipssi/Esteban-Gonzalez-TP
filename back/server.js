const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");

var errorHandler = require("errorhandler");

mongoose.connect("mongodb://localhost:27017/immo");

const app = express();

const { createAnnonceRoutes } = require("./routes");

app.use(cors());
app.use(errorHandler({ dumpExceptions: true, showStack: true }));
app.use(bodyParser.json());

createAnnonceRoutes(app);

app.listen(3000, "localhost", () => {
    console.log("server started");
});
  