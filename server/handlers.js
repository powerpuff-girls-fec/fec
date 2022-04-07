const path = require('path');
const axios = require('axios');

// Set the default Authorization header to the api key
axios.defaults.headers.common.Authorization = process.env.API_KEY || 'API_KEY_HERE';
axios.defaults.headers.common['content-type'] = 'application/json';

const apiPath = 'app-hrsei-api.herokuapp.com/api/fec2/rfp/';

module.exports = {
  getReviews: (id) => axios.get(`https://${path.join(apiPath, 'reviews')}`, { params: { product_id: id } }),
  getReviewsMeta: (id) => axios.get(`https://${path.join(apiPath, 'reviews/meta')}`, { params: { product_id: id } }),
  getProductInfo: (id) => axios.get(`https://${path.join(apiPath, `products/${id}`)}`),
  getProductStyles: (id) => axios.get(`https://${path.join(apiPath, `products/${id}/styles`)}`),
  getQuestions: (id) => axios.get(`https://${path.join(apiPath, 'qa/questions')}`, { params: { product_id: id } }),
  putHelpfulAnswer: (id) => axios.put(`https://${path.join(apiPath, `qa/answers/${id}/helpful`)}`, { params: { answer_id: id } }),
  putHelpfulQuestion: (id) => axios.put(`https://${path.join(apiPath, `qa/questions/${id}/helpful`)}`, { params: { question_id: id } }),
  putReportAnswer: (id) => axios.put(`https://${path.join(apiPath, `qa/answers/${id}/report`)}`, { params: { answer_id: id } }),
  postQuestion: (request) => axios.post(`https://${path.join(apiPath, 'qa/questions')}`, request),
};
