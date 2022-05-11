const db = require('../app');

exports.fetchAllRestaurants = () => {
	console.log('in the model');
	return db.query(`SELECT * FROM restaurants`).then((result) => {
		console.log(result.rows);
	});
};
