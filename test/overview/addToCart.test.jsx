import React from 'react';
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom';

// eslint-disable-next-line import/no-unresolved
import AddToCart from 'components/productOverview/cart/addToCart';

afterEach(cleanup);

// const testStyles = {
//   product_id: '1',
//   results: [
//     {
//       style_id: 1,
//       name: 'Forest Green & Black',
//       original_price: '140',
//       sale_price: '0',
//       'default?': true,
//       photos: [
//         {
//           thumbnail_url: 'urlplaceholder/style_1_photo_number_thumbnail.jpg',
//           url: 'urlplaceholder/style_1_photo_number.jpg',
//         },
//         {
//           thumbnail_url: 'urlplaceholder/style_1_photo_number_thumbnail.jpg',
//           url: 'urlplaceholder/style_1_photo_number.jpg',
//         },
//       ],
//       skus: {
//         37: {
//           quantity: 8,
//           size: 'XS',
//         },
//         38: {
//           quantity: 16,
//           size: 'S',
//         },
//         39: {
//           quantity: 17,
//           size: 'M',
//         },
//       },
//     },
//   ],
// };

describe('AddToCart', () => {
  it('renders the cart elements', () => {
    const { getByTestId } = render(
      <AddToCart />,
      // index={0}
      // styles={{ testStyles.results }}
      // createCartTicket={() => {}}
      // />,
    );

    expect(getByTestId('AddToCartButton')).toBeInTheDocument();
    expect(getByTestId('Quantity')).toBeInTheDocument();
    expect(getByTestId('Size')).toBeInTheDocument();
  });
});
