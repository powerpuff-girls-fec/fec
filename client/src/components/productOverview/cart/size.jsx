import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const SizeContainer = styled.div``;

export default function Size({ selectHandler, sizes }) {
  return (
    <SizeContainer>
      {/* eslint-disable-next-line no-restricted-globals */}
      <select name="sizes" onChange={() => { selectHandler(event); }}>
        <option>Select Size</option>
        {sizes.map((size, key) => <option value={key} key={key}>{size}</option>)}
      </select>
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
