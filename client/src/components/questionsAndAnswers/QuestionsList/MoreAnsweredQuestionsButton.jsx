import React from 'react';
import PropTypes from 'prop-types';

export default function MoreAnsweredQuestionsButton({ setRenderLength }) {
  return (
    <button type="button" onClick={() => setRenderLength((state) => state + 2)}>MORE ANSWERED QUESTIONS</button>
  );
}

MoreAnsweredQuestionsButton.propTypes = {
  setRenderLength: PropTypes.func.isRequired,
};
