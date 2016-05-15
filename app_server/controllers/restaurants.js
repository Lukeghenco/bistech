/* GET 'home' page */
module.exports.restaurantList = function(req, res){
  res.render('restaurants-list', {
    title: 'BisTech - Find restaurants near you!',
    pageHeader: {
      title: 'BisTech',
      strapline: 'Find restaurants near you!'
    },
    sidebar: "Are you looking for yummy eats near you. BisTech helps you find the food you are craving.",
    restaurants: [
      {
        name: 'Luna Grill',
        address: '2400 El Camino Real, Carlsbad, CA 93243',
        rating: 4,
        facilities: ['Gyros', 'Pistachio Baklava', 'Craft Beer'],
        distance: '4mi'
      },
      {
        name: "Panca's Peruvian Cusine",
        address: '234 Oceanside Blvd, Oceanside, CA 92045',
        rating: 3,
        facilities: ['Rotissere Chicken', 'Ceviche', 'Lomo Saltado'],
        distance: '3mi'
      }
    ]
  });
};


/* GET 'Restaurant Info' page */
module.exports.restaurantInfo = function(req, res){
  res.render('restaurant-info', {
    title: 'Luna Grill',
    pageHeader: { title: 'Luna Grill' },
    sidebar: {
      context: ' is in your area.',
      callToAction: 'Please leave a review if you love or hate it.'
    },
    location: {
      name: 'Luna Grill',
      address: '2345 El Camino Real, Carlsbad, CA 92045',
      rating: 4,
      facilities: ['Gyros', 'Pistacio Baklava', 'Craft Beer'],
      coords: {lat: 33.182176, lng: -117.31321},
      openingTimes: [
        {
          days: 'Monday - Friday',
          opening: '10:00am',
          closing: '9:00pm',
          closed: false
        },
        {
          days: 'Saturday',
          opening: '10:00am',
          closing: '10:00pm',
          closed: false
        },
        {
          days: 'Sunday',
          opening: '11:00am',
          closing: '9:00pm',
          closed: false
        }
      ],
      reviews: [
        {
          author: 'Luke Ghenco',
          rating: 5,
          timestamp: '14 May 2016',
          reviewText: 'What a great restaurant. The Gyros were delicious.'
        },
        {
          author: 'Summer Felcyn',
          rating: 4,
          timestamp: '10 May 2016',
          reviewText: 'Great food! Everything tasted fresh, but I am not sure how I feel about country music in a Greek restaurant.'
        }
      ]
    }
  });
};


/* GET 'Add Review' page */
module.exports.addReview = function(req, res){
  res.render('restaurant-review-form', {
    title: 'Review Luna Grill on BisTech',
    pageHeader: { title: 'Review Luna Grill'} 
  });
};
