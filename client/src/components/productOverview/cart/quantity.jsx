import { useState, useEffect } from 'react';
import styled from 'styled-components';

const QuantityContainer = styled.div``

export default function Quantity(props) {
  const selectHandler = props.selectHandler;

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
        <select name="quantity" onChange={() => {selectHandler(event)}}>
          {props.quantity.map((quantity, key) => <option value={quantity} key={key}>{quantity}</option>)}
        </select>
      </QuantityContainer>
    )
  }
}