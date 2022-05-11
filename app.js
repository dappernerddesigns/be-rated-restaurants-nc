const express = require('express');
const app = express();
app.use(express.json());

const { getAllRestaurants } = require('./controllers/restaurant.controller');

app.get(`/api/`, (req, res) => {
	res.send({ msg: 'all ok' });
});

app.get(`/api/restaurants`, getAllRestaurants);
module.exports = app;
