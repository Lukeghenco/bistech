/* GET home page */
module.exports.about = function(req, res){
  res.render('about', {
    title: 'About BisTech',
    content: 'BisTech exists so that you can find great places to eat near you. '
  });
};
