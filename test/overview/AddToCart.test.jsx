import React from 'react';
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom';

// eslint-disable-next-line import/no-unresolved
import AddToCart from 'components/productOverview/cart/addToCart';

afterEach(cleanup);

describe('ProductOverview', () => {
  it('renders the cart elements', () => {
    const { getByTestId } = render(<AddToCart productID={65632} />);

    expect(getByTestId('AddToCartButton')).toBeInTheDocument();
    expect(getByTestId('Quantity')).toBeInTheDocument();
    expect(getByTestId('Size')).toBeInTheDocument();
  });
});
