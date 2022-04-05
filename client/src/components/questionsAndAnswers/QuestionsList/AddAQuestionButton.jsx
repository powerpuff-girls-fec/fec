import React from 'react';
import PropTypes from 'prop-types';

export default function AddAQuestionButton({ openModal }) {
  return (
    <button onClick={openModal} type="button">ADD A QUESTION</button>
  );
}

AddAQuestionButton.propTypes = {
  openModal: PropTypes.func.isRequired,
};
