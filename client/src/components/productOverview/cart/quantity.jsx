import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const QuantityContainer = styled.select`
  height: 50px;
  width: 100%;
  text-align: center;

  transition-duration: 0.4s;
  &:hover {
    background-color: #f1f1f1;
  }
`;

export default function Quantity({ selectHandler, quantity }) {
  if (quantity[0] === -1) {
    return (
      <QuantityContainer data-testid="Quantity" name="quantity" disabled>
        <option>-</option>
      </QuantityContainer>
    );
  }
  return (
    <QuantityContainer data-testid="Quantity" name="quantity" onChange={(event) => { selectHandler(event); }}>
      {quantity.map((number, key) => <option value={number} key={key}>{number}</option>)}
    </QuantityContainer>
  );
}

Quantity.propTypes = {
  quantity: PropTypes.arrayOf(PropTypes.number),
  selectHandler: PropTypes.func,
};

Quantity.defaultProps = {
  quantity: [-1],
  selectHandler: () => {},
};
