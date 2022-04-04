const { getReviews } = require('./handlers');
const { getQuestions } = require('./handlers');

// GET /api/reviews
module.exports.getReviews = (req, res) => {
  getReviews(65631)
    .then((result) => res.send(result.data));
};

// GET /api/questions
module.exports.getQuestions = (req, res) => {
  getQuestions(65631)
    .then((result) => res.send(result.data));
};
