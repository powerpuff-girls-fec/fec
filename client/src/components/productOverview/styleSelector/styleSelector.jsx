import { useState, useEffect } from 'react';
import styled from 'styled-components';
import Thumbnail from './thumbnailDisplay.jsx';
const Container = styled.div`
  height: 100%;
  width: 100%;
  border: 1px solid black;
`

const StyleName = styled.div``

const ThumbnailWrapper = styled.div`
  display: grid;
  grid-template-columns: 25% 25% 25% 25%;
`

const compileStyles = (styles) => {
  let styleUrls = [], styleNames = [];
  for (let i = 0; i < styles.length; i++) {
    styleUrls.push(styles[i].photos[0].thumbnail_url);
    styleNames.push(styles[i].name);
  }
  return [styleUrls, styleNames];
}


export default function StyleSelector(props) {
  const handleIndexChange = props.handleIndexChange;
  const styles = compileStyles(props.styles);

  const [stylesList, setStylesList] = useState(styles[0]);
  const [stylesNames, setStylesNames] = useState(styles[1]);
  const [currentCheckPosition, setCurrentCheckPosition] = useState(0);
  const [currentStyle, setCurrentStyle] = useState(stylesList[0]);
  const [currentName, setCurrentName] = useState(stylesNames[0]);

  const styleChangeHandler = (url) => {
    for (let i = 0; i < stylesList.length; i++) {
      if (stylesList[i] === url) {
        if (stylesList[i] !== currentStyle) {
          setCurrentStyle(stylesList[i]);
          setCurrentName(stylesNames[i]);
          setCurrentCheckPosition(i);
          handleIndexChange(i);
        }
      }
    }
  }

  return(
    <Container>
      <StyleName>
        {currentName}
      </StyleName>
      <ThumbnailWrapper>
        {stylesList.map((url, key) => {
          return (
            <Thumbnail url={url} key={key} id={key} clickHandler={styleChangeHandler} checkIndex={currentCheckPosition}/>
          )
        })}
      </ThumbnailWrapper>
    </Container>
  )
}