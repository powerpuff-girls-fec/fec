import React from 'react';
import HelpfulQuestionButton from './HelpfulQuestionButton';
import AddAnswer from './AddAnswer';
import AnswersList from './AnswersList';

export default function QuestionsCard() {
  return (
    <div>
      Q: This is a Question?
      <HelpfulQuestionButton />
      <AddAnswer />
      <AnswersList />
    </div>
  );
}
