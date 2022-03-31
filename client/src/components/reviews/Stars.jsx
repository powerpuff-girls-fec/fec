import React from 'react';
import PropTypes from 'prop-types';

import styled from 'styled-components';

const StarContainer = styled.div`
  position: relative;
  font-size: 2rem;
`;

const EmptyStars = styled.div`
  position: absolute;
  line-height: 1em;
  display: inline-block;
  width: fit-content;
  height: fit-content;
`;

const FullStars = styled(EmptyStars)`
  position: relative;
  top: -1em;
  width: ${({ stars }) => (Math.round(stars / 5 / 0.05) * 0.05) * 100}%;
  overflow: hidden;
`;

export default function Stars({ stars }) {
  return (
    <StarContainer>
      <EmptyStars>
        ☆☆☆☆☆
        <FullStars stars={stars}>★★★★★</FullStars>
      </EmptyStars>
    </StarContainer>
  );
}

Stars.propTypes = {
  stars: PropTypes.number.isRequired,
};
