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
  window.open('https://www.facebook.com/sharer.php?u=https%3A%2F%2Ffavpng.com%2Fpng_view%2Fshares-share-icon-sharing-png%2FqXRqwYFE/','Facebook','height=550,width=660,resizable=1')
}

const onTwitterClick = () => {
  window.open('https://twitter.com/intent/tweet?url=https%3A%2F%2Ffavpng.com%2Fpng_view%2Fshares-share-icon-sharing-png%2FqXRqwYFE/','Twitter','height=550,width=660,resizable=1');
}

const onPinterestClick = () => {
  window.open('https://www.pinterest.com/pin/create/button/?url=https%3A%2F%2Ffavpng.com%2Fpng_view%2Fshares-share-icon-sharing-png%2FqXRqwYFE/&amp;media=https%3A%2F%2Fimg.favpng.com%2F17%2F4%2F25%2Fcomputer-icons-share-icon-sharing-png-favpng-q0nTUpQRiwdXb5aeHu2RS6MuU.jpg&amp;title=Shares+-+Share+Icon+Sharing+PNG&amp;description=Shares+-+Share+Icon+Sharing+PNG - share+icon%2C+brand%2C+button%2C+computer+software%2C+facebook','Pinterest','height=550,width=660,resizable=1');
}

export default function ProductInformation(props) {
  return(
    <Container>
      <div>Rating info goes here</div>
      <Category>{props.product.category}</Category>
      <Title>{props.product.name}</Title>
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