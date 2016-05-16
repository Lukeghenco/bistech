var express = require('express');
var router = express.Router();
var ctrlRestaurants = require('../controllers/restaurants');
var ctrlReviews = require('../controllers/reviews');


// restaurants

// READ ALL
router.get('/restaurants', ctrlRestaurants.restaurantsListByDistance);
// CREATE
router.post('/restaurants', ctrlRestaurants.restaurantsCreate);
// READ
router.get('/restaurants/:restaurantid', ctrlRestaurants.restaurantsReadOne);
// UPDATE
router.put('/restaurants/:restaurantid', ctrlRestaurants.restaurantsUpdateOne);
// DELETE
router.delete('/restaurants/:restaurantid', ctrlRestaurants.restaurantsDeleteOne);



// reviews

// CREATE
router.post('/restaurants/:restaurantid/reviews', ctrlReviews.reviewsCreate);
// READ
router.get('/restaurants/:restaurantid/reviews/:reviewid', ctrlReviews.reviewsReadOne);
// UPDATE
router.put('/restaurants/:restaurantid/reviews/:reviewid', ctrlReviews.reviewsUpdateOne);
// DELETE
router.delete('/restaurants/:restaurantid/reviews/:reviewid', ctrlReviews.reviewsDeleteOne);


module.exports = router;
