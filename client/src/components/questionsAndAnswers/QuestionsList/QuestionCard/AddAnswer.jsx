import React from 'react';
import PropTypes from 'prop-types';

export default function AddAnswer({ openModal }) {
  return (
    <button type="button" onClick={openModal}>Add Answer</button>
  );
}

AddAnswer.propTypes = {
  openModal: PropTypes.func.isRequired,
};
