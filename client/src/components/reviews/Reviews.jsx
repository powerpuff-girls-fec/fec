import React from 'react';

import styled from 'styled-components';

import RatingBreakdown from './rating-breakdown/RatingBreakdown';

const exampleReviewMetadata = {
  product_id: 65631,
  ratings: {
    1: 1,
    3: 7,
    4: 32,
    5: 7,
  },
  recommended: {
    false: 1,
    true: 46,
  },
  characteristics: {
    Fit: {
      id: 220230,
      value: '4.9393939393939394',
    },
    Length: {
      id: 220231,
      value: '4.9090909090909091',
    },
    Comfort: {
      id: 220232,
      value: '5.0000000000000000',
    },
    Quality: {
      id: 220233,
      value: '4.9393939393939394',
    },
  },
};

const Container = styled.div`
  width: 1000px;
  height: 10em;
  display: grid;
  grid-template-columns: 1fr 2fr;
  border-top: 1px solid grey;
  padding-top: 1em;
  margin: auto;
`;

export default function Reviews() {
  return (
    <Container>
      <RatingBreakdown metadata={exampleReviewMetadata} />
    </Container>
  );
}
