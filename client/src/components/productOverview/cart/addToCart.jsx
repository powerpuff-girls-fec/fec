import React, { useState } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Size from './size';
import Quantity from './quantity';
import AddButton from './addToCartButton';

const Container = styled.div``;

const DropdownsContainer = styled.div`
  display: flex;
  flex-direction: row;
`;

const compileStyles = (styles) => {
  const styleSizes = [];
  const styleQuantities = [];

  const values = Object.values(styles);

  for (let i = 0; i < values.length; i += 1) {
    styleSizes.push(values[i].size);
    styleQuantities.push(values[i].quantity);
  }
  return [styleSizes, styleQuantities];
};

export default function AddToCart({ index, styles, createCartTicket }) {
  const compiledStyles = compileStyles(styles.results[index].skus);
  let maxPurchasable = 15;
  const arrayOfQuantities = [];
  let ticketInfo = [];

  const [styleID, setStyleID] = useState(styles.results[index].style_id);
  const [styleSizes, setStyleSizes] = useState(compiledStyles[0]);
  const [styleQuantities, setStyleQuantities] = useState(compiledStyles[1]);
  const [selectedSize, setSelectedSize] = useState('-');
  const [selectedQuantity, setSelectedQuantity] = useState(1);
  const [quantityRange, setQuantityRange] = useState([-1]);

  if (styleID !== styles.results[index].style_id) {
    setStyleID(styles.results[index].style_id);
    setStyleSizes(compiledStyles[0]);
    setStyleQuantities(compiledStyles[1]);
  }

  const trackSizeSelection = (event) => {
    const indexOfSelection = event.target.value;
    setSelectedSize(styleSizes[indexOfSelection]);

    if (indexOfSelection === 'Select Size') {
      setSelectedSize('-');
      setQuantityRange([-1]);
      setSelectedQuantity(0);
    } else {
      if (styleQuantities[indexOfSelection] < maxPurchasable) {
        maxPurchasable = styleQuantities[indexOfSelection];
      }

      for (let i = 1; i <= maxPurchasable; i += 1) {
        arrayOfQuantities.push(i);
      }
      setQuantityRange(arrayOfQuantities);
    }
  };

  const trackQuantitySelection = (event) => {
    setSelectedQuantity(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    ticketInfo = { size: selectedSize, quantity: selectedQuantity };
    createCartTicket(ticketInfo);
  };

  return (
    <Container>
      <DropdownsContainer>
        <Size sizes={styleSizes} selectHandler={trackSizeSelection} />
        <Quantity quantity={quantityRange} selectHandler={trackQuantitySelection} />
      </DropdownsContainer>
      <AddButton selectedSize={selectedSize} handleSubmit={handleSubmit} />
    </Container>
  );
}

AddToCart.propTypes = {
  index: PropTypes.number,
  styles: PropTypes.shape({
    product_id: PropTypes.string,
    results: PropTypes.arrayOf(PropTypes.shape({
      style_id: PropTypes.number,
      name: PropTypes.string,
      original_price: PropTypes.string,
      sale_price: PropTypes.string,
      default: PropTypes.bool,
      photos: PropTypes.arrayOf(PropTypes.shape({
        thumbnail_url: PropTypes.string,
        url: PropTypes.string,
      })),
      skus: PropTypes.shape({}),
    })),
  }),
  createCartTicket: PropTypes.func,
};

AddToCart.defaultProps = {
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
        2352322: {
          quantity: 0,
          size: '',
        },
      },
    }],
  },
  createCartTicket: () => {},
};
