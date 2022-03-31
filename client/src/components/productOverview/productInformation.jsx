import { useState } from 'react';
import styled from 'styled-components';

const Title = styled.div`
  // font-size: 15em;
`

export default function ProductInformation() {
  return(
    <div>
      General Product Info goes here
      <div>Star Rating</div>
      <div>Product Category</div>
      <Title>product title</Title>
      <div>Price</div>
      <div>product overview</div>
      <div>share</div>
    </div>
  )
}