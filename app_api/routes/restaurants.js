var express = require('express');
var router = express.Router();
var ctrlRestaurants = require('../controllers/restaurants');
var ctrlReviews = require('../controllers/reviews');


// restaurants
router.get('/restaurants', ctrlRestaurants.restaurantsListByDistance);
router.post('/restaurants', ctrlRestaurants.restaurantsCreate);
router.get('/restaurants/:restaurantid', ctrlRestaurants.restaurantsReadOne);
router.put('/restaurants/:restaurantid', ctrlRestaurants.restaurantsUpdateOne);
router.delete('/restaurants/:restaurantid', ctrlRestaurants.restaurantsDeleteOne);


// reviews
router.post('/restaurants/:restaurantid/reviews', ctrlReviews.reviewsCreate);
router.get('/restaurants/:restaurantid/reviews/:reviewid', ctrlReviews.reviewsReadOne);
router.put('/restaurants/:restaurantid/reviews/:reviewid', ctrlReviews.reviewsUpdateOne);
router.delete('/restaurants/:restaurantid/reviews/:reviewid', ctrlReviews.reviewsDeleteOne);


module.exports = router;
