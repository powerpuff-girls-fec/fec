import React from 'react';

/* eslint-disable import/no-unresolved */
import Review from 'components/reviews/review-list/Review';
import ReviewList from 'components/reviews/review-list/ReviewList';
/* eslint-enable import/no-unresolved */

import {
  render, fireEvent, cleanup, screen, waitFor,
} from '@testing-library/react';
import '@testing-library/jest-dom';

afterEach(cleanup);

const testReviews = [{
  review_id: 0,
  rating: 3.3,
  recommend: true,
  response: '',
  summary: 'here\'s a summary',
  body: 'here\'s the body',
  date: '2022-03-29T00:00:00.000Z',
  helpfulness: 27,
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
  helpfulness: 13,
  photos: [],
  reviewer_name: 'testy testerson',
},
{
  review_id: 2,
  rating: 1,
  recommend: true,
  response: 'this is also a response from the seller',
  summary: 'here\'s a summary',
  body: 'here\'s the body',
  date: '2022-03-29T00:00:00.000Z',
  helpfulness: 812,
  photos: [],
  reviewer_name: 'testy testerson III',
}];

describe('review', () => {
  it('renders a review', () => {
    render(<Review review={testReviews[0]} />);

    expect(screen.getAllByText('☆')).toHaveLength(5);
    expect(screen.getAllByText('★')).toHaveLength(5);

    expect(screen.getByText('I recommend this product')).toBeInTheDocument();
  });

  it('doesn\'t render checkmark if not recommended', () => {
    render(<Review review={{ ...testReviews[0], recommend: false }} />);

    expect(screen.getAllByText('☆')).toHaveLength(5);
    expect(screen.getAllByText('★')).toHaveLength(5);

    expect(screen.queryByText('I recommend this product')).toBeNull();
  });

  it('doesn\'t render response if no response', () => {
    render(<Review review={{ ...testReviews[0], response: '' }} />);

    expect(screen.getAllByText('☆')).toHaveLength(5);
    expect(screen.getAllByText('★')).toHaveLength(5);

    expect(screen.queryByText('💬')).toBeNull();
  });
});

describe('review list', () => {
  it('renders a review', () => {
    render(<ReviewList
      moreReviewsHandler={() => {}}
      sortChangeHandler={() => {}}
      reviewsRemaining={true}
      totalReviews={2}
      characteristics={{}}
      productId={0}
      reviews={testReviews.slice(0, 2)}
    />);

    expect(screen.getAllByText('☆')).toHaveLength(10);
    expect(screen.getAllByText('★')).toHaveLength(10);

    expect(screen.getAllByText('I recommend this product')).toHaveLength(1);
    expect(screen.getAllByText('Response:')).toHaveLength(1);
  });

  it('increments reviews when helpful button is clicked', async () => {
    render(<ReviewList
      moreReviewsHandler={() => {}}
      sortChangeHandler={() => {}}
      reviewsRemaining={false}
      totalReviews={2}
      characteristics={{}}
      productId={0}
      reviews={testReviews}
    />);

    expect(screen.getByText(/\(27\)/, { exact: false })).toBeInTheDocument();

    fireEvent.click(screen.getAllByText(/Yes/)[0]);

    await waitFor(() => screen.getByText(/\(28\)/, { exact: false }));
    expect(screen.getByText(/\(28\)/, { exact: false })).toBeInTheDocument();
  });

  it('increments reviews when helpful button is clicked', async () => {
    render(<ReviewList
      moreReviewsHandler={() => {}}
      sortChangeHandler={() => {}}
      reviewsRemaining={false}
      totalReviews={2}
      characteristics={{}}
      productId={0}
      reviews={testReviews}
    />);

    expect(screen.getByText(/\(27\)/, { exact: false })).toBeInTheDocument();

    fireEvent.click(screen.getAllByText(/Yes/)[0]);
    fireEvent.click(screen.getAllByText(/Yes/)[0]);

    await waitFor(() => screen.getByText(/\(28\)/, { exact: false }));
    expect(screen.getByText(/\(28\)/, { exact: false })).toBeInTheDocument();
  });

  it('increments reports and marks reported', async () => {
    render(<ReviewList
      moreReviewsHandler={() => {}}
      sortChangeHandler={() => {}}
      reviewsRemaining={false}
      totalReviews={2}
      characteristics={{}}
      productId={0}
      reviews={testReviews}
    />);

    fireEvent.click(screen.getAllByText(/Report/)[0]);

    await waitFor(() => screen.getByText(/Reported!/));

    expect(true).toBe(true);
  });

  it('doesn\'t increment reports if already reported', async () => {
    render(<ReviewList
      moreReviewsHandler={() => {}}
      sortChangeHandler={() => {}}
      reviewsRemaining={false}
      totalReviews={2}
      characteristics={{}}
      productId={0}
      reviews={testReviews}
    />);

    fireEvent.click(screen.getAllByText(/Report/)[0]);
    fireEvent.click(screen.getAllByText(/Report/)[0]);

    await waitFor(() => screen.getByText(/Reported!/));

    expect(screen.getByText(/Reported!/)).toBeInTheDocument();
  });
});

describe('review menu', () => {
  it('doesn\'t render add review button when no more reviews exist', async () => {
    render(<ReviewList
      moreReviewsHandler={() => {}}
      sortChangeHandler={() => {}}
      reviewsRemaining={false}
      totalReviews={2}
      characteristics={{}}
      productId={0}
      reviews={testReviews}
    />);

    expect(screen.queryByText(/Add a review/i)).toBeNull();
  });
});

describe('review modal', () => {
  const portal = document.createElement('div');
  portal.setAttribute('id', 'portal');

  beforeEach(() => {
    document.body.appendChild(portal);

    render(<ReviewList
      moreReviewsHandler={() => {}}
      sortChangeHandler={() => {}}
      reviewsRemaining={false}
      totalReviews={2}
      characteristics={{
        Comfort: {
          id: '200',
          value: '3',
        },
      }}
      productId={0}
      reviews={testReviews}
    />);
  });

  it('render review modal', async () => {
    fireEvent.click(screen.getByText(/Add Review/i));

    await waitFor(() => screen.getByText('Submit'));

    expect(screen.getByText('Submit')).toBeInTheDocument();
  });

  it('doesn\'t close modal on bad form submit', async () => {
    fireEvent.click(screen.getByText(/Add Review/i));

    await waitFor(() => screen.getByText('Submit'));

    fireEvent.click(screen.getByText('Submit'));

    expect(screen.getByText('Submit')).toBeInTheDocument();
    expect(screen.getByText(/please fill out all fields/i)).toBeInTheDocument();
  });

  it('closes modal on background click', async () => {
    fireEvent.click(screen.getByText(/Add Review/i));

    await waitFor(() => screen.getByText('Submit'));

    fireEvent.click(screen.getByTestId('background'));

    expect(screen.queryByText('Submit')).toBeNull();
  });

  it('submits a form', async () => {
    fireEvent.click(screen.getByText(/Add Review/i));

    await waitFor(() => screen.getByText('Submit'));

    fireEvent.change(screen.getByLabelText(/Body/), { target: { value: new Array(51).join('a') } });
    fireEvent.change(screen.getByLabelText(/Summary/), { target: { value: 'testy' } });
    fireEvent.change(screen.getByLabelText(/Rating/), { target: { value: '4' } });
    fireEvent.change(screen.getByLabelText(/Email/), { target: { value: 'tester@email.com' } });
    fireEvent.change(screen.getByLabelText(/Name/), { target: { value: 'nameOfPerson' } });

    fireEvent.click(screen.getByRole('radio', { name: /yes/i }));
    fireEvent.click(screen.getByRole('radio', { name: /no/i }));

    fireEvent.change(screen.getByLabelText(/Comfort/), { target: { value: '2' } });

    fireEvent.click(screen.getByText('Submit'));
  });
});
