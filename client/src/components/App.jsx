import React from 'react';
import styled from 'styled-components';

import Banner from './banner';
import ProductOverview from './productOverview/productOverview';
import ViewQuestionsAndAnswers from './questionsAndAnswers/ViewQuestionsAndAnswers';
import Reviews from './reviews/Reviews';

const Container = styled.div`
  color: #525252;
  display: flex;
  flex-direction: column;
`;

export default function App() {
  return (
    <Container>
      <Banner />
      <ProductOverview productID={65631} />
      <ViewQuestionsAndAnswers productId={65631} />
      <div id="reviews">
        <Reviews productId={65631} />
      </div>
    </Container>
  );
}
