import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Button = styled.button`
  background: none!important;
  border: none;
  padding: 0!important;
  text-decoration: underline;
  cursor: pointer;
`;

export default function HelpfulAnswerButton({ helpfulness }) {
  return (
    <>
      Helpful?
      {' '}
      <Button onClick={() => console.log('swag')}>
        Yes(
        {helpfulness}
        )
      </Button>
    </>
  );
}

HelpfulAnswerButton.propTypes = {
  helpfulness: PropTypes.number.isRequired,
};
