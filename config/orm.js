var connection = require("./connection.js");

var orm = {
  //get all the burgers
  selectAll: function(whatToSelect, cb) {
    var queryString = "SELECT * FROM ??";
    connection.query(queryString, [whatToSelect], function(err, result) {
      if (err) {
        throw err;
      }
      cb(result)
      console.log("all The burgers!");
    });
  },
  //add a burger
  insertOne: function(tableInput, colName, aVal, cb ) {
    var queryString = "INSERT INTO ?? (??) values (?)";
    connection.query(queryString, [tableInput, colName, aVal], function(err, result) {
      if (err) {
        throw err;
      }
      cb(result)
      console.log("New Burger Added!");
    });
  },
  // update burger as eaten.
  updateOne: function(tableInput, colName, newInput, idCol, pagesId, cb) {
    var queryString = "UPDATE ?? SET ?? = ? WHERE ??=?";

    connection.query(queryString, [tableInput, colName, newInput, idCol, pagesId], function(err, result) {
      if (err) {
        throw err;
      }
      cb(result)
      console.log("Updated a burger!");
    });
  }
};

module.exports = orm;
