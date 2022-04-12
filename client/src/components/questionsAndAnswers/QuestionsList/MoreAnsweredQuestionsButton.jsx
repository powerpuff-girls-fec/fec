import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Button = styled.button`
  color: inherit;
  border-color: #525252;
  border-width: thin;
  padding: 0.5em;
  margin: 0.5em;
  font-family: "HelveticaNeue", Arial;
  font-size: 14px;
  font-weight: bold;
  background: white;

  &:hover {
    cursor: pointer;
    filter: brightness(0.75);
  }
`;

export default function MoreAnsweredQuestionsButton({ setRenderLength }) {
  return (
    <Button
      type="button"
      onClick={() => setRenderLength((len) => len + 2)}
      data-testid="moreAnsweredQuestionsButton"
    >
      MORE ANSWERED QUESTIONS
    </Button>
  );
}

MoreAnsweredQuestionsButton.propTypes = {
  setRenderLength: PropTypes.func.isRequired,
};
