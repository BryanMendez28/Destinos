const express = require("express");
const route = express.Router();
const {  getDestinos } = require("../controllers/index");

route.get("/destinos", getDestinos);


module.exports = route;
