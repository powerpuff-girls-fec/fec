import React from 'react';
import PropTypes from 'prop-types';

export default function HelpfulQuestionButton({ questionHelpfulness }) {
  return (
    <button type="button">
      helpful? Yes (
      {questionHelpfulness}
      )
    </button>
  );
}

HelpfulQuestionButton.propTypes = {
  questionHelpfulness: PropTypes.number.isRequired,
};
