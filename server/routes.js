const { getReviews } = require('./handlers');

// GET /api/reviews
module.exports.getReviews = (req, res) => {
  getReviews(65631)
    .then((result) => res.send(result.data));
};

module.exports.getReviewsMeta = (req, res) => {
  getReviewsMeta(65631)
    .then((result) => res.send(result.data));
};
