import React from 'react';
import PropTypes from 'prop-types';
// import styled from 'styled-components';

export default function Price({ styles }) {
  let price = styles.original_price;
  let discountedPrice = styles.sale_price;

  if (price === discountedPrice) {
    price = '$' + price;
    return (
      <div>{price}</div>
    );
  }
  price = '$' + price;
  discountedPrice = '$' + discountedPrice;
  return (
    <div>
      <div>
        <del>{price}</del>
        {discountedPrice}
      </div>
    </div>
  );
}

Price.propTypes = {
  styles: PropTypes.shape({
    product_id: PropTypes.string,
    results: PropTypes.shape({
      styled_id: PropTypes.number,
      name: PropTypes.string,
      original_price: PropTypes.number,
      sale_price: PropTypes.number,
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
    }),
  }),
};

Price.defaultProps = {
  styles: {
    product_id: '0',
    results: {
      style_id: 0,
      name: '',
      original_price: 0,
      sale_price: 0,
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
    },
  },
};
