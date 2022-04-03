import { useState, useEffect } from 'react';
import styled from 'styled-components';
import Size from './size.jsx';
import Quantity from './quantity.jsx'
import AddButton from './addToCartButton.jsx';

const Container = styled.div``

const DropdownsContainer = styled.div``

const compileStyles = (styles) => {
  let styleSizes = [], styleQuantities = [];
  for (let key in styles) {
    styleSizes.push(styles[key].size);
    styleQuantities.push(styles[key].quantity);
  }
  return [styleSizes, styleQuantities];
}

export default function AddToCart({index, styles}) {

  const compiledStyles = compileStyles(styles[index].skus);

  // console.log(styles);

  const [styleSizes, setStyleSizes] = useState(compiledStyles[0]);
  const [styleQuantities, setStyleQuantities] = useState(compiledStyles[1]);

  // const [currentStyle, setCurrentStyle] = useState(index);


  return(
    <Container>
      <DropdownsContainer>
        <Size sizes={styleSizes}/>
        <Quantity quantity={styleQuantities}/>
      </DropdownsContainer>
      <AddButton />
    </Container>
  )
}