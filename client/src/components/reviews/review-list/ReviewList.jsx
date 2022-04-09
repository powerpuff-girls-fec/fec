import React from 'react';
import PropTypes from 'prop-types';

import styled from 'styled-components';

import Review from './Review';
import ReviewMenu from './ReviewMenu';

const ListWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const Select = styled.select`
  background-color: inherit;
  border: none;
  font-family: inherit;
  border-bottom: solid 1px black;
  font-size: 1em;
  font-weight: inherit;
`;

const SelectWrapper = styled.div`
  font-size: 1.5em;
  font-weight: bold;
`;

export default function ReviewList({
  reviews, addReviewhandler, moreReviewsHandler, reviewsRemaining, totalReviews, sortChangeHandler,
}) {
  return (
    <div>
      <SelectWrapper>
        {`${totalReviews} reviews, sorted by `}
        <Select onChange={sortChangeHandler}>
          <option value="relevant">Relevance</option>
          <option value="helpful">Helpfulness</option>
          <option value="newest">Newest</option>
        </Select>
      </SelectWrapper>
      <ListWrapper>
        {reviews.map((review) => <Review key={review.review_id} review={review} />)}
      </ListWrapper>
      <ReviewMenu
        moreReviewsHandler={moreReviewsHandler}
        addReviewhandler={addReviewhandler}
        reviewsRemaining={reviewsRemaining}
      />
    </div>
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
  moreReviewsHandler: PropTypes.func.isRequired,
  addReviewhandler: PropTypes.func.isRequired,
  sortChangeHandler: PropTypes.func.isRequired,
  reviewsRemaining: PropTypes.bool.isRequired,
  totalReviews: PropTypes.number.isRequired,
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
