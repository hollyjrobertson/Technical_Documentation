const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
const app = express();
const httpMsgs = require("http-msgs");

app.listen(3000);

app.use(bodyParser.urlencoded( {
    extended : false
}));
app.use(express.static("assets"));

app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "/index.html"));
});

app.post("/test", function(req, res) {
    var data = req.body;
    console.log("Inside index.js: ");
    console.log(data);

    httpMsgs.sendJSON(req, res, {
        from : "NodeJS Server is sending a response",
        name : data.name,
        city : data.city
    });
});