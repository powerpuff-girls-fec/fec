import { useEffect, useState } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import ImageGallery from './imageGallery/imageGallery.jsx';
import ProductInformation from './productInformation/productInformation.jsx';
import StyleSelector from './styleSelector/styleSelector.jsx';
import AddToCart from './cart/addToCart.jsx';

// this sample data needs to be removed once client is connected to server
import dummyPL from './tempData/dummyProductList.js';
import dummyPI from './tempData/dummyProductInfo.js';
import dummyPS from './tempData/dummyProductStyles.js';
import dummyRD from './tempData/dummyReviewMetadata.js';

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
// const getProductList = (url) => {
//   const [productData, setProductData] = useState(productData);

//   useEffect(() => {
//     axios.get(url)
//     .then((result) => {
//       setProductData(result);
//     })
//     .catch((err) => {
//       console.log('err at getProductList ', err);
//     })
//   }, [url])

//   return productData;
// }


export default function ProductOverview() {
  // to refactor with database access, need to access product info, product styles, and product ratings
    // image gallery needs styles list for urls
    // product info needs product info for name, price, description, needs reviews for ratings
    // style selector needs styles list for thumbnails
    // add to cart needs product styles for sizes, quantities
  var productInfo = dummyPI;
  var productStylesList = dummyPS.results;
  var productReviews = dummyRD;
  const [index, setIndex] = useState(0);

  const handleIndexChange = (i) => {
    setIndex(i);
  }

  const createCartTicket = (ticketInfo) => {
    const selectedStyle = productStylesList[index].style_id;
    ticketInfo['style'] = selectedStyle;

    console.log(ticketInfo);
    // this is then posted to the database
      // don't quite understand if the information in ticketInfo is what
      // will actually be needed / wanted, but it can easily be altered
      // to best suite our needs
  }

  // console.log('product list: ', dummyPL);
  // console.log('product info: ', productInfo);
  // console.log('product styles: ', productStylesList);
  // console.log('product reviews: ', productReviews)

  return (
    <Container>
      <ImageGallery styles={productStylesList} index={index} />
      <RightColumn>
        <ProductInformation product={productInfo} review={productReviews} styles={productStylesList} index={index}/>
        <StyleSelector styles={productStylesList} handleIndexChange={handleIndexChange}/>
        <AddToCart styles={productStylesList} index={index} createCartTicket={createCartTicket}/>
      </RightColumn>
    </Container>
  )
}