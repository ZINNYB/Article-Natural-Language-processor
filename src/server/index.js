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
const { inspector } = require("inspector");
const { application } = require("express");
// Instantiating
const app = express();
app.use(cors());
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);
app.use(bodyParser.json());
app.use(express.static("dist"));
// get endpoint
app.get("/", function (req, res) {
  res.sendFile(path.resolve("dist/index.html"));
});
app.get("/test", function (req, res) {
  res.send(mockAPIResponse);
});
app.get("/", function (req, res) {
  res.sendFile(path.resolve("dist/index.html"));
});



app.post("/valid", function (req, res) {
  const nameData = req.body.content;
  // Form data
  const formdata = new FormData();
  formdata.append("key", `${Api_Key}`);
  formdata.append("txt", `${nameData}`);
  formdata.append("lang", "en");  // 2-letter code, like en es fr ...

  const requestOptions = {
    method: 'POST',
    body: formdata,
    redirect: 'follow',
    headers: {
      "Content-Type": "application/JSON",
    },
  };
  console.log(req.body);
console.log(`https://api.meaningcloud.com/sentiment-2.1?`,requestOptions);
  fetch(
    `https://api.meaningcloud.com/sentiment-2.1?`, requestOptions)
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      console.log(data);
      res.send({
        subjectivity: data.subjectivity,
        agreement: data.agreement,
        confidence: data.confidence,
        irony: data.irony,
        scoreTag: data.scoreTag,
      });
    });
});
app.listen(8081, function () {
  console.log("Example app listening on port 8081!");
});
/** Solution to the challenge
 * Make the api work in the server side
 * Make it take the value of the form input
 * Make the api produce results based on the value of the form input
 *
 *
 */
