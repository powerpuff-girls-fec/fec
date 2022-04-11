import React from 'react';
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom';

// eslint-disable-next-line import/no-unresolved
import ProductOverview from 'components/productOverview/productOverview';

afterEach(cleanup);

describe('ProductOverview', () => {
  it('renders the product overview', () => {
    const { getByTestId } = render(<ProductOverview productID={65632} />);

    expect(getByTestId('ProductOverview')).toBeInTheDocument();
  });
});
