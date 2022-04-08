import React from 'react';
import PropTypes from 'prop-types';

import styled from 'styled-components';

const Button = styled.button`
  padding: 2em;
  margin: 0.5em;
  border-radius: 0;

  &:hover {
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
