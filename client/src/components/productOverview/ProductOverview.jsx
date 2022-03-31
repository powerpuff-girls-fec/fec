import { useState } from 'react';
import styled from 'styled-components';
import ImageGallery from './imageGallery.jsx';
import ProductInformation from './productInformation.jsx';
import dummyPI from './dummyPI.js';

const Container = styled.div`
  display: grid;
  width: 100%;
  height: 10em;
  grid-template-columns: 4fr 3fr;
`

export default function ProductOverview() {

  return (
    <Container>
      <ImageGallery/>
      <ProductInformation product={dummyPI[0]}/>
    </Container>
  )
}