import React from 'react';
import PropTypes from 'prop-types';

import styled from 'styled-components';

import Factor from './Factor';

const Container = styled.div`
  padding: 0.5em 0.75em 0.5em 0.75em;
  display: flex;
  flex-direction: column;
`;

export default function FactorList({ factors }) {
  return (
    <Container>
      {(factors.length > 0) ? factors.map(({ id, title, rating }) => (
        <Factor
          key={id}
          title={title}
          rating={rating}
        />
      )) : null}
    </Container>
  );
}

FactorList.propTypes = {
  factors: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number,
    title: PropTypes.string,
    value: PropTypes.number,
  })),
};

FactorList.defaultProps = {
  factors: [],
};
