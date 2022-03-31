import React from 'react';

import styled from 'styled-components';

import Factor from './Factor';

const ListContainer = styled.div`
  padding: 0.1em 0 0.1em 0;
`;

export default function FactorList() {
  return (
    <ListContainer>
      {[1, 2, 3, 4, 5].map((stars) => <Factor stars={stars} percentage={50} />)}
    </ListContainer>
  );
}
