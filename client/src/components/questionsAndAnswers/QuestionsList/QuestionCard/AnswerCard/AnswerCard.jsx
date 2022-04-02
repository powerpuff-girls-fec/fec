import React from 'react';
import PropTypes from 'prop-types';

import AnswerCardPhotos from './AnswerCardPhotos';
import HelpfulAnswerButton from './HelpfulAnswerButton';
import ReportAnswerButton from './ReportAnswerButton';

export default function AnswerCard({ answer }) {
  return (
    <div>
      {answer.body}
      <AnswerCardPhotos photos={answer.photos} />
      <div>
        by
        {answer.answerer_name}
        ,
        {answer.date}
        <HelpfulAnswerButton helpfulness={answer.helpfulness} />
        <ReportAnswerButton />
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
