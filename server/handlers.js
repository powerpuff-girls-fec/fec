const path = require('path');
const axios = require('axios');

// Set the default Authorization header to the api key
axios.defaults.headers.common.Authorization = process.env.API_KEY || 'API_KEY_HERE';
axios.defaults.headers.common['content-type'] = 'application/json';

const apiPath = 'app-hrsei-api.herokuapp.com/api/fec2/rfp/';

module.exports = {
  // GET /api/reviews
  getReviews: (id) => axios.get(`https://${path.join(apiPath, 'reviews')}`, { params: { product_id: id } }),
};
