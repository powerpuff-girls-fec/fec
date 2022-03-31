import React from 'react';

import styled from 'styled-components';

const Container = styled.div`
`;

const OverallRatings = styled.div`
  font-size: 3em;
  padding: 0.5em 0 0.5em 0.2em;
`;

const PercentRecommendations = styled.div`

`;

export default function BreakdownOverview() {
  return (
    <Container>
      RATINGS & REVIEWS
      <OverallRatings> 3.5 </OverallRatings>
      <PercentRecommendations>{`${100}% of reviews recommend this product`}</PercentRecommendations>
    </Container>
  );
}
