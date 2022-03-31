import React from 'react';

import styled from 'styled-components';

import BreakdownOverview from './BreakdownOverview';
import BreakdownList from './breakdown-list/BreakdownList';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 2em 0 2em;
`;

export default function RatingBreakdown() {
  return (
    <Container>
      <BreakdownOverview stars={(Math.random() * 5).toFixed(1)} percentage={87} />
      <BreakdownList />
    </Container>
  );
}
