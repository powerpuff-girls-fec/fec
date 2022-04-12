import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
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

export default function HelpfulAnswerButton({ answerId, helpfulness }) {
  const [clicked, setClicked] = useState(false);
  if (clicked) {
    return (
      <>
        Helpful?
        {' '}
        <Button>
          Yes(
          {helpfulness + 1}
          )
        </Button>
      </>
    );
  }
  return (
    <>
      Helpful?
      {' '}
      <Button onClick={() => axios.put(`/api/answers/${answerId}/helpful`).then(() => setClicked(true)).catch((err) => console.log(err))}>
        Yes(
        {helpfulness}
        )
      </Button>
    </>
  );
}

HelpfulAnswerButton.propTypes = {
  answerId: PropTypes.number.isRequired,
  helpfulness: PropTypes.number.isRequired,
};
