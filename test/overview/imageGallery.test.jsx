import React from 'react';
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom';

// eslint-disable-next-line import/no-unresolved
import ImageGallery from 'components/productOverview/imageGallery/imageGallery';

afterEach(cleanup);

describe('Image Gallery', () => {
  it('renders the image elements', () => {
    const { getByTestId } = render(
      <ImageGallery />,
      // input={here}
      // />,
    );

    expect(getByTestId('ImageComponent')).toBeInTheDocument();
  });
});
