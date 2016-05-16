var mongoose = require('mongoose');
var Restaurant = mongoose.model('Restaurant');

var sendJsonResponse = function(res, status, content) {
  res.status(status);
  res.json(content);
};



module.exports.restaurantsListByDistance = function (req, res) {
  console.log(req.body);
  sendJsonResponse(res, 200, {"status" : "success"});
};

module.exports.restaurantsCreate = function (req, res) {
  console.log(req.body);
  sendJsonResponse(res, 200, {"status" : "success"});
};

module.exports.restaurantsReadOne = function (req, res) {
  console.log(req.body);
  sendJsonResponse(res, 200, {"status" : "success"});
};

module.exports.restaurantsUpdateOne = function (req, res) {
  console.log(req.body);
  sendJsonResponse(res, 200, {"status" : "success"});
};

module.exports.restaurantsDeleteOne = function (req, res) {
  console.log(req.body);
  sendJsonResponse(res, 200, {"status" : "success"});
};
