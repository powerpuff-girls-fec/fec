import { useState } from 'react';
import styled from 'styled-components';

const MainImage = styled.img`
  width: 75%;
  height: auto;
  background-color: grey;
`

export default function ImageGallery(props) {
  // console.log(props.styles.results[0].photos[0].thumbnail_url)

  var image = "https://cdn.nba.com/manage/2022/01/image1-1-e1643120983945.png";

  return(
  <MainImage src={image}></MainImage>
  )
}