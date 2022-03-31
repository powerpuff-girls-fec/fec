import React from 'react';
import AnswerCardPhotos from './AnswerCardPhotos';
import HelpfulAnswerButton from './HelpfulAnswerButton';
import ReportAnswerButton from './ReportAnswerButton';

export default function AnswerCard() {
  return (
    <div>
      This is an answer
      <AnswerCardPhotos />
      <div>
        by username, date
        <HelpfulAnswerButton />
        <ReportAnswerButton />
      </div>
    </div>
  );
}
