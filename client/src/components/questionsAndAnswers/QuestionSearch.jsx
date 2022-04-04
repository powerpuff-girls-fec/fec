import React, { useState } from 'react';

export default function QuestionSearch() {
  const [searchTerm, setSearchTerm] = useState('');
  console.log(searchTerm);
  return (
    <input
      defaultValue="Have a question? Search for Answers"
      value={searchTerm}
      onChange={(e) => (setSearchTerm(e.target.value))}
    />
  );
}
