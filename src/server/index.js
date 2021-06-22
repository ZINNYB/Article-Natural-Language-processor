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
const { inspector } = require('inspector');
const { application } = require('express');

// Instantiating
const app = express();
app.use(cors());
// to use json
// var jsonParser = bodyParser.json();

// // create application/x-www-form-urlencoded parser
// var urlencodedParser = bodyParser.urlencoded({ extended: false });
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(express.static("dist"));

// get endpoint
app.get("/", function (req, res) {
  res.sendFile(path.resolve("dist/index.html"));
});

app.get("/test", function (req, res) {
  res.send(mockAPIResponse);
});
app.get("/valid", function (req, res) {
  res.sendFile(path.resolve("dist/index.html"));
});
app.post("/valid", function (req, res) {
  console.log(req.body);
const nameData = req.body.content
fetch(`https://api.meaningcloud.com/sentiment-2.1?key=${Api_Key}&url=${nameData}&lang=en`,
        {
            method: "POST",
            headers: {
                "Content-Type": "application/JSON",
            }
        }).then((response) => {
            return response.json();
        }).then((data) => {
            console.log(data);
            res.send({
                subjectivity: data.subjectivity,
                agreement: data.agreement,
                confidence: data.confidence,
                irony: data.irony,
                scoreTag: data.scoreTag
            })
        });
})


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
