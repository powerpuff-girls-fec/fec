import React from 'react';
import PropTypes from 'prop-types';

import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;

  &:hover {
    background-color: #dbdbdb;
  }
`;

const Text = styled.div`
  display: flex;
  justify-content: right;
  padding-right: 0.5em;
`;

const BarContainer = styled.div`
  position: relative;
  display: flex;
  flex-grow: 1;
  height: 1em;
  margin: 0.5em 0 0.5em 0;
  border-radius: 10px;
  overflow: hidden;
  grid-column: 2;
`;

const Bar = styled.div`
  position: absolute;
  background-color: #EBEBEB;
  width: 100%;
  height: 100%;
`;

const PercentageBar = styled(Bar)`
  background-color: hsl(141, 100%, 32%);
  width: ${({ percentage }) => percentage}%;
`;

export default function BreakdownBar({ stars, percentage }) {
  return (
    <Container>
      <Text>
        {`${stars} stars`}
      </Text>
      <BarContainer>
        <Bar />
        <PercentageBar percentage={percentage} />
      </BarContainer>
    </Container>
  );
}

BreakdownBar.propTypes = {
  stars: PropTypes.number.isRequired,
  percentage: PropTypes.number.isRequired,
};
