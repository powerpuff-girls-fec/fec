import React from 'react';
import PropTypes from 'prop-types';

import Carousel from './carousel';

const compileImageList = (photos) => {
  const listOfPhotos = [];
  for (let i = 0; i < photos.length; i + 1) {
    listOfPhotos.push(photos[i].url);
  }
  return listOfPhotos;
};

export default function ImageGallery({ index, styles }) {
  const compiledImageList = compileImageList(styles.results[index].photos);

  return (
    <div>
      <Carousel>
        {compiledImageList.map((url, key) => <img src={url} key={key} alt="placeholder" />)}
      </Carousel>
    </div>
  );
}

ImageGallery.propTypes = {
  index: PropTypes.number,
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
};

ImageGallery.defaultProps = {
  index: 0,
  styles: {
    product_id: '',
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
};
