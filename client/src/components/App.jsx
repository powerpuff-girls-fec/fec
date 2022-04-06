import React from 'react';
import ProductOverview from './productOverview/productOverview.jsx'
import ViewQuestionsAndAnswers from './questionsAndAnswers/ViewQuestionsAndAnswers';
import Reviews from './reviews/Reviews';

export default function App() {
  return (
    <>
      <ProductOverview productID={65631} />
      <ViewQuestionsAndAnswers />
      <Reviews productId={65631} />
    </>
  );
}
