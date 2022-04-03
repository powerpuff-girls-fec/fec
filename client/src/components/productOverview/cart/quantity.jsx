import { useState, useEffect } from 'react';
import styled from 'styled-components';

const QuantityContainer = styled.div``

export default function Quantity(props) {
  return(
    <QuantityContainer>
      <select name="quantity">
        <option>Select Quantity</option>
        {props.quantity.map((quantity, key) => <option value={quantity} key={key}>{quantity}</option>)}
      </select>
    </QuantityContainer>
  )
}