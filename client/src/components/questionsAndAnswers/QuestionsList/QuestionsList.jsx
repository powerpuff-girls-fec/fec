import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import QuestionCard from './QuestionCard/QuestionCard';
import AddAQuestionButton from './AddAQuestionButton';
import MoreAnsweredQuestionsButton from './MoreAnsweredQuestionsButton';

const QuestionsListContainer = styled.div`
  max-height: 500px;
  overflow-y: scroll;
`;

export default function QuestionsList({ results }) {
  const questionsAsked = results.length;
  console.log(questionsAsked);
  /*
  to achieve two at a time:
  - instead of results.map I'll use state to determine how much of results to render
  - that way, once state updates, we'll trigger a re-render
  - moreAnsweredQuestionsButton will have a click handler that increments state
  (pass the setState into the button)
  */
  return (
    <>
      <QuestionsListContainer>
        <div>
          {results.map((questionObj) => (
            <QuestionCard
              key={questionObj.question_id}
              questionObj={questionObj}
            />
          ))}
        </div>
      </QuestionsListContainer>
      <div>
        <AddAQuestionButton />
        {questionsAsked > 2 ? <MoreAnsweredQuestionsButton /> : null}
      </div>
    </>
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
