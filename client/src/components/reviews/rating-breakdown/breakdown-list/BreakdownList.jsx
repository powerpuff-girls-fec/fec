import React from 'react';

import styled from 'styled-components';

import BreakdownBar from './BreakdownBar';

const ListContainer = styled.div`
  padding: 0.5em 0.75em 0.5em 0.75em;
`;

export default function FactorList() {
  return (
    <ListContainer>
      {[5, 4, 3, 2, 1].map((stars) => (
        <BreakdownBar
          key={stars}
          stars={stars}
          percentage={Math.random() * 100}
        />
      ))}
    </ListContainer>
  );
}
