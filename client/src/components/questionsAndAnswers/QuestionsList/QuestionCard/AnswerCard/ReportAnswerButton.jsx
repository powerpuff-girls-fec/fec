import React, { useState } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import axios from 'axios';

const Button = styled.button`
  background: none!important;
  border: none;
  padding: 0!important;
  text-decoration: underline;
  cursor: pointer;
  font-family: inherit;
  font-size: inherit;
  color: inherit;

  &:hover {
    cursor: pointer;
    filter: brightness(0.75);
  }
`;

export default function ReportAnswerButton({ answerId }) {
  const [clicked, setClicked] = useState(false);
  const testId = `ReportAnswerButton_${answerId}`;

  if (clicked) {
    return (
      <Button
        data-testid={testId}
      >
        Reported
      </Button>
    );
  }
  return (
    <Button
      onClick={() => axios.put(`/api/answers/${answerId}/report`).then(() => setClicked(true)).catch((err) => console.log(err))}
      data-testid={testId}
    >
      Report
    </Button>
  );
}

ReportAnswerButton.propTypes = {
  answerId: PropTypes.number.isRequired,
};
