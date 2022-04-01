import React from 'react';
import PropTypes from 'prop-types';

import styled from 'styled-components';

const StarContainer = styled.div`
  font-size: 2rem;
  display: flex;
`;

const EmptyStar = styled.div`
  line-height: 1em;
`;

const FullStar = styled(EmptyStar)`
  position: relative;
  top: -1em;
  width: ${({ fill }) => Math.round((fill * 100) / 25) * 25}%;
  overflow: hidden;
`;

function Star({ fill }) {
  return (
    <div>
      <EmptyStar>☆</EmptyStar>
      <FullStar fill={fill}>★</FullStar>
    </div>
  );
}

export default function Stars({ stars }) {
  const starsArray = Array(5).fill(0);
  let starsRemaining = stars;

  for (let i = 0; starsRemaining > 0; i += 1) {
    starsArray[i] = Math.min(starsRemaining, 1);
    starsRemaining -= 1;
  }

  return (
    <StarContainer>
      {starsArray.map((fill, key) => <Star key={`star ${key}`} fill={fill} />)}
    </StarContainer>
  );
}

Stars.propTypes = {
  stars: PropTypes.number.isRequired,
};

Star.propTypes = {
  fill: PropTypes.number.isRequired,
};
