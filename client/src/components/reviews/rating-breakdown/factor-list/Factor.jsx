import React from 'react';
import PropTypes from 'prop-types';

import styled from 'styled-components';

const FactorContainer = styled.div`
  display: flex;
  flex-direction: row;
`;

const BarContainer = styled.div`
  position: relative;
  display: flex;
  flex-grow: 1;
  margin: 0.1em 0 0.1em 0.5em;
`;

const Bar = styled.div`
  position: absolute;
  background-color: grey;
  width: 100%;
  height: 100%;
`;

const PercentageBar = styled(Bar)`
  background-color: green;
  width: ${({ percentage }) => percentage}%;
`;

export default function Factor({ stars, percentage }) {
  return (
    <FactorContainer>
      {`${stars} star${(stars === 1) ? '' : 's'}`}
      <BarContainer>
        <Bar />
        <PercentageBar percentage={percentage} />
      </BarContainer>
    </FactorContainer>
  );
}

Factor.propTypes = {
  stars: PropTypes.number.isRequired,
  percentage: PropTypes.number.isRequired,
};
