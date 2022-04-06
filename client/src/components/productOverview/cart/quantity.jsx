import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const QuantityContainer = styled.div``;

export default function Quantity({ selectHandler, quantity }) {
  if (quantity[0] === -1) {
    return (
      <QuantityContainer>
        <select name="quantity" disabled>
          <option>-</option>
        </select>
      </QuantityContainer>
    );
  }
  return (
    <QuantityContainer>
      {/* eslint-disable-next-line no-restricted-globals */}
      <select name="quantity" onChange={() => { selectHandler(event); }}>
        {quantity.map((number, key) => <option value={number} key={key}>{number}</option>)}
      </select>
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
