import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import axios from 'axios';

const Button = styled.button`
  background: none!important;
  border: none;
  padding: 0!important;
  text-decoration: underline;
  cursor: pointer;
`;

export default function HelpfulQuestionButton({ questionHelpfulness, questionId }) {
  const [clicked, setClicked] = useState(false);
  if (clicked) {
    return (
      <>
        Helpful?
        {' '}
        <Button>
          Yes(
          {questionHelpfulness + 1}
          )
        </Button>
      </>
    );
  }
  return (
    <>
      Helpful?
      {' '}
      <Button onClick={() => axios.put(`/api/questions/${questionId}/helpful`).then(() => setClicked(true))}>
        Yes(
        {questionHelpfulness}
        )
      </Button>
    </>
  );
}

HelpfulQuestionButton.propTypes = {
  questionHelpfulness: PropTypes.number.isRequired,
  questionId: PropTypes.number.isRequired,
};
