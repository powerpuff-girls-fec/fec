import React from 'react';
import PropTypes from 'prop-types';

import styled from 'styled-components';

const Button = styled.button`
  color: inherit;
  border-color: #525252;
  border-width: thin;
  padding: 0.5em;
  margin: 0.5em;
  font-family: "HelveticaNeue", Arial;
  font-size: 14px;
  font-weight: bold;
  background: white;

  &:hover {
    cursor: pointer;
    filter: brightness(0.75);
  }
`;

export default function ReviewMenu({ moreReviewsHandler, addReviewhandler, reviewsRemaining }) {
  return (
    <div>
      {
        (reviewsRemaining) ? <Button type="button" onClick={moreReviewsHandler}>More Reviews</Button> : null
      }
      <Button type="button" onClick={addReviewhandler}>Add Review</Button>
    </div>
  );
}

ReviewMenu.propTypes = {
  moreReviewsHandler: PropTypes.func.isRequired,
  addReviewhandler: PropTypes.func.isRequired,
  reviewsRemaining: PropTypes.bool.isRequired,
};
