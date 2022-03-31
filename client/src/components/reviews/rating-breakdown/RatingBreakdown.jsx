import React from 'react';

import styled from 'styled-components';

import BreakdownOverview from './BreakdownOverview';
import FactorList from './factor-list/FactorList';

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

export default function RatingBreakdown() {
  return (
    <Container>
      <BreakdownOverview />
      <FactorList />
    </Container>
  );
}
