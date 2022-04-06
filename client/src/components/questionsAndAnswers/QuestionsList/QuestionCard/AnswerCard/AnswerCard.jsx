import React from 'react';
import PropTypes from 'prop-types';

import AnswerCardPhotos from './AnswerCardPhotos';
import HelpfulAnswerButton from './HelpfulAnswerButton';
import ReportAnswerButton from './ReportAnswerButton';

export default function AnswerCard({ answer }) {
  const dateObj = new Date(answer.date);
  const dateOptions = { year: 'numeric', month: 'long', day: 'numeric' };
  const dateString = dateObj.toLocaleDateString('en-US', dateOptions);

  return (
    <div>
      {answer.body}
      <AnswerCardPhotos photos={answer.photos} />
      <div>
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
      </div>
    </div>
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
