//requre some data
var burgers = require("../models/burger");


module.exports = function(app) {
//display all the burgers
  app.get("/", function(req, res) {
  
    res.render("index", {burgers: burgers});
});

// add to the people
//   app.get("/", function(reqest, response) {
// 	  response.sendFile(path.join(__dirname, "/../public/home.html"));
// 	});

};