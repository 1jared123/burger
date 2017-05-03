var orms = require("../config/orm.js");

// Find all the pets ordering by the lowest price to the highest price.
var allOfThem =	orms.selectAllEaten("*", "burgers");

	// Find a pet in the pets table by an animal_name of Rachel.
// var insertMeat = orms.selectWhere("pets", "animal_name", "Rachel");

	// Find the buyer with the most pets.
// var updateMeat = orms.findWhoHasMost("buyer_name", "buyer_id", "buyers", "pets");


module.exports = allOfThem; //, insertMeat, updateMeat;