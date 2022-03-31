import { useEffect, useState } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import ImageGallery from './imageGallery.jsx';
import ProductInformation from './productInformation.jsx';
import StyleSelector from './styleSelector.jsx';
import AddToCart from './addToCart.jsx';

// this sample data needs to be removed once client is connected to server
import dummyPL from './tempData/dummyProductList.js';
import dummyPI from './tempData/dummyProductInfo.js';
import dummyPS from './tempData/dummyProductStyles.js';

const Container = styled.div`
  display: grid;
  width: 100%;
  height: 10em;
  grid-template-columns: 4fr 3fr;
`

const RightColumn = styled.div`
  display: grid;
  grid-template-rows: 2fr 1fr 1fr;
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
  // var productList = getProductList('/product');
  // var productStylesList = getProductList('/products/:product_id');
  // var productRatings = getProductList('/review/meta');

  // to refactor with server access, need to access product info, product styles, and product ratings
  var productInfo = dummyPI;
  var productStylesList = dummyPS.results;

  // console.log('product list: ', dummyPL);
  console.log('product info: ', productInfo);
  console.log('product styles: ', productStylesList);

  return (
    <Container>
      <ImageGallery styles={productStylesList}/>
      <RightColumn>
        <ProductInformation product={productInfo}/>
        <StyleSelector />
        <AddToCart />
      </RightColumn>
    </Container>
  )
}