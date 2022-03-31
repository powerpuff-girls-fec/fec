import React from 'react';

import styled from 'styled-components';

import RatingBreakdown from './rating-breakdown/RatingBreakdown';

const Container = styled.div`
  width: 75%;
  height: 10em;
  display: grid;
  grid-template-columns: 1fr 3fr;
  margin: auto;
`;

export default function Reviews() {
  return (
    <Container>
      <RatingBreakdown />
    </Container>
  );
}
