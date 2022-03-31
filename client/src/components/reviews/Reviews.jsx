import React from 'react';

import styled from 'styled-components';

import RatingBreakdown from './rating-breakdown/RatingBreakdown'

const Container = styled.div`
  width: 100%;
  height: 10em;
  display: grid;
  grid-template-columns: 1fr 3fr;
`;

export default function Reviews() {
  return (
    <Container>
      <RatingBreakdown />
    </Container>
  );
}
