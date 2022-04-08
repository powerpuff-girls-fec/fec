import React from 'react';
import styled from 'styled-components';

import ProductOverview from './productOverview/productOverview';
import ViewQuestionsAndAnswers from './questionsAndAnswers/ViewQuestionsAndAnswers';
import Reviews from './reviews/Reviews';

const Container = styled.div`
  display: grid;
  grid-template-rows: 1fr 1fr 1fr;
`;

export default function App() {
  return (
    <Container>
      <ProductOverview productID={65631} />
      <ViewQuestionsAndAnswers />
      <div id="reviews">
        <Reviews productId={65631} />
      </div>
    </Container>
  );
}
