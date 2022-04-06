import React, { useEffect, useState } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import ImageGallery from './imageGallery/imageGallery';
import ProductInformation from './productInformation/productInformation';
import StyleSelector from './styleSelector/styleSelector';
import AddToCart from './cart/addToCart';

const Container = styled.div`
  display: grid;
  width: 100%;
  height: 10em;
  grid-template-columns: 4fr 3fr;
`;

const RightColumn = styled.div`
  display: grid;
  grid-template-rows: 2fr 1fr 1fr;
`;

export default function ProductOverview({ productID }) {
  // const url = 'http://localhost:3000/';
  const [index, setIndex] = useState(0);
  const [reviewMeta, setReviewMeta] = useState(undefined);
  const [productInfo, setProductInfo] = useState(undefined);
  const [productStylesList, setProductStylesList] = useState(undefined);

  useEffect(() => {
    axios.get(`api/products/${productID}`)
      .then((result) => result.data)
      .then((data) => setProductInfo(data));

    axios.get(`api/reviews/meta/${productID}`)
      .then((result) => result.data)
      .then((data) => setReviewMeta(data));

    axios.get(`api/products/${productID}/styles`)
      .then((result) => result.data)
      .then((data) => setProductStylesList(data));
  }, []);

  const handleIndexChange = (i) => {
    setIndex(i);
  };

  const createCartTicket = (ticketInfo) => {
    const selectedStyle = productStylesList[index].style_id;
    const currentTicket = ticketInfo;
    currentTicket.style = selectedStyle;

    console.log(currentTicket);
    // this is then posted to the database
    // don't quite understand if the information in ticketInfo is what
    // will actually be needed / wanted, but it can easily be altered
    // to best suite our needs
  };

  // console.log('product info: ', productInfo);
  // console.log('product styles: ', productStylesList);
  // console.log('product reviews: ', reviewMeta);

  return (
    <Container>
      {/* <ImageGallery styles={productStylesList} index={index} /> */}
      <RightColumn>
        {/* <ProductInformation
          product={productInfo}
          review={reviewMeta}
          styles={productStylesList}
          index={index}
        /> */}
        {/* <StyleSelector styles={productStylesList} handleIndexChange={handleIndexChange} /> */}
        <AddToCart styles={productStylesList} index={index} createCartTicket={createCartTicket} />
      </RightColumn>
    </Container>
  );
}

ProductOverview.propTypes = {
  productID: PropTypes.number.isRequired,
};
