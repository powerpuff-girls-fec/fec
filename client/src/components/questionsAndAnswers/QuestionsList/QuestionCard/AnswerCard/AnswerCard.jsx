import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import HelpfulAnswerButton from './HelpfulAnswerButton';
import ReportAnswerButton from './ReportAnswerButton';

const AnswerCardContainer = styled.div`
  margin-left: 0.45em;
  margin-bottom: 1.2em;
`;

const AnswerCardPhotoContainer = styled.div`
  display: flex;
`;

const AnswerCardImg = styled.img`
  border-radius: 10px;
  border: #aaaaaa;
  border-width: thin;
  border-style: solid;
  margin: 5px;
`;

const AnswerCardSubcontainer = styled.div`
  margin-bottom: 5px;
`;

const AnsweredBySubcontainer = styled.div`
  font-size: 12px;
  margin-bottom: 5px 0 10px 0;
`;

export default function AnswerCard({ answer }) {
  const dateObj = new Date(answer.date);
  const dateOptions = { year: 'numeric', month: 'long', day: 'numeric' };
  const dateString = dateObj.toLocaleDateString('en-US', dateOptions);

  return (
    <AnswerCardContainer>
      <AnswerCardSubcontainer>
        {answer.body}
      </AnswerCardSubcontainer>
      {answer.photos.length > 0 ? (
        <AnswerCardPhotoContainer>
          {answer.photos.map((image) => (<AnswerCardImg key={image} src={image} alt="dummy" width="100" height="75" />))}
        </AnswerCardPhotoContainer>
      ) : null}
      <AnsweredBySubcontainer>
        by
        {' '}
        {answer.answerer_name === 'Seller' ? <b>Seller</b> : answer.answerer_name}
        ,
        {' '}
        {dateString}
        {'  |  '}
        <HelpfulAnswerButton helpfulness={answer.helpfulness} answerId={answer.id} />
        {'  |  '}
        <ReportAnswerButton answerId={answer.id} />
      </AnsweredBySubcontainer>
    </AnswerCardContainer>
  );
}

AnswerCard.propTypes = {
  answer: PropTypes.shape({
    answerer_name: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    helpfulness: PropTypes.number.isRequired,
    id: PropTypes.number.isRequired,
    photos: PropTypes.arrayOf(PropTypes.string.isRequired),
  }).isRequired,
};
