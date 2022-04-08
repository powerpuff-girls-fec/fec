import React from 'react';

// eslint-disable-next-line import/no-unresolved
import ReviewList from 'components/reviews/review-list/ReviewList';

import { render, cleanup, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

afterEach(cleanup);

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

test('renders a review', () => {
  render(<ReviewList reviews={testReviews} />);

  expect(screen.getAllByText('☆')).toHaveLength(10);
  expect(screen.getAllByText('★')).toHaveLength(10);

  expect(screen.getAllByText('I recommend this product')).toHaveLength(1);
  expect(screen.getAllByText('💬')).toHaveLength(2);
});
