import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Button = styled.button``;

export default function AddButton({ selectedSize, handleSubmit }) {
  if (selectedSize === '-') {
    return (
      <form>
        <button type="submit" disabled>Add to Cart</button>
      </form>
    );
  }
  return (
    <div>
      {/* eslint-disable-next-line no-restricted-globals */}
      <form onSubmit={() => { handleSubmit(event); }}>
        <Button type="submit">Add to Cart</Button>
      </form>
    </div>
  );
}

AddButton.propTypes = {
  selectedSize: PropTypes.string,
  handleSubmit: PropTypes.func,
};

AddButton.defaultProps = {
  selectedSize: '-',
  handleSubmit: () => {},
};
