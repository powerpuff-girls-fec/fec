import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Button = styled.button`
  height: 50px;
  width: 100%;
  text-align: center;

  transition-duration: 0.2s;
  &:hover {
    background-color: gray;
    color: white;
  }
`;

const DisabledButton = styled.button`
  height: 50px;
  width: 100%;
`;

export default function AddButton({ selectedSize, handleSubmit }) {
  if (selectedSize === '-') {
    return (
      <form>
        <DisabledButton type="submit" disabled>Add to Cart</DisabledButton>
      </form>
    );
  }
  return (
    <div>
      <form onSubmit={(event) => { handleSubmit(event); }}>
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
