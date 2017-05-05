//requre some data
var burgers = require("../models/burger");


module.exports = function(app) {
//display all the burgers
  app.get("/", function(req, res) {
  
    res.render("index", {burgers: burgers});
});

// add to the people
  app.post("/:id", function(reqest, response) {
  	burgers(request.params.id);
	});

};