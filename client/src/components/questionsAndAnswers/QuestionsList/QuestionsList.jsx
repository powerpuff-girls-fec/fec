import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import QuestionCard from './QuestionCard/QuestionCard';
import AddAQuestionButton from './AddAQuestionButton';
import MoreAnsweredQuestionsButton from './MoreAnsweredQuestionsButton';
import AddAQuestionModal from '../AddAQuestionModal';

const QuestionsListContainer = styled.div`
  max-height: 500px;
  overflow-y: hidden;
`;

export default function QuestionsList({ results }) {
  const questionsAsked = results.length;
  const [renderLength, setRenderLength] = useState(4);
  const [showModal, setShowModal] = useState(false);

  const openModal = () => {
    setShowModal((prevState) => !prevState);
  };

  if (questionsAsked === 0) {
    return (
      <>
        <AddAQuestionButton openModal={openModal} />
        <AddAQuestionModal
          showModal={showModal}
          openModal={openModal}
          setShowModal={setShowModal}
        />
      </>
    );
  }

  return (
    <>
      <AddAQuestionModal showModal={showModal} openModal={openModal} setShowModal={setShowModal} />
      <QuestionsListContainer>
        <div>
          {results.slice(0, renderLength).map((questionObj) => (
            <QuestionCard
              key={questionObj.question_id}
              questionObj={questionObj}
            />
          ))}
        </div>
      </QuestionsListContainer>
      <div>
        <AddAQuestionButton openModal={openModal} />
        {questionsAsked <= 2 || questionsAsked <= renderLength ? null : (
          <MoreAnsweredQuestionsButton
            setRenderLength={setRenderLength}
          />
        )}
      </div>
    </>
  );
}

QuestionsList.propTypes = {
  results: PropTypes.arrayOf(PropTypes.shape({
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

QuestionsList.defaultProps = {
  results: [{
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