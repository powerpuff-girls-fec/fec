import React from 'react';

// eslint-disable-next-line import/no-unresolved
import Stars from 'components/common/Stars';

import { render, cleanup, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

afterEach(cleanup);

it('renders a stars element with 5 of each star', () => {
  render(<Stars stars={3} />);

  expect(screen.getAllByText('☆')).toHaveLength(5);
  expect(screen.getAllByText('★')).toHaveLength(5);
});

it('renders correct number of black stars', () => {
  render(<Stars stars={3} />);

  const stars = screen.getAllByText('★');

  expect(stars).toHaveLength(5);

  expect(stars[0]).toHaveStyle({ width: '100%' });
  expect(stars[1]).toHaveStyle({ width: '100%' });
  expect(stars[2]).toHaveStyle({ width: '100%' });
  expect(stars[3]).toHaveStyle({ width: '0%' });
  expect(stars[4]).toHaveStyle({ width: '0%' });
});

it('renders correct number of black stars with half stars', () => {
  render(<Stars stars={3.5} />);

  const stars = screen.getAllByText('★');

  expect(stars).toHaveLength(5);

  expect(stars[0]).toHaveStyle({ width: '100%' });
  expect(stars[1]).toHaveStyle({ width: '100%' });
  expect(stars[2]).toHaveStyle({ width: '100%' });
  expect(stars[3]).toHaveStyle({ width: '50%' });
  expect(stars[4]).toHaveStyle({ width: '0%' });
});

it('renders correct number of black stars with 3/4 stars', () => {
  render(<Stars stars={2.8} />);

  const stars = screen.getAllByText('★');

  expect(stars).toHaveLength(5);

  expect(stars[0]).toHaveStyle({ width: '100%' });
  expect(stars[1]).toHaveStyle({ width: '100%' });
  expect(stars[2]).toHaveStyle({ width: '60%' });
  expect(stars[3]).toHaveStyle({ width: '0%' });
  expect(stars[4]).toHaveStyle({ width: '0%' });
});

it('renders correct number of black stars with 1/4 stars', () => {
  render(<Stars stars={4.2} />);

  const stars = screen.getAllByText('★');

  expect(stars).toHaveLength(5);

  expect(stars[0]).toHaveStyle({ width: '100%' });
  expect(stars[1]).toHaveStyle({ width: '100%' });
  expect(stars[2]).toHaveStyle({ width: '100%' });
  expect(stars[3]).toHaveStyle({ width: '100%' });
  expect(stars[4]).toHaveStyle({ width: '40%' });
});
