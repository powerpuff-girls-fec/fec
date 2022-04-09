const path = require('path');
const axios = require('axios');

// Set the default Authorization header to the api key
axios.defaults.headers.common.Authorization = process.env.API_KEY || 'API_KEY_HERE';
axios.defaults.headers.common['content-type'] = 'application/json';

const apiPath = 'app-hrsei-api.herokuapp.com/api/fec2/rfp/';

module.exports = {
  getReviews: (id, page = 1, sort = 'relevant', count = 2) => axios.get(
    `https://${path.join(apiPath, 'reviews')}`,
    {
      params: {
        product_id: id,
        page,
        sort,
        count,
      },
    },
  ),
  reportReview: (id) => axios.put(`https://${path.join(apiPath, `reviews/${id}/report`)}`),
  markReviewHelpful: (id) => axios.put(`https://${path.join(apiPath, `reviews/${id}/helpful`)}`),
  postReview: (body) => axios.post(`https://${path.join(apiPath, 'reviews')}`, body),
  getReviewsMeta: (id) => axios.get(`https://${path.join(apiPath, 'reviews/meta')}`, { params: { product_id: id } }),
  getProductInfo: (id) => axios.get(`https://${path.join(apiPath, `products/${id}`)}`),
  getProductStyles: (id) => axios.get(`https://${path.join(apiPath, `products/${id}/styles`)}`),
  getQuestions: (id) => axios.get(`https://${path.join(apiPath, 'qa/questions')}`, { params: { product_id: id } }),
};
