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
  border-top: 1px solid grey;
  padding-top: 1em;
  margin: auto;
`;

export default function Reviews({ productId }) {
  const [reviewMetadata, setReviewMetadata] = useState(undefined);
  const [reviews, setReviews] = useState(undefined);

  useEffect(() => {
    axios.get(`api/reviews/meta/${productId}`)
      .then((res) => res.data)
      .then((data) => setReviewMetadata(data));

    axios.get(`api/reviews/${productId}`)
      .then((res) => res.data)
      .then((data) => setReviews(data));
  }, []);

  return (
    <Container>
      <RatingBreakdown metadata={reviewMetadata} />
      <ReviewList reviews={reviews} />
    </Container>
  );
}

Reviews.propTypes = {
  productId: PropTypes.number.isRequired,
};
