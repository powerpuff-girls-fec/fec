import React from 'react';
import PropTypes from 'prop-types';

import styled from 'styled-components';

import Review from './Review';

const ListWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

export default function ReviewList({ reviews }) {
  return (
    <ListWrapper>
      {reviews.map((review) => <Review key={review.review_id} review={review} />)}
    </ListWrapper>
  );
}

ReviewList.propTypes = {
  reviews: PropTypes.arrayOf(PropTypes.shape({
    review_id: PropTypes.number,
    rating: PropTypes.number,
    recommend: PropTypes.bool,
    response: PropTypes.string,
    summary: PropTypes.string,
    body: PropTypes.string,
    date: PropTypes.string,
    helpfullness: PropTypes.number,
    photos: PropTypes.arrayOf(PropTypes.shape({
      id: PropTypes.number,
      url: PropTypes.string,
    })),
    reviewer_name: PropTypes.string,
  })),
};

ReviewList.defaultProps = {
  reviews: [{
    review_id: 0,
    rating: 0,
    recommend: false,
    response: '',
    summary: '',
    body: '',
    date: '',
    helpfullness: 0,
    photos: [],
    reviewer_name: '',
  }],
};
