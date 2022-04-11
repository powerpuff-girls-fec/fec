import React from 'react';

/* eslint-disable import/no-unresolved */
import Review from 'components/reviews/review-list/Review';
import ReviewList from 'components/reviews/review-list/ReviewList';
/* eslint-enable import/no-unresolved */

import { render, cleanup, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

afterEach(cleanup);

describe('review', () => {
  const testReview = {
    review_id: 0,
    rating: 3.3,
    recommend: true,
    response: 'this is a response from the seller',
    summary: 'here\'s a summary',
    body: 'here\'s the body',
    date: '2022-03-29T00:00:00.000Z',
    helpfullness: 27,
    photos: [],
    reviewer_name: 'testy test',
  };

  it('renders a review', () => {
    render(<Review review={testReview} />);

    expect(screen.getAllByText('☆')).toHaveLength(5);
    expect(screen.getAllByText('★')).toHaveLength(5);

    expect(screen.getByText('I recommend this product')).toBeInTheDocument();
  });

  it('doesn\'t render checkmark if not recommended', () => {
    render(<Review review={{ ...testReview, recommend: false }} />);

    expect(screen.getAllByText('☆')).toHaveLength(5);
    expect(screen.getAllByText('★')).toHaveLength(5);

    expect(screen.queryByText('I recommend this product')).toBeNull();
  });

  it('doesn\'t render response if no response', () => {
    render(<Review review={{ ...testReview, response: '' }} />);

    expect(screen.getAllByText('☆')).toHaveLength(5);
    expect(screen.getAllByText('★')).toHaveLength(5);

    expect(screen.queryByText('💬')).toBeNull();
  });
});

describe('review list', () => {
  const testReviews = [{
    review_id: 0,
    rating: 3.3,
    recommend: true,
    response: 'this is a response from the seller',
    summary: 'here\'s a summary',
    body: 'here\'s the body',
    date: '2022-03-29T00:00:00.000Z',
    helpfullness: 27,
    photos: [],
    reviewer_name: 'testy test',
  },
  {
    review_id: 1,
    rating: 3.7,
    recommend: false,
    response: 'this is a response from the seller',
    summary: 'here\'s a summary',
    body: 'here\'s the body',
    date: '2022-03-29T00:00:00.000Z',
    helpfullness: 13,
    photos: [],
    reviewer_name: 'testy testerson',
  }];

  it('renders a review', () => {
    render(<ReviewList
      moreReviewsHandler={() => {}}
      sortChangeHandler={() => {}}
      reviewsRemaining={false}
      totalReviews={2}
      characteristics={{}}
      productId={0}
      reviews={testReviews}
    />);

    expect(screen.getAllByText('☆')).toHaveLength(10);
    expect(screen.getAllByText('★')).toHaveLength(10);

    expect(screen.getAllByText('I recommend this product')).toHaveLength(1);
    expect(screen.getAllByText('Response:')).toHaveLength(2);
  });
});
