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
  if(req.params && req.params.restaurantid){
    Restaurant
      .findById(req.params.restaurantid)
      .exec(function(err, restaurant){
        if(!restaurant) {
          sendJsonResponse(res, 404, {
            "message": "restaurantid not found"
          });
          return;
        } else if (err) {
          sendJsonResponse(res, 404, err);
          return;
        } else {
          sendJsonResponse(res, 200, restaurant);
        };
      });
  } else {
    sendJsonResponse(res, 404, {
      "message": "No restaurantid in request"
    });
  }
};

module.exports.restaurantsUpdateOne = function (req, res) {
  console.log(req.body);
  sendJsonResponse(res, 200, {"status" : "success"});
};

module.exports.restaurantsDeleteOne = function (req, res) {
  console.log(req.body);
  sendJsonResponse(res, 200, {"status" : "success"});
};
