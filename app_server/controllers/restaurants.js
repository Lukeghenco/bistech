/* GET 'home' page */
module.exports.restaurantList = function(req, res){
  res.render('restaurants-list', { title: 'Home' });
};


/* GET 'Restaurant Info' page */
module.exports.restaurantInfo = function(req, res){
  res.render('restaurant-info', { title: 'Restaurant Info' });
};


/* GET 'Add Review' page */
module.exports.addReview = function(req, res){
  res.render('restaurant-review-form', { title: 'Add Review' });
};
