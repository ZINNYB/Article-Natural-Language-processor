const dotenv = require("dotenv");
dotenv.config();
var path = require("path");
const express = require("express");
const Api_Key = process.env.API_KEY;
const fetch = require("node-fetch");
var bodyParser = require("body-parser");
var cors = require("cors");
// other resources
const url = `https://api.meaningcloud.com/lang-4.0/${Api_Key}`;
const mockAPIResponse = require("./mockAPI.js");
const { FormData } = require("formdata-node");

// Instantiating
const app = express();
app.use(cors());
// to use json
var jsonParser = bodyParser.json();

// create application/x-www-form-urlencoded parser
var urlencodedParser = bodyParser.urlencoded({ extended: false });

app.use(express.static("dist"));

// get endpoint
app.get("/", function (req, res) {
  // res.sendFile('dist/index.html')
  res.sendFile(path.resolve("dist/index.html"));
});

app.listen(8081, function () {
  console.log("Example app listening on port 8081!");
});

app.get("/test", function (req, res) {
  res.send(mockAPIResponse);
});
app.post("/valid", urlencodedParser, function (req, res) {
  console.log(req.body);
});

/** Solution to the challenge
 * Make the api work in the server side
 * Make it take the value of the form input
 * Make the api produce results based on the value of the form input
 *
 *
 */
