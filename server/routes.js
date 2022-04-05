const handlers = require('./handlers');

// GET /api/reviews
module.exports.getReviews = (req, res) => {
  handlers.getReviews(65631)
    .then((result) => res.send(result.data))
    .catch((err) => res.send(`Error: ${err.message}`));
};

// GET /api/reviews/meta
module.exports.getReviewMeta = (req, res) => {
  handlers.getReviewMeta(req.params.product_id)
    .then((result) => res.send(result.data))
    .catch((err) => res.send(`Error: ${err.message}`));
};
