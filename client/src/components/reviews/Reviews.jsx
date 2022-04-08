import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import axios from 'axios';

import styled from 'styled-components';

import RatingBreakdown from './rating-breakdown/RatingBreakdown';
import ReviewList from './review-list/ReviewList';

const Container = styled.div`
  width: 1000px;
  height: 10em;
  display: grid;
  grid-template-columns: 1fr 2fr;
  padding-top: 1em;
  margin: auto;
`;

export default function Reviews({ productId }) {
  const [reviewMetadata, setReviewMetadata] = useState();
  const [reviews, setReviews] = useState([]);
  const [displayed, setDisplayed] = useState(2);
  const [reviewsRemaining, setReviewsRemaining] = useState(true);

  const loadReviews = (count = 2) => {
    if (!reviewsRemaining) { return; }

    axios.get(`api/reviews/${productId}`, { params: { count, page: (reviews.length / 2) + 1 } })
      .then((res) => res.data.results)
      .then((data) => {
        if (data.length === 0) { setReviewsRemaining(false); }

        return data;
      })
      .then((data) => setReviews([...reviews, ...data]));
  };

  const displayMoreReviews = () => {
    setDisplayed(displayed + 2);
    loadReviews();
  };

  useEffect(() => {
    axios.get(`api/reviews/meta/${productId}`)
      .then((res) => res.data)
      .then((data) => setReviewMetadata(data));

    loadReviews(4);
  }, []);

  return (
    <Container>
      <RatingBreakdown metadata={reviewMetadata} />
      <ReviewList
        reviews={reviews.slice(0, displayed)}
        moreReviewsHandler={displayMoreReviews}
        addReviewhandler={() => console.log('uwu')}
        reviewsRemaining={reviewsRemaining}
      />
    </Container>
  );
}

Reviews.propTypes = {
  productId: PropTypes.number.isRequired,
};
