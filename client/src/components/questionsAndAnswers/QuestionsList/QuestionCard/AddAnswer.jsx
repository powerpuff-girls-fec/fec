import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Button = styled.button`
  background: none!important;
  border: none;
  padding: 0!important;
  text-decoration: underline;
  cursor: pointer;
  font-family: inherit;
  font-size: inherit;
  color: inherit;
`;

export default function AddAnswer({ openModal }) {
  return (
    <Button
      type="button"
      onClick={openModal}
    >
      Add Answer
    </Button>
  );
}

AddAnswer.propTypes = {
  openModal: PropTypes.func.isRequired,
};
