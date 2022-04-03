import { useState, useEffect } from 'react';
import styled from 'styled-components';

const ThumbnailContainer = styled.div`
  width: 50px;
  height: 50px;
`

const ThumbnailBubble = styled.img`
  width: 50px;
  height: 50px;
`

export default function Thumbnail({ url, clickHandler }) {
  return(
    <ThumbnailContainer>
      <ThumbnailBubble src={url} onClick={() => {clickHandler(url)}} />
    </ThumbnailContainer>
  )
}