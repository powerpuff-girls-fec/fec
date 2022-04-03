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
  var index = props.index;
  var compiledImageList = compileImageList(props.styles[index].photos);

  return(
    <div>
      <Carousel>
        {compiledImageList.map((url, key) => <img src={url} key={key} alt="placeholder"></img>)}
      </Carousel>
    </div>
  )
}