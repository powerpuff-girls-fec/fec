import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import axios from 'axios';

import QuestionSearch from './QuestionSearch';
import QuestionsList from './QuestionsList/QuestionsList';

const Container = styled.div`
  height: 50%;
  display: flex;
  flex-direction: column;
`;

export default function ViewQuestionsAndAnswers() {
  const [questionsData, setQuestionData] = useState(undefined);

  useEffect(() => {
    axios.get('http://localhost:3000/api/questions')
      .then((response) => {
        setQuestionData(response.data.results);
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <Container>
      <h1>QUESTIONS & ANSWERS</h1>
      <QuestionSearch setQuestionData={setQuestionData} originalData={questionsData} />
      <QuestionsList results={questionsData} />
    </Container>
  );
}
