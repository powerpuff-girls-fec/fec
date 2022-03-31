import React from 'react';
import QuestionCard from './QuestionCard';
import AddAQuestionButton from './AddAQuestionButton';
import MoreAnsweredQuestionsButton from './MoreAnsweredQuestionsButton';

export default function QuestionsList() {
  return (
    <div>
      Questions List Below
      <QuestionCard />
      <AddAQuestionButton />
      <MoreAnsweredQuestionsButton />
    </div>
  );
}
