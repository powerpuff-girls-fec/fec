import React from 'react';
import { render, cleanup, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

// eslint-disable-next-line import/no-unresolved
import StyleSelector from 'components/productOverview/styleSelector/styleSelector';
// eslint-disable-next-line import/no-unresolved
import Thumbnail from 'components/productOverview/styleSelector/thumbnailDisplay';

afterEach(cleanup);

describe('Style Selector', () => {
  it('renders the style elements', () => {
    const { getByTestId } = render(<StyleSelector />);

    expect(getByTestId('StyleComponent')).toBeInTheDocument();
    expect(getByTestId('Thumbnails')).toBeInTheDocument();
  });

  it('tests when id is equal to checkIndex', () => {
    const { getByTestId } = render(
      <Thumbnail
        url=""
        id={0}
        checkIndex={0}
        clickHandler={() => {}}
      />,
    );

    expect(getByTestId('Checkmark')).toBeInTheDocument();

    const normalThumbnail = screen.queryByText('noCheck');
    expect(normalThumbnail).toBeNull();
  });
});
