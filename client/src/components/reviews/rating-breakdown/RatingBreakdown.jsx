import React from 'react';
import PropTypes from 'prop-types';

import styled from 'styled-components';

import BreakdownOverview from './BreakdownOverview';
import BreakdownList from './breakdown-list/BreakdownList';
import FactorList from './factor-list/FactorList';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 40px 0 0;
`;

function getRecPercentage(recommended) {
  return (recommended.true / (recommended.true + recommended.false)) * 100;
}

function characteristicsToArray(characteristics) {
  return Object.keys(characteristics).map((key) => ({
    id: Number(characteristics[key].id),
    title: key,
    rating: Number(characteristics[key].value),
  }));
}

export default function RatingBreakdown({ metadata, average, total }) {
  console.log(characteristicsToArray(metadata.characteristics));

  return (
    <Container>
      <BreakdownOverview
        stars={average}
        percentage={getRecPercentage(metadata.recommended)}
      />
      <BreakdownList ratings={{ ...metadata.ratings, total }} />
      <FactorList factors={characteristicsToArray(metadata.characteristics)} />
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
  average: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
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
