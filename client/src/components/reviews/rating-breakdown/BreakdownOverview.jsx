import React from 'react';
import PropTypes from 'prop-types';

import styled from 'styled-components';

import Stars from '../../common/Stars';

const Container = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
`;

const ContainerText = styled.div`
  font-size: 1.25em;
  padding-left: 0.5em;
`;

const OverallRatings = styled.div`
  display: flex;  
  justify-content: left;
  font-size: 3em;
  padding: 0.5em 0.5em 0.5em 0.2em;
`;

const PercentRecommendations = styled.div`
  display: flex;
  justify-content: center;
  align-self: center;
`;

const StarWrapper = styled.div`
  padding-left: 0.25em;
`;

export default function BreakdownOverview({ stars, percentage }) {
  return (
    <Container>
      <ContainerText>RATINGS & REVIEWS</ContainerText>
      <OverallRatings>
        {stars.toFixed(1)}
        <StarWrapper>
          <Stars stars={stars} />
        </StarWrapper>
      </OverallRatings>
      <PercentRecommendations>
        {`${percentage.toFixed(0)}% of reviews recommend this product`}
      </PercentRecommendations>
    </Container>
  );
}

BreakdownOverview.propTypes = {
  stars: PropTypes.number.isRequired,
  percentage: PropTypes.number.isRequired,
};
