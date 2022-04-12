import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const SizeContainer = styled.select`
  height: 50px;
  width: 100%;
  text-align: center;

  transition-duration: 0.4s;
  &:hover {
    background-color: #f1f1f1;
  }
`;

export default function Size({ selectHandler, sizes }) {
  return (
    <SizeContainer data-testid="Size" name="sizes" onChange={(event) => { selectHandler(event); }}>
      <option>Select Size</option>
      {sizes.map((size, key) => <option value={key} key={key}>{size}</option>)}
    </SizeContainer>
  );
}

Size.propTypes = {
  sizes: PropTypes.arrayOf(PropTypes.string),
  selectHandler: PropTypes.func,
};

Size.defaultProps = {
  sizes: [],
  selectHandler: () => {},
};
