import React from 'react';
import PropTypes from 'prop-types';

import styled from 'styled-components';

import characteristics from './characteristics.json';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0.5em 0 0.5em 0;
`;

const Title = styled.div``;

const Bar = styled.div`
  background-color: #e6e6e6;
  height: 0.5em;
  margin: 0.5em 0 0.5em 0;
`;

const Arrow = styled.div`
  width: 0;
  height: 0;
  position: relative;
  left: ${({ pos }) => (pos / 5) * 100}%;
  border-left: 0.5em solid transparent;
  border-right: 0.5em solid transparent;
  border-top: 0.75em solid #525252;
  transform: translateX(-50%);
`;

const UnderText = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  font-size: 0.85em;
`;

export default function Factor({ rating, title }) {
  return (
    <Container>
      <Title>{title}</Title>
      <Bar>
        <Arrow pos={rating} />
      </Bar>
      <UnderText>
        {
          characteristics[title].map((text) => (
            <div key={text}>{text}</div>
          ))
        }
      </UnderText>
    </Container>
  );
}

Factor.propTypes = {
  title: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired,
};
