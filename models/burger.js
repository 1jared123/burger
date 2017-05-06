var orms = require("../config/orm");

var burgers = {
	//selecting all of the burgers
	allOfThem: function(cb) {
		orms.selectAll("burgers", function(result) {
			cb(result);
		});
	},
	//adding a new burger
	insertMeat: function(val, cb) {
		orms.insertOne("burgers", "burger_name", val, function(result) {
			cb(result);
		});
	},
	//eating the burger
	updateMeat: function(newName, theId, cb) {
		orms.updateOne("burgers", "devoured", newName, "id", theId, function(
			result
		) {
			cb(result);
		});
	}
};

module.exports = burgers;
