import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import HelpfulQuestionButton from './HelpfulQuestionButton';
import AddAnswer from './AddAnswer';
import AnswersList from './AnswersList';

const Container = styled.div`
  height: 100%;
  display: flex;
`;

const Question = styled.div`
  min-height: 10px;
  flex-grow: 1;
`;

const QuestionLevelButtons = styled.div`
  min-height: 10px;
`;

const compare = function compare(a, b) {
  if (a.answerer_name === 'Seller') {
    return 1;
  }
  if (b.answerer_name === 'Seller') {
    return -1;
  }
  return a.helpfulness - b.helpfulness;
};

export default function QuestionsCard({ questionObj }) {
  // answersArray addresses the problem of wanting to show answers in the order of 'helpfulness'.
  const answersArray = [];
  for (let i = 0; i < Object.keys(questionObj.answers).length; i += 1) {
    answersArray.push(questionObj.answers[Object.keys(questionObj.answers)[i]]);
  }
  // Any answer from the seller appears first (see compare function above),
  // then ascending order by helpfulness
  answersArray.sort(compare).reverse();

  return (
    <div>
      <Container>
        <Question>
          Q:
          {questionObj.question_body}
        </Question>
        <QuestionLevelButtons>
          <HelpfulQuestionButton
            questionHelpfulness={questionObj.question_helpfulness}
            questionId={questionObj.question_id}
          />
          <AddAnswer />
        </QuestionLevelButtons>
      </Container>
      <Container>
        A:
        <AnswersList answers={answersArray} />
      </Container>
    </div>
  );
}

QuestionsCard.propTypes = {
  questionObj: PropTypes.shape({
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
  }).isRequired,
};
