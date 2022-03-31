import { useState } from 'react';
import styled from 'styled-components';
import ImageGallery from './imageGallery.jsx';
import ProductInformation from './productInformation.jsx';
import dummyPL from './tempData/dummyProductList.js';
import dummyPI from './tempData/dummyProductInfo.js';
import dummyPS from './tempData/dummyProductStyles.js';

const Container = styled.div`
  display: grid;
  width: 100%;
  height: 10em;
  grid-template-columns: 4fr 3fr;
`

export default function ProductOverview() {

  console.log('product list: ', dummyPL);
  console.log('product info: ', dummyPI);
  console.log('product styles: ', dummyPS);

  return (
    <Container>
      <ImageGallery images={dummyPS}/>
      <ProductInformation product={dummyPI}/>
    </Container>
  )
}