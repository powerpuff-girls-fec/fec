import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import PropTypes from 'prop-types';

import QuestionSearch from './QuestionSearch';
import QuestionsList from './QuestionsList/QuestionsList';

const FlexContainer = styled.div`
  width: 1000px;
  display: flex;
  flex-direction: column;
  margin: auto;
`;

const Header = styled.h1`
  font-family: "HelveticaNeue", Arial;
  font-size: 16px;
  margin: 5px
`;

let originalData;

export default function ViewQuestionsAndAnswers({ productId }) {
  const [questionsData, setQuestionData] = useState(undefined);

  useEffect(() => {
    if (productId !== 0) {
      axios.get(`/api/questions/${productId}`)
        .then((response) => {
          originalData = JSON.parse(JSON.stringify(response.data.results));
          setQuestionData(response.data.results);
        })
        .catch((error) => console.log(error));
    }
  }, []);

  return (

    <FlexContainer data-testid="qa">
      <Header>QUESTIONS & ANSWERS</Header>
      <QuestionSearch
        setQuestionData={setQuestionData}
        originalData={originalData}
      />
      <QuestionsList results={questionsData} productId={productId} />
    </FlexContainer>

  );
}

ViewQuestionsAndAnswers.propTypes = {
  productId: PropTypes.number,
};

ViewQuestionsAndAnswers.defaultProps = {
  productId: 0,
};
