import React, { useState } from 'react';
import PropTypes from 'prop-types';

import axios from 'axios';

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

const Response = styled.div`
  background-color: #EBEBEB;
  padding: 1em 1em 1em 1em;
  margin: 1em 0 0.5em 0;
`;

const HelpfulnessReportWrapper = styled.div`
  padding-top: 1em;
  color: #555555;
`;

const HelpfulnessReportButton = styled.button`
  display: inline-block;
  text-decoration: underline;
  padding: 0;
  background: inherit;
  border: none;
  font-size: inherit;
  color: inherit;

  &:hover {
    color: #aaaaaa;
    cursor: pointer;
  }
`;

const AnswerCardPhotoContainer = styled.div`
  display: flex;
`;

const AnswerCardImg = styled.img`
  border-radius: 10px;
  border: #aaaaaa;
  border-width: thin;
  border-style: solid;
  margin: 5px;
  margin-top: 1.5em;
  object-fit: cover;  
`;

export default function Review({ review }) {
  const [markedHelpful, markHelpful] = useState(false);
  const [reported, report] = useState(false);

  const helpfulnessOnClick = () => {
    if (!markedHelpful) {
      markHelpful(true);

      axios.put(`/api/reviews/${review.review_id}/helpful`)
        .catch(() => {});
    }
  };

  const reportOnClick = () => {
    if (!reported) {
      report(true);

      axios.put(`/api/reviews/${review.review_id}/report`)
        .catch(() => {});
    }
  };

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
      {(review.recommend) ? <div style={{ paddingTop: '30px' }}><b>🗸</b> I recommend this product</div> : null}
      {(review.response) ? (
        <Response><b>Response:</b>
          <p style={{ marginBlockEnd: '0' }}>{review.response}</p>
        </Response>
      ) : null}
      {/* eslint-enable react/jsx-one-expression-per-line */}

      {review.photos.length > 0 ? (
        <AnswerCardPhotoContainer>
          {review.photos.map((image) => (
            <AnswerCardImg key={image.url} src={image.url} alt="dummy" width="100" height="75" />))}
        </AnswerCardPhotoContainer>
      ) : null}

      <HelpfulnessReportWrapper>
        Helpful?&nbsp;&nbsp;

        <HelpfulnessReportButton onClick={helpfulnessOnClick}>
          Yes
        </HelpfulnessReportButton>

        {` (${review.helpfulness + ((markedHelpful) ? 1 : 0)})`}

        {/* '  |  ' */}
        &nbsp;&nbsp;|&nbsp;&nbsp;

        <HelpfulnessReportButton onClick={reportOnClick}>
          {(reported) ? 'Reported!' : 'Report'}
        </HelpfulnessReportButton>

      </HelpfulnessReportWrapper>
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
    helpfulness: PropTypes.number,
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
