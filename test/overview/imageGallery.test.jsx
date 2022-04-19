import React from 'react';
import { render, cleanup, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';

// eslint-disable-next-line import/no-unresolved
import ImageGallery from 'components/productOverview/imageGallery/imageGallery';

afterEach(cleanup);

const testStyles = {
  product_id: '1',
  results: [
    {
      style_id: 1,
      name: 'Forest Green & Black',
      original_price: '140',
      sale_price: '0',
      'default?': true,
      photos: [
        {
          thumbnail_url: 'urlplaceholder/style_0_photo_number_thumbnail.jpg',
          url: 'urlplaceholder/style_0_photo_number.jpg',
        },
        {
          thumbnail_url: 'urlplaceholder/style_1_photo_number_thumbnail.jpg',
          url: 'urlplaceholder/style_1_photo_number.jpg',
        },
      ],
      skus: {
        37: {
          quantity: 8,
          size: 'XS',
        },
        38: {
          quantity: 16,
          size: 'S',
        },
        39: {
          quantity: 17,
          size: 'M',
        },
      },
    },
  ],
};

describe('Image Gallery', () => {
  it('renders the image elements', () => {
    const { getByTestId } = render(
      <ImageGallery />,
    );

    expect(getByTestId('ImageComponent')).toBeInTheDocument();
  });

  it('test next click event', () => {
    const { getByTestId } = render(
      <ImageGallery
        index={0}
        styles={testStyles}
      />,
    );

    expect(getByTestId('ImageComponent')).toBeInTheDocument();

    fireEvent.click(getByTestId('rightbutton'));
    expect(getByTestId('mainImage')).toHaveAttribute('src', 'urlplaceholder/style_1_photo_number.jpg');

    fireEvent.click(getByTestId('leftbutton'));
    expect(getByTestId('mainImage')).toHaveAttribute('src', 'urlplaceholder/style_0_photo_number.jpg');
  });
});
