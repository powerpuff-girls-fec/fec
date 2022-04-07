import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import PropTypes from 'prop-types';

import QuestionSearch from './QuestionSearch';
import QuestionsList from './QuestionsList/QuestionsList';

const Container = styled.div`
  height: 50vh;
  display: flex;
  flex-direction: column;
`;

let originalData;

export default function ViewQuestionsAndAnswers({ productId }) {
  const [questionsData, setQuestionData] = useState(undefined);

  useEffect(() => {
    axios.get(`/api/questions/${productId}`)
      .then((response) => {
        originalData = JSON.parse(JSON.stringify(response.data.results));
        setQuestionData(response.data.results);
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <Container>
      <h1>QUESTIONS & ANSWERS</h1>
      <QuestionSearch
        setQuestionData={setQuestionData}
        originalData={originalData}
      />
      <QuestionsList results={questionsData} productId={productId} />
    </Container>
  );
}

ViewQuestionsAndAnswers.propTypes = {
  productId: PropTypes.number.isRequired,
};
