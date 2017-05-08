//requre some data
var express = require("express");
var smile = express();
var meals = require("../models/burger.js");

//display all the burgers
smile.get("/", function(req, res) {
  meals.allOfThem(function(data) {
    res.render("index", { burgers: data });
  });
});

// add the new burger
smile.post("/", function(req, res) {
  meals.insertMeat([req.body.burger], function() {
    res.redirect("/");
  });
});

// eat the burgers
smile.put("/:id", function(request, response) {
  meals.updateMeat(request.body.devoured, request.params.id, function() {
    response.redirect("/");
  });
});

module.exports = smile;
