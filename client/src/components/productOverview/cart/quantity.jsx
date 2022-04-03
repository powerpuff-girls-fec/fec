import { useState, useEffect } from 'react';
import styled from 'styled-components';

const QuantityContainer = styled.div``

export default function Quantity(props) {

  if (props.quantity[0] === '-') {
    return(
      <QuantityContainer>
        <select name="quantity" disabled>
          <option>-</option>
        </select>
      </QuantityContainer>
    )
  } else {
    return(
      <QuantityContainer>
        <select name="quantity">
          {props.quantity.map((quantity, key) => <option value={quantity} key={key}>{quantity}</option>)}
        </select>
      </QuantityContainer>
    )
  }
}