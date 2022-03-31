import { useEffect, useState } from 'react';
import axios from 'axios';
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

// this is jsut ripped from what sean did, consider altering:
  // different url/endpoints for different request types
  // separating into separate module
  // making generic get function, just alter url put in
const getProductList = (url) => {
  const [productData, setProductData] = useState(productData);

  useEffect(() => {
    axios.get(url)
    .then((result) => {
      setProductData(result);
    })
    .catch((err) => {
      console.log('err at getProductList ', err);
    })
  }, [url])

  return productData;
}

export default function ProductOverview() {
  // let productList = getProductList('/product');

  console.log('product list: ', dummyPL);
  console.log('product info: ', dummyPI);
  console.log('product styles: ', dummyPS);

  return (
    <Container>
      <ImageGallery styles={dummyPS}/>
      <ProductInformation product={dummyPI}/>
    </Container>
  )
}