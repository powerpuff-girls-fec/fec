import { useState } from 'react';
import styled from 'styled-components';
import Facebook from './shareButtons/facebookShare.jsx';
import Twitter from './shareButtons/twitterShare.jsx';
import Pinterest from './shareButtons/pinterestShare.jsx';

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
  padding-top: 5px;
`

const onFacebookClick = () => {
  window.open('https://www.facebook.com/sharer','Facebook','height=550,width=660,resizable=1');
}

const onTwitterClick = () => {
  window.open('https://twitter.com/intent/tweet','Twitter','height=550,width=660,resizable=1');
}

const onPinterestClick = () => {
  window.open('https://www.pinterest.com/pin/create/button','Pinterest','height=550,width=660,resizable=1');
}

export default function ProductInformation(props) {
  return(
    <Container>
      <div>Rating info goes here</div>
      <Category>{props.product.category}</Category>
      <Title>{props.product.name}</Title>
      {/* price will need to deal with sales */}
      <div>{props.product.default_price}</div>
      <div>{props.product.description}</div>
      <ShareButtons>
        <Facebook clickHandler={onFacebookClick}/>
        <Twitter clickHandler={onTwitterClick}/>
        <Pinterest clickHandler={onPinterestClick}/>
      </ShareButtons>
    </Container>
  )
}