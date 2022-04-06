import React, { useState } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import Thumbnail from './thumbnailDisplay';

const Container = styled.div`
  height: 100%;
  width: 100%;
  border: 1px solid black;
`;

const StyleName = styled.div``;

const ThumbnailWrapper = styled.div`
  display: grid;
  grid-template-columns: 25% 25% 25% 25%;
`;

const compileStyles = (styles) => {
  const styleUrls = [];
  const styleNames = [];
  for (let i = 0; i < styles.length; i += 1) {
    styleUrls.push(styles[i].photos[0].thumbnail_url);
    styleNames.push(styles[i].name);
  }
  return [styleUrls, styleNames];
};

export default function StyleSelector({ styles, handleIndexChange }) {
  const stylesInfo = compileStyles(styles.results);
  const stylesList = stylesInfo[0];
  const stylesNames = stylesInfo[1];

  const [currentCheckPosition, setCurrentCheckPosition] = useState(0);
  const [currentStyle, setCurrentStyle] = useState(stylesList[0]);
  const [currentName, setCurrentName] = useState(stylesNames[0]);

  const styleChangeHandler = (url) => {
    console.log(url);
    for (let i = 0; i < stylesList.length; i += 1) {
      if (stylesList[i] === url) {
        if (stylesList[i] !== currentStyle) {
          setCurrentStyle(stylesList[i]);
          setCurrentName(stylesNames[i]);
          setCurrentCheckPosition(i);
          handleIndexChange(i);
        }
      }
    }
  };

  return (
    <Container>
      <StyleName>
        {currentName}
      </StyleName>
      <ThumbnailWrapper>
        {stylesList.map((url, key) => <Thumbnail url={url} key={key} id={key} clickHandler={styleChangeHandler} checkIndex={currentCheckPosition} />)}
      </ThumbnailWrapper>
    </Container>
  );
}

StyleSelector.propTypes = {
  styles: PropTypes.shape({
    product_id: PropTypes.string,
    results: PropTypes.arrayOf(PropTypes.shape({
      styled_id: PropTypes.number,
      name: PropTypes.string,
      original_price: PropTypes.string,
      sale_price: PropTypes.string,
      default: PropTypes.bool,
      photos: PropTypes.arrayOf(PropTypes.shape({
        thumbnail_url: PropTypes.string,
        url: PropTypes.string,
      })),
      skus: PropTypes.shape({
        37: PropTypes.shape({
          quantity: PropTypes.number,
          size: PropTypes.string,
        }),
        38: PropTypes.shape({
          quantity: PropTypes.number,
          size: PropTypes.string,
        }),
        39: PropTypes.shape({
          quantity: PropTypes.number,
          size: PropTypes.string,
        }),
      }),
    })),
  }),
  handleIndexChange: PropTypes.func,
};

StyleSelector.defaultProps = {
  styles: {
    product_id: '0',
    results: [{
      style_id: 0,
      name: '',
      original_price: '0',
      sale_price: '0',
      default: false,
      photos: [{
        thumbnail_url: '',
        url: '',
      }],
      skus: {
        37: {
          quantity: 0,
          size: '',
        },
        38: {
          quantity: 0,
          size: '',
        },
        39: {
          quantity: 0,
          size: '',
        },
      },
    }],
  },
  handleIndexChange: () => {},
};
