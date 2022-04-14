import React from 'react';
import styled from 'styled-components';

import Banner from './banner';
import ProductOverview from './productOverview/productOverview';
import ViewQuestionsAndAnswers from './questionsAndAnswers/ViewQuestionsAndAnswers';
import Reviews from './reviews/Reviews';

const Container = styled.div`
  font-family: 'Nunito Sans', sans-serif;
  color: #161316;
  display: flex;
  flex-direction: column;
`;

export default function App() {
  return (
    <Container data-testid="App">
      <Banner />
      <ProductOverview productID={65631} />
      <ViewQuestionsAndAnswers productId={65631} />
      <div id="reviews">
        <Reviews productId={65631} />
      </div>
    </Container>
  );
}
