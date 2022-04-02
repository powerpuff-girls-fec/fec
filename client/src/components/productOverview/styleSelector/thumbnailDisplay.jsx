import { useState, useEffect } from 'react';
import styled from 'styled-components';

const StyleContainer = styled.div``

const ThumbnailBubble = styled.div`
  border-radius: 50%;
`

export default function Thumbnail(props) {
  const { children } = props;

  console.log(props.children);
  return(
    <StyleContainer>
      <ThumbnailBubble>
        {children}
      </ThumbnailBubble>
    </StyleContainer>
  )
}