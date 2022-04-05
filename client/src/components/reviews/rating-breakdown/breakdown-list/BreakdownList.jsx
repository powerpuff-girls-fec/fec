import React from 'react';
import PropTypes from 'prop-types';

import styled from 'styled-components';

import BreakdownBar from './BreakdownBar';

const ListContainer = styled.div`
  padding: 0.5em 0.75em 0.5em 0.75em;
`;

export default function BreakdownList({ ratings }) {
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

BreakdownList.propTypes = {
  ratings: PropTypes.shape({
    1: PropTypes.string,
    2: PropTypes.string,
    3: PropTypes.string,
    4: PropTypes.string,
    5: PropTypes.string,
    total: PropTypes.number.isRequired,
  }).isRequired,
};
