import React from 'react';
import PropTypes from 'prop-types';

import styled from 'styled-components';

import Stars from 'common/Stars';

const Container = styled.div`
  border-bottom: 1px solid grey;
  margin-top: 40px;
  padding-bottom: 20px;
`;

const Header = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 20px;
`;

const Summary = styled.div`
  font-weight: bold;
  font-size: 1.2em;
  padding-bottom: 30px;
`;

// eslint-disable-next-line react/prop-types
function B({ children }) {
  return <span style={{ fontWeight: 'bold' }}>{children}</span>;
}

export default function Review({ review }) {
  return (
    <Container>
      <Header>
        <Stars stars={review.rating} />
        <span style={{ color: 'rgb(130, 130, 130)' }}>
          {`${review.reviewer_name}, ${
            new Date(review.date).toLocaleDateString(
              undefined,
              {
                month: 'long',
                day: 'numeric',
                year: 'numeric',
              },
            )
          }`}
        </span>
      </Header>
      <Summary>{review.summary}</Summary>
      <div>{review.body}</div>

      {/* eslint-disable react/jsx-one-expression-per-line */}
      {(review.recommend) ? <div style={{ paddingTop: '30px' }}><B>🗸</B> I recommend this product</div> : null}
      {(review.response) ? <div style={{ paddingTop: '30px' }}><B>💬</B> {review.response}</div> : null}
      {/* eslint-enable react/jsx-one-expression-per-line */}

    </Container>
  );
}

Review.propTypes = {
  review: PropTypes.shape({
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
  }),
};

Review.defaultProps = {
  review: {
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
  },
};
