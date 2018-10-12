// Dependencies
const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const methodOverride = require("method-override");
const expressSanitizer = require("express-sanitizer");
const Portfolio = require("./models/portfolio.js")

// Starting the app
const app = express();

// Configurations
app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended: true}));
app.use(expressSanitizer());
app.use(methodOverride("_method"));

// Routes
app.get("/", function(req, res) {
   res.redirect("/home") 
});

app.get("/home", function(req, res) {
   res.render("home"); 
});

app.get("/portfolio/:id", function(req, res) {
    Portfolio.findById(req.params.id, function(err, foundPortfolio) {
        if (err) {
            res.redirect("/home");
        } else {
            res.render("portfolio-item", {portfolio: foundPortfolio});
        }
    });
});

// Starting the server
app.listen(process.env.PORT, process.env.IP, function() {
    console.log("Express server had started!")
});