// Dependencies
const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");

// Creating the app
const app = express();

// App configurations
app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended: true}));

// Routes
app.get("/", function(req, res) {
   res.render("home"); 
});

// Starting the server
app.listen(3000, function() {
    console.log("Express server had started!")
});
