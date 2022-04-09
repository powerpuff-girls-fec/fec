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
  handlers.getQuestions(req.params.product_id)
    .then((result) => res.send(result.data))
    .catch((err) => res.send(`Error: ${err.message}`));
};

// GET /api/reviews/meta
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

module.exports.reportReview = (req, res) => {
  handlers.reportReview(req.params.review_id)
    .then((result) => res.status(204).send(result.data))
    .catch((err) => console.log(`Error: ${err.message}`));
};

module.exports.postReview = (req, res) => {
  handlers.postReview(req.body)
    .then((result) => res.status(201).send(result.data))
    .catch((err) => res.status(500).send(`Error: ${err.message}`));
};

module.exports.getProductInfo = (req, res) => {
  handlers.getProductInfo(req.params.product_id)
<<<<<<< HEAD
    .then((result) => {
      res.send(result.data);
    })
    .catch((err) => console.log(err.message));
=======
    .then((result) => res.send(result.data))
    .catch((err) => console.log(`Error: ${err.message}`));
>>>>>>> main
};

module.exports.getProductStyles = (req, res) => {
  handlers.getProductStyles(req.params.product_id)
<<<<<<< HEAD
    .then((result) => {
      res.send(result.data);
    })
    .catch((err) => console.log(err.message));
=======
    .then((result) => res.send(result.data))
    .catch((err) => console.log(`Error: ${err.message}`));
};

module.exports.putHelpfulAnswer = (req, res) => {
  handlers.putHelpfulAnswer(req.params.answer_id)
    .then((result) => res.send(result.data))
    .catch((err) => res.send(`Error: ${err.message}`));
};

module.exports.putHelpfulQuestion = (req, res) => {
  handlers.putHelpfulQuestion(req.params.question_id)
    .then((result) => res.send(result.data))
    .catch((err) => res.send(`Error: ${err.message}`));
};

module.exports.putReportAnswer = (req, res) => {
  handlers.putReportAnswer(req.params.answer_id)
    .then((result) => res.send(result.data))
    .catch((err) => res.send(`Error: ${err.message}`));
};

module.exports.postQuestion = (req, res) => {
  handlers.postQuestion({
    body: req.body.question,
    name: req.body.nickname,
    email: req.body.email,
    product_id: Number(req.params.product_id),
  })
    .then((result) => res.send(result.data))
    .catch((err) => res.send(`Error: ${err.message}`));
};

module.exports.postAnswer = (req, res) => {
  handlers.postAnswer({
    body: req.body.answer,
    name: req.body.nickname,
    email: req.body.email,
    photos: req.body.photos,
    question_id: Number(req.params.question_id),
  })
    .then((result) => res.send(result.data))
    .catch((err) => res.send(`Error: ${err.message}`));
};

module.exports.postCloudinary = (req, res) => {
  handlers.postCloudinary(req.body.imagedata, (err, response) => {
    if (err) {
      console.log(`Cloudinary post errror: ${err}`);
      res.send(500);
    }
    res.send(response);
  });
>>>>>>> main
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
