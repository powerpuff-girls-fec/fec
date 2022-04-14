import React, { useEffect, useState } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import ImageGallery from './imageGallery/imageGallery';
import ProductInformation from './productInformation/productInformation';
import StyleSelector from './styleSelector/styleSelector';
import AddToCart from './cart/addToCart';

const Container = styled.div`
  display: flex;
  flex-direction: row;
  height: 30%;
  width: 1000px;
  margin: auto;
  margin-bottom: 2em;
`;

const RightColumn = styled.div`
  display: flex;
  flex-basis: 35%;
  flex-direction: column;
  justify-content: space-around;
`;

export default function ProductOverview({ productID }) {
  const [index, setIndex] = useState(0);
  const [reviewMeta, setReviewMeta] = useState(undefined);
  const [productInfo, setProductInfo] = useState(undefined);
  const [productStylesList, setProductStylesList] = useState(undefined);

  useEffect(() => {
    axios.get(`api/products/${productID}`)
      .then((result) => result.data)
      .then((data) => setProductInfo(data))
      .catch((err) => console.log(err));

    axios.get(`api/reviews/meta/${productID}`)
      .then((result) => result.data)
      .then((data) => setReviewMeta(data))
      .catch((err) => console.log(err));

    axios.get(`api/products/${productID}/styles`)
      .then((result) => result.data)
      .then((data) => setProductStylesList(data))
      .catch((err) => console.log(err));
  }, []);

  const handleIndexChange = (i) => {
    setIndex(i);
  };

  const createCartTicket = (ticketInfo) => {
    const currentTicket = ticketInfo;
    currentTicket.style = productStylesList.results[index].style_id;

    axios.post('/api/cart', currentTicket)
      .then((res) => console.log('res', res.data))
      .catch((err) => console.log('err ', err));
  };

  return (
    <Container data-testid="ProductOverview">
      <ImageGallery styles={productStylesList} index={index} />
      <RightColumn>
        <ProductInformation
          product={productInfo}
          review={reviewMeta}
          styles={productStylesList}
          index={index}
        />
        <StyleSelector styles={productStylesList} handleIndexChange={handleIndexChange} />
        <AddToCart styles={productStylesList} index={index} createCartTicket={createCartTicket} />
      </RightColumn>
    </Container>
  );
}

ProductOverview.propTypes = {
  productID: PropTypes.number.isRequired,
};
