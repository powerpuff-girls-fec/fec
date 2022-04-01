import { useState } from 'react';
import styled from 'styled-components';
import Facebook from './shareButtons/facebookShare.jsx';
import Twitter from './shareButtons/twitterShare.jsx';
import Pinterest from './shareButtons/pinterestShare.jsx';
import Stars from '../common/Stars.jsx';

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

const Review = styled.div``

const onFacebookClick = () => {
  window.open('https://www.facebook.com/sharer','Facebook','height=550,width=660,resizable=1');
}

const onTwitterClick = () => {
  window.open('https://twitter.com/intent/tweet','Twitter','height=550,width=660,resizable=1');
}

const onPinterestClick = () => {
  window.open('https://www.pinterest.com/pin/create/button','Pinterest','height=550,width=660,resizable=1');
}

const averageReviews = (reviews) => {
  var total = 0, count = 0;
  for (var key in reviews) {
    total += reviews[key];
    count += 1;
  }
  return total / count;
}

export default function ProductInformation(props) {

  const averageRating = averageReviews(props.review.ratings);

  return(
    <Container>
      <Review>
        <Stars stars={averageRating} />
      </Review>
      <Category>{props.product.category}</Category>
      <Title>{props.product.name}</Title>
      {/* price will need to deal with sales, need to see what that looks like */}
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