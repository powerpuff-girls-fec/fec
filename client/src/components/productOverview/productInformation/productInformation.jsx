import { useState } from 'react';
import styled from 'styled-components';
import Facebook from './shareButtons/facebookShare.jsx';
import Twitter from './shareButtons/twitterShare.jsx';
import Pinterest from './shareButtons/pinterestShare.jsx';
import Price from './prices.jsx';
import Stars from './Stars.jsx';

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

const Review = styled.div`
  display: flex;
  flex-direction: row;
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

const averageReviews = (reviews) => {
  var total = 0, count = 0;
  for (var key in reviews) {
    total += reviews[key];
    count += 1;
  }
  return [total / count, count];
}

export default function ProductInformation(props) {

  const ratingInfo = averageReviews(props.review.ratings);
  const averageRating = ratingInfo[0];
  const ratingCount = ratingInfo[1];
  const index = props.index;

  return(
    <Container>
      <Review>
        <Stars stars={averageRating} />
        {/* this link needs to be changed to the ratings section of the page.*/}
        <div><a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ">Read all {ratingCount} reviews</a></div>
      </Review>
      <Category>{props.product.category}</Category>
      <Title>{props.product.name}</Title>
      <Price styles={props.styles[index]}/>
      <div>{props.product.description}</div>
      <ShareButtons>
        <Facebook clickHandler={onFacebookClick}/>
        <Twitter clickHandler={onTwitterClick}/>
        <Pinterest clickHandler={onPinterestClick}/>
      </ShareButtons>
    </Container>
  )
}