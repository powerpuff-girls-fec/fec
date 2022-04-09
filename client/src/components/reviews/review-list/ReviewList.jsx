import React, { useState } from 'react';
import PropTypes from 'prop-types';

import styled from 'styled-components';

import axios from 'axios';

import Review from './Review';
import ReviewMenu from './ReviewMenu';
import ReviewModal from './ReviewModal';

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
  color: inherit;
`;

const SelectWrapper = styled.div`
  font-size: 1.5em;
  font-weight: bold;
`;

export default function ReviewList({
  reviews,
  moreReviewsHandler,
  reviewsRemaining,
  totalReviews,
  sortChangeHandler,
  characteristics,
  productId,
}) {
  const [showModal, setShowModal] = useState(false);

  const openModal = () => {
    setShowModal((prevState) => !prevState);
  };

  const postReview = (e) => {
    axios.post('/api/reviews', {
      ...e,
      product_id: Number(productId),
      characteristics: Object.keys(e.characteristics).reduce((acc, key) => (
        { ...acc, [key]: e.characteristics[key].value }), {}),
      rating: Number(e.rating),
    });
  };

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
        addReviewhandler={() => { openModal(); }}
        reviewsRemaining={reviewsRemaining}
      />
      <ReviewModal
        showModal={showModal}
        openModal={openModal}
        setShowModal={setShowModal}
        characteristics={characteristics}
        onSubmit={postReview}
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
  sortChangeHandler: PropTypes.func.isRequired,
  reviewsRemaining: PropTypes.bool.isRequired,
  totalReviews: PropTypes.number.isRequired,
  characteristics: PropTypes.object.isRequired,
  productId: PropTypes.number.isRequired,
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
