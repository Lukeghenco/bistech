var mongoose = require('mongoose');
var Restaurant = mongoose.model('Restaurant');

var sendJsonResponse = function(res, status, content) {
  res.status(status);
  res.json(content);
};

module.exports.reviewsCreate = function (req, res) {
  console.log(req.body);
  sendJsonResponse(res, 200, {"status" : "success"});
};

module.exports.reviewsReadOne = function (req, res) {
  if (req.params && req.params.restaurantid && req.params.reviewid) {
    Restaurant
      .findById(req.params.restaurantid)
      .select('name reviews')
      .exec(
        function(err, restaurant) {
          var response, review;
          if (!restaurant) {
            sendJsonResponse(res, 404, {
              "message": "restaurantid not found"
            });
            return;
          } else if (err) {
            sendJsonResponse(res, 400, err);
            return;
          }
          if (restaurant.reviews && restaurant.reviews.length > 0) {
            console.log(req.params.reviewid);
            var review = restaurant.reviews.id(req.params.reviewid);
            console.log(review);
            if (!review) {
              sendJsonResponse(res, 404, {
                "message": "reviewid not found"
              });
            } else {
              response = {
                restaurant : {
                  name : restaurant.name,
                  id : req.params.restaurantid
                },
                review : review
              };
              sendJsonResponse(res, 200, response);
            }
          } else {
            sendJsonResponse(res, 404, {
              "message": "No reviews found"
            });
          }
        }
      );
  } else {
    sendJsonResponse(res, 404, {
      "message": "Not found, locationid and reviewid are both required"
    });
  }
};

module.exports.reviewsUpdateOne = function (req, res) {
  console.log(req.body);
  sendJsonResponse(res, 200, {"status" : "success"});
};

module.exports.reviewsDeleteOne = function (req, res) {
  console.log(req.body);
  sendJsonResponse(res, 200, {"status" : "success"});
};
