import { useState, useEffect } from 'react';
import styled from 'styled-components';
import Checkmark from './checkmark.jsx';

const ThumbnailContainer = styled.div`
  border-style: solid;
  flex-grow: 1;
  height: 50px;
`

const ThumbnailBubble = styled.img`
  width: 50px;
  height: 50px;
`

export default function Thumbnail({ url, id, checkIndex, clickHandler }) {
  if (id === checkIndex) {
    return(
      <ThumbnailContainer onClick={() => {clickHandler(url)}}>
        <Checkmark />
        <ThumbnailBubble src={url} />
      </ThumbnailContainer>
    )
  } else {
    return(
      <ThumbnailContainer onClick={() => {clickHandler(url)}}>
        <ThumbnailBubble src={url} />
      </ThumbnailContainer>
    )
  }
}