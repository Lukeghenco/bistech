var express = require('express');
var router = express.Router();
var ctrlRestaurants = require('../controllers/restaurants');
var ctrlOthers = require('../controllers/others');

/* Restaurants Pages */
router.get('/', ctrlRestaurants.restaurantList);
router.get('/restaurant', ctrlRestaurants.restaurantInfo);
router.get('/restaurant/review/new', ctrlRestaurants.addReview);


/* Other Pages */
router.get('/about', ctrlOthers.about);


module.exports = router;
