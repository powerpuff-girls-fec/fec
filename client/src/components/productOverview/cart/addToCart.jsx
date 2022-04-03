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

  const [styleID, setStyleID] = useState(styles[index].style_id);
  const [styleSizes, setStyleSizes] = useState(compiledStyles[0]);
  const [styleQuantities, setStyleQuantities] = useState(compiledStyles[1]);
  const [selectedSize, setSelectedSize] = useState('-');
  const [quantityRange, setQuantityRange] = useState([]);

  if (styleID != styles[index].style_id) {
    setStyleID(styles[index].style_id);
    setStyleSizes(compiledStyles[0]);
    setStyleQuantities(compiledStyles[1]);
  }

  const trackSizeSelection = (event) => {
    var index = event.target.value;
    setSelectedSize(styleSizes[index]);

    var maxPurchasable = 15, arrayOfQuantities = [];
    if (styleQuantities[index] < maxPurchasable) {
      maxPurchasable = styleQuantities[index];
    }

    for (let i = 1; i <= maxPurchasable; i++) {
      arrayOfQuantities.push(i);
    }
    setQuantityRange(arrayOfQuantities);
  }

  return(
    <Container>
      <DropdownsContainer>
        <Size sizes={styleSizes} selectHandler={trackSizeSelection} />
        <Quantity quantity={quantityRange}/>
      </DropdownsContainer>
      <AddButton />
    </Container>
  )
}