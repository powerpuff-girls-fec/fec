import React from 'react';
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom';

// eslint-disable-next-line import/no-unresolved
import ProductInformation from 'components/productOverview/productInformation/productInformation';

afterEach(cleanup);

describe('ProductInformation', () => {
  it('renders the product info elements', () => {
    const { getByTestId } = render(<ProductInformation />);

    expect(getByTestId('ProductInformation')).toBeInTheDocument();
    expect(getByTestId('ShareButtons')).toBeInTheDocument();
    expect(getByTestId('Reviews')).toBeInTheDocument();
  });
});
