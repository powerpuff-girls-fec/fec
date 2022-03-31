import { useState } from 'react';
import styled from 'styled-components';

const Container = styled.div`
display: grid;
width: 100%;
height: 10em;
grid-template-rows: 1fr 1fr 1fr 1fr 1fr 1fr;
`

const Category = styled.div`

`

const Title = styled.div`

`

export default function ProductInformation(props) {

  return(
    <Container>
      <div>Star Rating</div>
      <div>{props.product.category}</div>
      <div>{props.product.name}</div>
      <div>{props.product.default_price}</div>
      <div>{props.product.description}</div>
      <div>share</div>
    </Container>
  )
}