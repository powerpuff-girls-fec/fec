import React from 'react';
import PropTypes from 'prop-types';

export default function HelpfulAnswerButton({ helpfulness }) {
  return (
    <button type="button">
      Helpful? Yes(
      {helpfulness}
      )
    </button>
  );
}

HelpfulAnswerButton.propTypes = {
  helpfulness: PropTypes.number.isRequired,
};
