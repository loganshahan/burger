var orm = require("../config/orm.js");

var cat = {
    selectAll: function(cb) {
      orm.selectAll("cats", function(res) {
        cb(res);
      });
    },
    // The variables cols and vals are arrays.
    insertone: function(cols, vals, cb) {
      orm.insertOne("cats", cols, vals, function(res) {
        cb(res);
      });
    },
    updateOne: function(objColVals, condition, cb) {
      orm.updateOne("cats", objColVals, condition, function(res) {
        cb(res);
      });
    }
  };
  
  // Export the database functions for the controller (catsController.js).
  module.exports = cat;