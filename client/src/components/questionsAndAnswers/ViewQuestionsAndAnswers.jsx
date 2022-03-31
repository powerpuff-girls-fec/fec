import React from 'react';
import styled from 'styled-components';

import QuestionSearch from './QuestionSearch';
import QuestionsList from './QuestionsList/QuestionsList';

const Box = styled.div`
  height: 500px;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
`;

export default function ViewQuestionsAndAnswers() {
  return (
    <Box>
      <h1>QUESTIONS & ANSWERS</h1>
      <QuestionSearch />
      <QuestionsList />
    </Box>
  );
}
