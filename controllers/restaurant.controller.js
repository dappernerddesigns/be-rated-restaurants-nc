const { fetchAllRestaurants } = require('../models/restaurant.model');

exports.getAllRestaurants = () => {
	console.log('in the controller');
	fetchAllRestaurants().then((result) => {
		res.status(200).send({ restaurants: result });
	});
};
