const handlers = require('./handlers');

// GET /api/reviews
module.exports.getReviews = (req, res) => {
  const id = req.params.product_id || 65631;
  const page = req.query.page || 1;
  const count = req.query.count || 2;
  const sort = req.query.sort || 'relevant';

  handlers.getReviews(id, page, sort, count)
    .then((result) => res.send(result.data))
    .catch((err) => res.send(`Error: ${err.message}`));
};

// GET /api/questions
module.exports.getQuestions = (req, res) => {
  handlers.getQuestions(65631)
    .then((result) => res.send(result.data))
    .catch((err) => res.send(`Error: ${err.message}`));
};

// GET /api/reviews/meta/:product_id
module.exports.getReviewsMeta = (req, res) => {
  handlers.getReviewsMeta(req.params.product_id)
    .then((result) => res.send(result.data))
    .catch((err) => console.log(`Error: ${err.message}`));
};

module.exports.putReviewHelpful = (req, res) => {
  handlers.markReviewHelpful(req.params.review_id)
    .then((result) => res.status(204).send(result.data))
    .catch((err) => console.log(`Error: ${err.message}`));
};

module.exports.getProductInfo = (req, res) => {
  handlers.getProductInfo(req.params.product_id)
    .then((result) => res.send(result.data))
    .catch((err) => console.log(`Error: ${err.message}`));
};

module.exports.getProductStyles = (req, res) => {
  handlers.getProductStyles(req.params.product_id)
    .then((result) => res.send(result.data))
    .catch((err) => console.log(`Error: ${err.message}`));
};
