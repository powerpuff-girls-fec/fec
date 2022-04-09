const handlers = require('./handlers');

// GET /api/reviews
module.exports.getReviews = (req, res) => {
  req.params.product_id = req.params.product_id || 65631;

  handlers.getReviews(req.params.product_id)
    .then((result) => res.send(result.data))
    .catch((err) => res.send(`Error: ${err.message}`));
};

// GET /api/questions
module.exports.getQuestions = (req, res) => {
  handlers.getQuestions(req.params.product_id)
    .then((result) => res.send(result.data))
    .catch((err) => res.send(`Error: ${err.message}`));
};

// GET /api/reviews/meta/:product_id
module.exports.getReviewsMeta = (req, res) => {
  handlers.getReviewsMeta(req.params.product_id)
    .then((result) => {
      // console.log(result.data);
      res.send(result.data);
    })
    .catch((err) => console.log(err.message));
};

module.exports.getProductInfo = (req, res) => {
  handlers.getProductInfo(req.params.product_id)
    .then((result) => {
      // console.log(result.data);
      res.send(result.data);
    })
    .catch((err) => console.log(err.message));
};

module.exports.getProductStyles = (req, res) => {
  handlers.getProductStyles(req.params.product_id)
    .then((result) => {
      // console.log(result.data);
      res.send(result.data);
    })
    .catch((err) => console.log(err.message));
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
};
