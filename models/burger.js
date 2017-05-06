var orms = require("../config/orm");

var burgers = {
		allOfThem: function(cb) {
			orms.selectAll("burgers", function(result) {
	        	cb(result);
	        });
		},

		insertMeat: function(val, cb) {
			orms.insertOne("burgers", "burger_name", val, function(result) {
				cb(result);
			})
		},

		updateMeat: function(newName, theId, cb) {
			orms.updateOne("burgers", "devoured", newName, "id", theId, function(result) {
				cb(result);
			})
		}
}

module.exports = burgers;