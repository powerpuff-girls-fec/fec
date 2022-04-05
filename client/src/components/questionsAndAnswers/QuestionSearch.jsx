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
  setQuestionData: PropTypes.func,
  originalData: PropTypes.arrayOf(PropTypes.shape({
    answers: PropTypes.objectOf(PropTypes.shape({
      answerer_name: PropTypes.string,
      body: PropTypes.string,
      date: PropTypes.string,
      helpfulness: PropTypes.number,
      id: PropTypes.number,
      photos: PropTypes.arrayOf(PropTypes.string),
    })),
    asker_name: PropTypes.string,
    question_body: PropTypes.string,
    question_date: PropTypes.string,
    question_helpfulness: PropTypes.number,
    question_id: PropTypes.number,
    reported: PropTypes.bool,
  })),
};

QuestionSearch.defaultProps = {
  setQuestionData: () => {},
  originalData: [{
    answers: {
      5361400: {
        answerer_name: '',
        body: '',
        date: '',
        helpfulness: 0,
        id: 5361400,
        photos: [],
      },
    },
    asker_name: '',
    question_body: '',
    question_date: '',
    question_helpfulness: 0,
    question_id: 573868,
    reported: false,
  }],
};
