import React from 'react';
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom';

// eslint-disable-next-line import/no-unresolved
import AddToCart from 'components/productOverview/cart/addToCart';
// eslint-disable-next-line import/no-unresolved
// import AddButton from 'components/productOverview/cart/addToCartButton';

afterEach(cleanup);

describe('AddToCart', () => {
  it('renders the cart elements', () => {
    const { getByTestId } = render(<AddToCart />);

    expect(getByTestId('Cart')).toBeInTheDocument();

    expect(getByTestId('Quantity')).toBeInTheDocument();
    expect(getByTestId('Size')).toBeInTheDocument();
  });
});
