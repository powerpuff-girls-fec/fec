import React from 'react';
import PropTypes from 'prop-types';

import styled from 'styled-components';

import BreakdownBar from './BreakdownBar';

const ListContainer = styled.div`
  padding: 0.5em 0.75em 0.5em 0.75em;
`;

export default function FactorList({ ratings }) {
  return (
    <ListContainer>
      {[5, 4, 3, 2, 1].map((stars) => (
        <BreakdownBar
          key={stars}
          stars={stars}
          percentage={((ratings[stars] || 0) / ratings.total) * 100}
        />
      ))}
    </ListContainer>
  );
}

FactorList.propTypes = {
  ratings: PropTypes.shape({
    1: PropTypes.number,
    2: PropTypes.number,
    3: PropTypes.number,
    4: PropTypes.number,
    5: PropTypes.number,
    total: PropTypes.number.isRequired,
  }).isRequired,
};
