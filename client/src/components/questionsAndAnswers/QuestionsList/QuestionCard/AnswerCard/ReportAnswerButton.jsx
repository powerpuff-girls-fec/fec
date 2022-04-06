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
`;

export default function ReportAnswerButton({ answerId }) {
  const [clicked, setClicked] = useState(false);
  if (clicked) {
    return (
      <Button>
        Reported
      </Button>
    );
  }
  return (
    <Button onClick={() => axios.put(`/api/answers/${answerId}/report`).then(() => setClicked(true))}>
      Report
    </Button>
  );
}

ReportAnswerButton.propTypes = {
  answerId: PropTypes.number.isRequired,
};
