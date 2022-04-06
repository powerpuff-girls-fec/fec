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
app.get('/api/reviews/:product_id', routes.getReviews);

app.get('/api/reviews/meta/:product_id', routes.getReviewMeta);

app.get('/api/questions', routes.getQuestions);

app.listen(port);
console.log(`Listening at http://localhost:${port}`);
