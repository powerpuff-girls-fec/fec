import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Button = styled.button`
  color: inherit;
  border-color: #525252;
  border-width: thin;
  padding: 0.5em;
  margin: 0.5em;
  font-family: "HelveticaNeue", Arial;
  font-size: 14px;
  font-weight: bold;
  background: white;

  &:hover {
    cursor: pointer;
    filter: brightness(0.75);
  }
`;

export default function AddAQuestionButton({ openModal }) {
  return (
    <Button onClick={openModal} type="button">ADD A QUESTION</Button>
  );
}

AddAQuestionButton.propTypes = {
  openModal: PropTypes.func.isRequired,
};
