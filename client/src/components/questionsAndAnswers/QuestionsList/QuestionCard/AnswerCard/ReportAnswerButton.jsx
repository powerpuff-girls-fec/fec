import React, { useState } from 'react';
import styled from 'styled-components';

const Button = styled.button`
  background: none!important;
  border: none;
  padding: 0!important;
  text-decoration: underline;
  cursor: pointer;
`;

export default function ReportAnswerButton() {
  const [clicked, useClicked] = useState(false);

  return (
    <Button onClick={() => useClicked(true)}>
      {clicked ? 'Reported' : 'Report'}
    </Button>
  );
}
