import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import AnswerCard from './AnswerCard/AnswerCard';

const AnswersListContainer = styled.div`
  overflow-y: auto;
  max-height: 350px;
  width: 80%;

  ::-webkit-scrollbar {
    width: 5px;
  }
  ::-webkit-scrollbar-track {
    background: #f1f1f1;
  }
  ::-webkit-scrollbar-thumb {
    background: #888;
  }
  ::-webkit-scrollbar-thumb:hover {
    background: #555;
  }
`;

const LoadMoreAnswersButton = styled.button`
  color: inherit;
  border: none;
  margin: 0.5em 0 0.5em 0;
  padding: 0.5em;
  font-family : inherit;
  font-size: 10px;
  font-weight: bold;
  background: #ebebeb;

  &:hover {
    cursor: pointer;
    filter: brightness(0.75);
  }
`;

export default function AnswersList({ answers }) {
  const answersGiven = answers.length;
  const [renderLength, setRenderLength] = useState(2);
  // if there are two answers or less, don't show 'see more answers' button
  if (answersGiven <= 2) {
    return (
      <AnswersListContainer>
        {answers.slice(0, renderLength).map((answer) => (
          <AnswerCard key={answer.id} answer={answer} />
        ))}
      </AnswersListContainer>
    );
  }
  // if there are more answers given than rendered, show 'see more answers' button
  if (answersGiven > renderLength) {
    return (
      <AnswersListContainer>
        {answers.slice(0, renderLength).map((answer) => (
          <AnswerCard key={answer.id} answer={answer} />
        ))}
        <LoadMoreAnswersButton onClick={() => setRenderLength((len) => len + 2)} type="button">
          LOAD MORE ANSWERS
        </LoadMoreAnswersButton>
      </AnswersListContainer>
    );
  }
  // if we are rendering all the answers, show 'collapse answers', which collapse answers shown to 2
  if (answersGiven <= renderLength) {
    return (
      <AnswersListContainer>
        {answers.slice(0, renderLength).map((answer) => (
          <AnswerCard key={answer.id} answer={answer} />
        ))}
        <LoadMoreAnswersButton onClick={() => setRenderLength(2)} type="button">
          COLLAPSE ANSWERS
        </LoadMoreAnswersButton>
      </AnswersListContainer>
    );
  }
}

AnswersList.propTypes = {
  answers: PropTypes.arrayOf(PropTypes.shape({
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
