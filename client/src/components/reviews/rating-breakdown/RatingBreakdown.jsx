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
    product_id: PropTypes.string,
    ratings: PropTypes.shape({
      1: PropTypes.string,
      2: PropTypes.string,
      3: PropTypes.string,
      4: PropTypes.string,
      5: PropTypes.string,
    }),
    recommended: PropTypes.shape({
      true: PropTypes.string,
      false: PropTypes.string,
    }),
    characteristics: PropTypes.object,
  }),
};

RatingBreakdown.defaultProps = {
  metadata: {
    product_id: '0',
    ratings: {
      1: '0',
      2: '0',
      3: '0',
      4: '0',
      5: '0',
    },
    recommended: {
      false: '0',
      true: '0',
    },
    characteristics: {
      Fit: {
        id: '220230',
        value: '4.9393939393939394',
      },
      Length: {
        id: '220231',
        value: '4.9090909090909091',
      },
      Comfort: {
        id: '220232',
        value: '5.0000000000000000',
      },
      Quality: {
        id: '220233',
        value: '4.9393939393939394',
      },
    },
  },
};
