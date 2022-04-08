import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import axios from 'axios';

import styled from 'styled-components';

import RatingBreakdown from './rating-breakdown/RatingBreakdown';
import ReviewList from './review-list/ReviewList';

function getRatingsStats(ratings) {
  const ratingsArray = [];

  for (let i = 1; i <= 5; i += 1) {
    ratingsArray.push(Number(ratings[i]) || 0);
  }

  const out = {
    total: ratingsArray.reduce((total, rating) => total + rating, 0),
  };

  out.average = ratingsArray.reduce((total, rating, i) => (
    total + rating * i), 0) / out.total + 1;

  return out;
}

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
  const [sort, setSort] = useState('relevant');

  const displayMoreReviews = () => {
    setDisplayed(displayed + 2);
  };

  useEffect(() => {
    axios.get(`api/reviews/meta/${productId}`)
      .then((res) => res.data)
      .then((data) => setReviewMetadata(data));
  }, [productId]);

  useEffect(() => {
    axios.get(`api/reviews/${productId}`, { params: { count: 9999, sort } })
      .then((res) => res.data.results)
      .then((data) => setReviews(data));
  }, [productId, sort]);

  const { average, total } = getRatingsStats((reviewMetadata) ? reviewMetadata.ratings : {});

  return (
    <Container>
      <RatingBreakdown metadata={reviewMetadata} average={average} total={total} />
      <ReviewList
        reviews={reviews.slice(0, displayed)}
        moreReviewsHandler={displayMoreReviews}
        addReviewhandler={() => console.log('uwu')}
        sortChangeHandler={(e) => setSort(e.target.value)}
        reviewsRemaining={displayed <= reviews.length}
        totalReviews={total}
      />
    </Container>
  );
}

Reviews.propTypes = {
  productId: PropTypes.number.isRequired,
};
