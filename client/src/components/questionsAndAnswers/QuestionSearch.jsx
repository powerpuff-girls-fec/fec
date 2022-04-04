import React, { useState } from 'react';

export default function QuestionSearch({ setQuestionData }) {
  const [searchTerm, setSearchTerm] = useState('Have a question? Search for Answers');
  console.log(searchTerm);
  return (
    <input
      placeholder="Have a question? Search for Answers"
      onChange={(e) => {
        e.preventDefault();
        setSearchTerm(e.target.value)}}
    />
  );
}
