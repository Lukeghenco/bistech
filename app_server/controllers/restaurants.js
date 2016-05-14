/* GET 'home' page */
module.exports.restaurantList = function(req, res){
  res.render('index', { title: 'Home' });
};


/* GET 'Restaurant Info' page */
module.exports.restaurantInfo = function(req, res){
  res.render('index', { title: 'Restaurant Info' });
};


/* GET 'Add Review' page */
module.exports.addReview = function(req, res){
  res.render('index', { title: 'Add Review' });
};
