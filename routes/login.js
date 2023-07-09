const express = require("express");
const app = express.Router();
const bodyParser = require("body-parser");
const cors = require("cors");
const axios = require('axios');
const fs = require("fs");
const moment = require("moment");


app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());
app.use(bodyParser.json());

app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE");
  res.header("Access-Control-Allow-Headers", "*");
  next();
});

app.get("/test", async function (req, res) {
  console.log('here')

  res.status(200).json("it works!")

});



module.exports = app;