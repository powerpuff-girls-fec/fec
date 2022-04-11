import React from 'react';
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom';

// eslint-disable-next-line import/no-unresolved
import StyleSelector from 'components/productOverview/styleSelector/styleSelector';

afterEach(cleanup);

describe('Style Selector', () => {
  it('renders the style elements', () => {
    const { getByTestId } = render(
      <StyleSelector />,
      // input={here}
      // />,
    );

    expect(getByTestId('StyleComponent')).toBeInTheDocument();
    expect(getByTestId('Thumbnails')).toBeInTheDocument();
  });
});
