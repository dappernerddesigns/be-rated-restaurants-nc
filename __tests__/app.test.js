const request = require('supertest');
const app = require('../app.js');
const db = require('../db/index');

afterAll(() => {
	db.end;
});
describe('GET/api', () => {
	test('GET responds with all ok msg', () => {
		return request(app)
			.get('/api/')
			.expect(200)
			.then((res) => {
				expect(res.body).toEqual({ msg: 'all ok' });
			});
	});
});
describe('GET /api/restaurants', () => {
	test('200: should return an array of restaurant objects', () => {
		return request(app)
			.get(`/api/restaurants`)
			.expect(200)
			.then((response) => {
				expect(response.body).toHaveLength(8);
				response.body.forEach((restaurant) => {
					expect.objectContaining({
						restaurant_id: expect.any(Number),
						restaurant_name: expect.any(String),
						area_id: expect.any(Number),
						cuisine: expect.any(String),
						website: expect.any(String),
					});
				});
			});
	});
});
