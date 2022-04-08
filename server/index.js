require('dotenv').config();

const express = require('express');
const path = require('path');

const routes = require('./routes');

const app = express();

// Middleware
app.use(express.json());

// Access either env or default port
const port = process.env.PORT || 3000;

app.use(express.static(path.resolve(__dirname, '../client/dist')));

/* Add your routes here */
app.get('/api/reviews', routes.getReviews);
app.get('/api/reviews/meta/:product_id', routes.getReviewsMeta);
app.get('/api/products/:product_id', routes.getProductInfo);
app.get('/api/products/:product_id/styles', routes.getProductStyles);
app.get('/api/reviews/:product_id', routes.getReviews);
app.get('/api/questions/:product_id', routes.getQuestions);
app.put('/api/answers/:answer_id/helpful', routes.putHelpfulAnswer);
app.put('/api/questions/:question_id/helpful', routes.putHelpfulQuestion);
app.put('/api/answers/:answer_id/report', routes.putReportAnswer);
app.post('/api/questions/:product_id', routes.postQuestion);
app.post('/api/answers/:question_id', routes.postAnswer);
app.post('/api/cloudinary', routes.postCloudinary);

app.listen(port);
console.log(`Listening at http://localhost:${port}`);
