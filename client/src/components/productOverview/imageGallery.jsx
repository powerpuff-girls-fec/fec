import { useState } from 'react';
import styled from 'styled-components';
import Carousel from './carousel.jsx';

const compileImageList = () => {


}

export default function ImageGallery(props) {
  console.log(props.styles[0].photos);

  // var compiledImageList = compileImageList(props.styles[0].photos);
  var image = props.styles[0].photos[0].url;
  var image2 = props.styles[0].photos[1].url;

  return(
    <div>
      <Carousel>
        <img src={image} alt="placeholder"></img>
        <img src={image2} alt="placeholder"></img>
      </Carousel>
    </div>
  )
}