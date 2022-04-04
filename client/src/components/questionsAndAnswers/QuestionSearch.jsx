import React from 'react';
import PropTypes from 'prop-types';

export default function QuestionSearch({ setQuestionData, originalData }) {
  return (
    <input
      placeholder="Have a question? Search for Answers"
      onChange={(e) => {
        e.preventDefault();
        if (e.target.value.length >= 3) {
          setQuestionData(
            (data) => (data.filter(
              (obj) => obj.question_body.toLowerCase().includes(e.target.value.toLowerCase()),
            )),
          );
        }
        if (e.target.value.length < 3) {
          setQuestionData(originalData);
        }
      }}
    />
  );
}

QuestionSearch.propTypes = {
  setQuestionData: PropTypes.func.isRequired,
  originalData: PropTypes.arrayOf(PropTypes.shape({
    answers: PropTypes.objectOf(PropTypes.shape({
      answerer_name: PropTypes.string.isRequired,
      body: PropTypes.string.isRequired,
      date: PropTypes.string.isRequired,
      helpfulness: PropTypes.number.isRequired,
      id: PropTypes.number.isRequired,
      photos: PropTypes.arrayOf(PropTypes.string.isRequired),
    })),
    asker_name: PropTypes.string.isRequired,
    question_body: PropTypes.string.isRequired,
    question_date: PropTypes.string.isRequired,
    question_helpfulness: PropTypes.number.isRequired,
    question_id: PropTypes.number.isRequired,
    reported: PropTypes.bool.isRequired,
  })).isRequired,
};
