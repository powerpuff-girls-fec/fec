const handlers = require('./handlers');

// GET /api/reviews
module.exports.getReviews = (req, res) => {
  handlers.getReviews(65631)
    .then((result) => res.send(result.data));
};

// GET /api/questions
module.exports.getQuestions = (req, res) => {
  handlers.getQuestions(65631)
    .then((result) => res.send(result.data));
};
