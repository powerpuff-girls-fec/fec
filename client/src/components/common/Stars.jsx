import React from 'react';
import PropTypes from 'prop-types';

import styled from 'styled-components';

const StarContainer = styled.div`
  height: 1em;
  font-size: 1.5rem;
  display: flex;
`;

const EmptyStar = styled.div`
  line-height: 1em;
`;

const FullStar = styled(EmptyStar)`
  position: relative;
  top: -1em;
  width: ${({ fill }) => {
    const out = Math.round((fill * 100) / 25) * 25;

    switch (out) {
      case 75:
        return 60;
      case 25:
        return 40;
      default:
        return out;
    }
  }}%;
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
