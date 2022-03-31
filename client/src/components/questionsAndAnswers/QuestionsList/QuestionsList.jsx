import React from 'react';
import PropTypes from 'prop-types';

import QuestionCard from './QuestionCard/QuestionCard';
import AddAQuestionButton from './AddAQuestionButton';
import MoreAnsweredQuestionsButton from './MoreAnsweredQuestionsButton';

export default function QuestionsList({ results }) {
  console.log(results);
  return (
    <div>
      <div>
        Questions List Below
        {results.map((questionObj) => (
          <QuestionCard
            key={questionObj.question_id}
            questionObj={questionObj}
          />
        ))}
      </div>
      <AddAQuestionButton />
      <MoreAnsweredQuestionsButton />
    </div>
  );
}

QuestionsList.propTypes = {
  results: PropTypes.arrayOf(PropTypes.shape({
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
