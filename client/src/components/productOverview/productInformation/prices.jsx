import React from 'react';
import PropTypes from 'prop-types';
// import styled from 'styled-components';

export default function Price({ styles }) {
  const price = styles.original_price;
  const discountedPrice = styles.sale_price;

  if (discountedPrice === null) {
    const displayPrice = `$${price}`;
    return (
      <div>{displayPrice}</div>
    );
  }
  const displayPrice = `$${price}`;
  const discountedDisplayPrice = `$${discountedPrice}`;
  return (
    <div>
      <div>
        <del>{displayPrice}</del>
        {discountedDisplayPrice}
      </div>
    </div>
  );
}

Price.propTypes = {
  styles: PropTypes.shape({
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
  }),
};

Price.defaultProps = {
  styles: {
    style_id: '',
    name: '',
    original_price: '',
    sale_price: null,
    default: false,
    photos: [{
      thumbnail_url: '',
      url: '',
    }],
    skus: {
      2352322: {
        quantity: 0,
        size: '',
      },
    },
  },
};
