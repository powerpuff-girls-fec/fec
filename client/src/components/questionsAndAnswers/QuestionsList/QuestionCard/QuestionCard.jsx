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

export default function QuestionsCard({ questionObj }) {
  return (
    <div>
      <Container>
        <Question>
          Q:
          {questionObj.question_body}
        </Question>
        <QuestionLevelButtons>
          <HelpfulQuestionButton questionHelpfulness={questionObj.question_helpfulness} />
          <AddAnswer />
        </QuestionLevelButtons>
      </Container>
      <AnswersList answers={questionObj.answers} />
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
