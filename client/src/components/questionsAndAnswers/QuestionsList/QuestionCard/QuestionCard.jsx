import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import HelpfulQuestionButton from './HelpfulQuestionButton';
import AddAnswer from './AddAnswer';
import AnswersList from './AnswersList';
import AddAnswerModal from './AddAnswerModal';

const Container = styled.div`
  height: 100%;
  display: flex;
  margin: 5px;
`;

const Question = styled.div`
  min-height: 10px;
  width: 810px;
`;

const QuestionLevelButtons = styled.div`
  min-height: 10px;
  font-size: 12px;
`;

const BoldQAText = styled.span`
  font-size: 16px;
  font-weight: bold;
`;

const compare = function compare(a, b) {
  if (a.answerer_name === 'Seller') {
    return -1;
  }
  if (b.answerer_name === 'Seller') {
    return 1;
  }
  return b.helpfulness - a.helpfulness;
};

const createMarkup = (html) => ({ __html: html });

export default function QuestionsCard({ questionObj, testid }) {
  const answersArray = [];
  for (let i = 0; i < Object.keys(questionObj.answers).length; i += 1) {
    answersArray.push(questionObj.answers[Object.keys(questionObj.answers)[i]]);
  }
  answersArray.sort(compare);
  const [showModal, setShowModal] = useState(false);

  const openModal = () => {
    setShowModal((prevState) => !prevState);
  };

  return (
    <div data-testid={testid}>
      <Container>
        <Question>
          <BoldQAText>Q:</BoldQAText>
          {'  '}
          <BoldQAText dangerouslySetInnerHTML={createMarkup(questionObj.question_body)} />
        </Question>
        <QuestionLevelButtons>
          <HelpfulQuestionButton
            questionHelpfulness={questionObj.question_helpfulness}
            questionId={questionObj.question_id}
          />
          {' | '}
          <AddAnswer
            openModal={openModal}
          />
          <AddAnswerModal
            showModal={showModal}
            setShowModal={setShowModal}
            questionId={questionObj.question_id}
            questionBody={questionObj.question_body}
          />
        </QuestionLevelButtons>
      </Container>
      <Container>
        <BoldQAText>A:</BoldQAText>
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
  testid: PropTypes.string.isRequired,
};
