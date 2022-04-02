import { useState, useEffect } from 'react';
import styled from 'styled-components';
import Thumbnail from './thumbnailDisplay.jsx';

const Container = styled.div``

const compileStyles = (styles) => {
  let styleUrls = [];
  let styleNames = [];
  for (let i = 0; i < styles.length; i++) {
    styleUrls.push(styles[i].photos[0].thumbnail_url);
    styleNames.push(styles[i].name);
  }
  return [styleUrls, styleNames]
}

export default function StyleSelector(props) {
  var styles = compileStyles(props.styles);

  var stylesUrls = styles[0];
  var stylesName = styles[1];

  console.log('stylesUrls: ', stylesUrls);
  console.log('stylesName: ', stylesName)

  return(
    <Container>
      <div>styles</div>
      <Thumbnail>
        {stylesUrls.map((url, key) => <img src={url} key={key} alt="placeholder"></img>)}
      </Thumbnail>
    </Container>
  )
}