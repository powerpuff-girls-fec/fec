import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import AnswerCard from './AnswerCard/AnswerCard';

const AnswersListContainer = styled.div`
  max-height: 50%;
  overflow-y: hidden;
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
        <button onClick={() => setRenderLength((len) => len + 2)} type="button">
          See more answers
        </button>
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
        <button onClick={() => setRenderLength(2)} type="button">
          Collapse answers
        </button>
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
