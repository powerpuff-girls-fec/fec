import React from 'react';
import PropTypes from 'prop-types';

import styled from 'styled-components';

import BreakdownOverview from './BreakdownOverview';
import BreakdownList from './breakdown-list/BreakdownList';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 40px 0 0;
`;

function getRatingsStats(ratings) {
  const ratingsArray = [
    ratings[1] || 0,
    ratings[2] || 0,
    ratings[3] || 0,
    ratings[4] || 0,
    ratings[5] || 0,
  ];

  const out = {
    total: ratingsArray.reduce((total, rating) => total + rating, 0),
  };

  out.average = ratingsArray.reduce((total, rating, i) => (
    total + rating * i), 0) / out.total + 1;

  return out;
}

function getRecPercentage(recommended) {
  return (recommended.true / (recommended.true + recommended.false)) * 100;
}

export default function RatingBreakdown({ metadata }) {
  const { average, total } = getRatingsStats(metadata.ratings);

  return (
    <Container>
      <BreakdownOverview
        stars={average}
        percentage={getRecPercentage(metadata.recommended)}
      />
      <BreakdownList ratings={{ ...metadata.ratings, total }} />
    </Container>
  );
}

RatingBreakdown.propTypes = {
  metadata: PropTypes.shape({
    product_id: PropTypes.number.isRequired,
    ratings: PropTypes.shape({
      1: PropTypes.number,
      2: PropTypes.number,
      3: PropTypes.number,
      4: PropTypes.number,
      5: PropTypes.number,
    }).isRequired,
    recommended: PropTypes.shape({
      true: PropTypes.number.isRequired,
      false: PropTypes.number.isRequired,
    }).isRequired,
    characteristics: PropTypes.object.isRequired,
  }).isRequired,
};
