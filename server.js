var express = require("express");
var bodyParser = require("body-parser");
var methodOverride = require("method-override");
var exphbs = require("express-handlebars");

var app = express();
var port = 4000;

app.use(express.static("./public"));

// Parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// Override with POST having ?_method=DELETE
app.use(methodOverride("_method"));

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

//Importing the needed routes
var route = require("./controllers/burgers_controller.js");

app.use("/", route);

app.listen(port, function() {
  console.log("Reactors primed, fire when ready.");
});
