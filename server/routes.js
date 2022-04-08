const handlers = require('./handlers');

// GET /api/reviews
module.exports.getReviews = (req, res) => {
  handlers.getReviews(65631)
    .then((result) => res.send(result.data))
    .catch((err) => res.send(`Error: ${err.message}`));
};

// GET /api/questions
module.exports.getQuestions = (req, res) => {
  handlers.getQuestions(65631)
    .then((result) => res.send(result.data));
};

// GET /api/reviews/meta
module.exports.getReviewsMeta = (req, res) => {
  handlers.getReviewsMeta(req.params.product_id)
    .then((result) => {
      res.send(result.data);
    })
    .catch((err) => console.log(err.message));
};

module.exports.getProductInfo = (req, res) => {
  handlers.getProductInfo(req.params.product_id)
    .then((result) => {
      res.send(result.data);
    })
    .catch((err) => console.log(err.message));
};

module.exports.getProductStyles = (req, res) => {
  handlers.getProductStyles(req.params.product_id)
    .then((result) => {
      res.send(result.data);
    })
    .catch((err) => console.log(err.message));
};

module.exports.postCart = (req, res) => {
  handlers.postCart({
    sku_id: Number(req.body.sku_id),
  })
    .then((result) => {
      res.send(result.data);
    })
    .catch((err) => res.status(500).send(err));
};
