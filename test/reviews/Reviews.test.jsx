import React from 'react';

import {
  render, fireEvent, cleanup, screen, waitForElementToBeRemoved,
} from '@testing-library/react';
import '@testing-library/jest-dom';
import { rest } from 'msw';
import { setupServer } from 'msw/node';

/* eslint-disable import/no-unresolved */
import Reviews from 'components/reviews/Reviews';
/* eslint-enable import/no-unresolved */

import testMetadata from './test-data/testMetadata.json';
import testReviews from './test-data/testReviews.json';

const localHost = 'http://localhost/';

const metadataResponse = rest.get(
  `${localHost}api/reviews/meta/65631`,
  (req, res, ctx) => res(ctx.json(testMetadata)),
);
const reviewsResponse = rest.get(
  `${localHost}api/reviews/65631`,
  (req, res, ctx) => res(ctx.json(testReviews)),
);

const handlers = [metadataResponse, reviewsResponse];

// eslint-disable-next-line
const server = new setupServer(...handlers);

beforeAll(() => server.listen());
afterEach(() => {
  server.resetHandlers();
  cleanup();
});
afterAll(() => server.close());

it('renders a review', async () => {
  render(<Reviews productId={65631} />);

  await waitForElementToBeRemoved(() => screen.getAllByText(/NaN/i)[0]);

  expect(screen.getByText('I recommend this product')).toBeInTheDocument();
});

it('adds more reviews', async () => {
  render(<Reviews productId={65631} />);

  await waitForElementToBeRemoved(() => screen.getAllByText(/NaN/i)[0]);

  fireEvent.click(screen.getByText('More Reviews'));
});

it('runs add a form', async () => {
  const portal = document.createElement('div');
  portal.setAttribute('id', 'portal');

  document.body.append(portal);

  render(<Reviews productId={65631} />);

  await waitForElementToBeRemoved(() => screen.getAllByText(/NaN/i)[0]);

  fireEvent.click(screen.getByText(/Add review/i));
});
