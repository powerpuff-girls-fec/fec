import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const SearchBarWrapper = styled.div`
  height: 40px;
  width: 980px;
  align-self: center;
  display: flex;
  border: 1px solid #525252;
  padding: 0.3em;
  margin-bottom: 10px;
`;

const SearchBarIcon = styled.img`
  top: 0.6em;
  bottom: 0;
  right: 0.3em;
  width: 1.8em;
  height: 1.8em;
  align-self: center;
  margin-left: 0.4em;
`;

const SearchBar = styled.input`
  height: 25px;
  width: 940px;
  margin: 5px;
  align-self: center;
  font-family: inherit;
  border: none;

  &:focus {
    outline: none;
  }
`;

export default function QuestionSearch({ setQuestionData, originalData }) {
  return (
    <SearchBarWrapper>
      <SearchBarIcon alt="magnifyingglass" src="https://assets.therealreal.com/images/icons/magnifying_glass-92195279b6c625ace053f028e556430a.svg?vsn=d" />
      <SearchBar
        placeholder="Have a question? Search for Answers"
        onChange={(e) => {
          e.preventDefault();
          if (e.target.value.length >= 3) {
            const highlightedArr = originalData
              .filter(
                (obj) => obj.question_body.toLowerCase().includes(e.target.value.toLowerCase()),
              )
              .map(
                (obj) => {
                  const newBody = obj.question_body.replace(
                    new RegExp(e.target.value, 'gi'),
                    (match) => `<mark style="background: #4285F4; color: white;">${match}</mark>`,
                  );
                  return {
                    ...obj,
                    question_body: newBody,
                  };
                },
              );
            setQuestionData(highlightedArr);
          }
          if (e.target.value.length < 3) {
            const highlightedArr = originalData
              .map(
                (obj) => {
                  const newBody = obj.question_body.replace(
                    new RegExp(e.target.value, 'gi'),
                    (match) => `<mark style="background: #4285F4; color: white;">${match}</mark>`,
                  );
                  return {
                    ...obj,
                    question_body: newBody,
                  };
                },
              );
            setQuestionData(highlightedArr);
          }
        }}
        data-testid="QuestionSearch"
      />
    </SearchBarWrapper>
  );
}

QuestionSearch.propTypes = {
  setQuestionData: PropTypes.func,
  originalData: PropTypes.arrayOf(PropTypes.shape({
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

QuestionSearch.defaultProps = {
  setQuestionData: () => {},
  originalData: [{
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
