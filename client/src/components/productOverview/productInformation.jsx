import { useState } from 'react';
import styled from 'styled-components';

const Container = styled.div`
display: grid;
width: 100%;
height: 10em;
grid-template-rows: 1fr 1fr 1fr 1fr 1fr 1fr;
`

const Category = styled.div``

const Title = styled.div``

const ShareButtons = styled.div`
  display: flex;
  flex-direction: row;
`

export default function ProductInformation(props) {
  return(
    <Container>
      <div>Star Rating</div>
      <Category>{props.product.category}</Category>
      <Title>{props.product.name}</Title>
      <div>{props.product.default_price}</div>
      <div>{props.product.description}</div>
      <ShareButtons>
        <div>Facebook</div>
        <div>Twitter</div>
        <div>Pinterest</div>
      </ShareButtons>
    </Container>
  )
}