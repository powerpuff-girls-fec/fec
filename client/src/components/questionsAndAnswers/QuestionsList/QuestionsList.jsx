import React from 'react';
import PropTypes from 'prop-types';

import QuestionCard from './QuestionCard/QuestionCard';
import AddAQuestionButton from './AddAQuestionButton';
import MoreAnsweredQuestionsButton from './MoreAnsweredQuestionsButton';

export default function QuestionsList({ results }) {
  console.log(results);
  return (
    <div>
      Questions List Below
      <QuestionCard />
      <AddAQuestionButton />
      <MoreAnsweredQuestionsButton />
    </div>
  );
}
