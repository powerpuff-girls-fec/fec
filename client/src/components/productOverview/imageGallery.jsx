import { useState } from 'react';
import styled from 'styled-components';
import Carousel from './carousel.jsx';

const compileImageList = () => {}

export default function ImageGallery(props) {
  // console.log(props.styles[0].photos);

  // var compiledImageList = compileImageList(props.styles[0].photos);
  var image = props.styles[0].photos[0].url;
  var image2 = props.styles[0].photos[1].url;

  var compiledImageList = [image, image2]

  return(
    <div>
      <Carousel>
        {/* <img src={image} alt="placeholder"></img> */}
        {/* <img src={image2} alt="placeholder"></img> */}
        {compiledImageList.map((url, key) => <img src={url} key={key} alt="placeholder"></img>)}
      </Carousel>
    </div>
  )
}