import React from 'react';
import ViewQuestionsAndAnswers from './questionsAndAnswers/ViewQuestionsAndAnswers';

import Reviews from './reviews/Reviews';

export default function App() {
  return (
    <>
      <Reviews productId={65631} />
      <ViewQuestionsAndAnswers />
    </>
  );
}
