import { useState } from 'react';
import styled from 'styled-components';
import Carousel from './carousel.jsx';

const compileImageList = (photos) => {
  var listOfPhotos = [];
  for (let i = 0; i < photos.length; i++) {
    listOfPhotos.push(photos[i].url);
  }
  return listOfPhotos;
}

export default function ImageGallery(props) {
  var compiledImageList = compileImageList(props.styles[0].photos);

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