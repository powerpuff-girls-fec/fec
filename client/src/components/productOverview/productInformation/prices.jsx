import React from 'react';
import styled from 'styled-components';

export default function Price({ styles }) {
  console.log(styles);
  var price = styles.original_price;
  var discountedPrice = styles.sale_price;

  if (price === discountedPrice) {
    price = '$' + price;
    return(
      <div>{price}</div>
    )
  } else {
    price = '$' + price;
    discountedPrice = '$' + discountedPrice;
    return(
      <div>
        <div><del>{price}</del> {discountedPrice}</div>
      </div>
    )
  }
}