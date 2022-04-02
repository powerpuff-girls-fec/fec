import React from 'react';
import PropTypes from 'prop-types';

import AnswerCard from './AnswerCard/AnswerCard';

export default function AnswersList({ answers }) {
  return (
    <div>
      A:
      {Object.entries(answers).map(([key]) => (
        <AnswerCard key={answers[key].id} answer={answers[key]} />
      ))}
    </div>
  );
}

AnswersList.propTypes = {
  answers: PropTypes.objectOf(PropTypes.shape({
    answerer_name: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    helpfulness: PropTypes.number.isRequired,
    id: PropTypes.number.isRequired,
    photos: PropTypes.arrayOf(PropTypes.string.isRequired),
  })),
};

AnswersList.defaultProps = {
  answers: {},
};
