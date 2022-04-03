import { useState, useEffect } from 'react';
import styled from 'styled-components';
import Thumbnail from './thumbnailDisplay.jsx';

const Container = styled.div``

const StyleName = styled.div``

const ThumbnailWrapper = styled.div`
  display: flex;
  flex-direction: row;
  padding-top: 5px;
`

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
  const handleIndexChange = props.handleIndexChange;
  const styles = compileStyles(props.styles);

  const [stylesList, setStylesList] = useState(styles[0]);
  const [stylesNames, setStylesNames] = useState(styles[1]);
  const [currentStyle, setCurrentStyle] = useState(stylesList[0]);
  const [currentName, setCurrentName] = useState(stylesNames[0]);

  const styleChangeHandler = (url) => {
    for (let i = 0; i < stylesList.length; i++) {
      if (stylesList[i] === url) {
        if (stylesList[i] !== currentStyle) {
          setCurrentStyle(stylesList[i]);
          setCurrentName(stylesNames[i]);
          handleIndexChange(i);
        }
      }
    }
  }

  // console.log('general styles info: ', styles)
  // console.log('stylesUrls: ', stylesList);
  // console.log('stylesName: ', stylesNames);


  return(
    <Container>
      <StyleName>
        {currentName}
      </StyleName>
      <ThumbnailWrapper>
        {stylesList.map((url, key) => {
          return (
            <Thumbnail url={url} key={key} clickHandler={styleChangeHandler} />
          )
        })}
      </ThumbnailWrapper>
    </Container>
  )
}