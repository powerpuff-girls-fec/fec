import React from 'react';

// eslint-disable-next-line import/no-unresolved
import Review from 'components/reviews/review-list/Review';

import { render, cleanup, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

afterEach(cleanup);

const testReview = {
  review_id: 0,
  rating: 0,
  recommend: true,
  response: 'this is a response from the seller',
  summary: 'here\'s a summary',
  body: 'here\'s the body',
  date: '2022-03-29T00:00:00.000Z',
  helpfullness: 27,
  photos: [],
  reviewer_name: 'testy test',
};

test('renders a review', () => {
  render(<Review review={testReview} />);

  expect(screen.getAllByText('☆')).toHaveLength(5);
  expect(screen.getAllByText('★')).toHaveLength(5);

  expect(screen.getByText('I recommend this product')).toBeDefined();
});
