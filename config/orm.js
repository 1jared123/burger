var connection = require("./connection.js");

var orm = {
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
  insertOne: function(tableInput, colName, aVal, cb ) {
    var queryString = "INSERT INTO ?? (?) values (?)";
    connection.query(queryString, [tableInput, colName, aVal], function(err, result) {
      if (err) {
        throw err;
      }
      cb(result)
      console.log("New Burger Added!");
    });
  },
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
