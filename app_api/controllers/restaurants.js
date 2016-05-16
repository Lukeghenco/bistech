var mongoose = require('mongoose');
var Restaurant = mongoose.model('Restaurant');

var sendJsonResponse = function(res, status, content) {
  res.status(status);
  res.json(content);
};

var theEarth = (function(){
  var earthRadius = 6371; // km, miles is 3959
  var getDistanceFromRads = function(rads) {
    return parseFloat(rads * earthRadius);
  };
  var getRadsFromDistance = function(distance) {
    return parseFloat(distance / earthRadius);
  };
  return {
    getDistanceFromRads: getDistanceFromRads,
    getRadsFromDistance: getRadsFromDistance
  };
})();


module.exports.restaurantsListByDistance = function(req, res) {
  console.log(req.query);
  var lng = parseFloat(req.query.lng);
  var lat = parseFloat(req.query.lat);
  var point = {
    type: "Point",
    coordinates: [lng, lat]
  };
  var geoOptions = {
    spherical: true,
    maxDistance: theEarth.getRadsFromDistance(50),
    num: 10
  };
  Restaurant.geoNear(point, geoOptions, function(err, results, stats){
    console.log("The error is: " + err);
    console.log("The results are: " + results);
    console.log("The stats are: " + stats);
    var restaurants = [];
    results.forEach(function(doc){
      restaurants.push({
        distance: theEarth.getDistanceFromRads(doc.dis),
        name: doc.obj.name,
        address: doc.obj.address,
        rating: doc.obj.rating,
        facilities: doc.obj.facilities,
        _id: doc.obj._id
      });
    });
    sendJsonResponse(res, 200, restaurants);
  });
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
