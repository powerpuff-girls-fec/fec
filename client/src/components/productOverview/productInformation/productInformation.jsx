import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import Facebook from './shareButtons/facebookShare';
import Twitter from './shareButtons/twitterShare';
import Pinterest from './shareButtons/pinterestShare';
import Price from './prices';
import Stars from './Stars';

const Container = styled.div`
display: grid;
width: 100%;
height: 10em;
grid-template-rows: 1fr 1fr 1fr 1fr 1fr 1fr;
`;

const Category = styled.div``;

const Title = styled.div``;

const ShareButtons = styled.div`
  display: flex;
  flex-direction: row;
  padding-top: 5px;
`;

const Review = styled.div`
  display: flex;
  flex-direction: row;
`;

const onFacebookClick = () => {
  window.open('https://www.facebook.com/sharer', 'Facebook', 'height=550,width=660,resizable=1');
};

const onTwitterClick = () => {
  window.open('https://twitter.com/intent/tweet', 'Twitter', 'height=550,width=660,resizable=1');
};

const onPinterestClick = () => {
  window.open('https://www.pinterest.com/pin/create/button', 'Pinterest', 'height=550,width=660,resizable=1');
};

const averageReviews = (reviews) => {
  let total = 0;
  let count = 0;

  for (var key in reviews) {
    total += reviews[key];
    count += 1;
  }
  return [total / count, count];
};

export default function ProductInformation({ product, review, styles, index }) {
  const ratingInfo = averageReviews(review.ratings);
  const averageRating = ratingInfo[0];
  const ratingCount = ratingInfo[1];

  return (
    <Container>
      <Review>
        <Stars stars={averageRating} />
        <div>
          <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ">
            Read all
            {ratingCount}
            reviews
          </a>
        </div>
      </Review>
      <Category>{product.category}</Category>
      <Title>{product.name}</Title>
      <Price styles={styles[index]} />
      <div>{product.description}</div>
      <ShareButtons>
        <Facebook clickHandler={onFacebookClick} />
        <Twitter clickHandler={onTwitterClick} />
        <Pinterest clickHandler={onPinterestClick} />
      </ShareButtons>
    </Container>
  );
}

ProductInformation.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    slogan: PropTypes.string,
    description: PropTypes.string,
    category: PropTypes.string,
    default_price: PropTypes.string,
    features: PropTypes.arrayOf(PropTypes.shape({
      feature: PropTypes.string,
      value: PropTypes.string,
    })),
  }),
  review: PropTypes.shape({
    product_id: PropTypes.string,
    ratings: PropTypes.shape({
      1: PropTypes.string,
      2: PropTypes.string,
      3: PropTypes.string,
      4: PropTypes.string,
      5: PropTypes.string,
    }),
    recommended: PropTypes.shape({
      true: PropTypes.string,
      false: PropTypes.string,
    }),
    characteristics: PropTypes.object,
  }),
  styles: PropTypes.shape({
    product_id: PropTypes.string,
    results: PropTypes.arrayOf(PropTypes.shape({
      styled_id: PropTypes.number,
      name: PropTypes.string,
      original_price: PropTypes.string,
      sale_price: PropTypes.string,
      default: PropTypes.bool,
      photos: PropTypes.arrayOf(PropTypes.shape({
        thumbnail_url: PropTypes.string,
        url: PropTypes.string,
      })),
      skus: PropTypes.shape({
        37: PropTypes.shape({
          quantity: PropTypes.number,
          size: PropTypes.string,
        }),
        38: PropTypes.shape({
          quantity: PropTypes.number,
          size: PropTypes.string,
        }),
        39: PropTypes.shape({
          quantity: PropTypes.number,
          size: PropTypes.string,
        }),
      }),
    })),
  }),
  index: PropTypes.number,
};

ProductInformation.defaultProps = {
  product: {
    id: 0,
    name: '',
    slogan: '',
    description: '',
    category: '',
    default_price: '',
    features: [{
      feature: '',
      value: '',
    }],
  },
  review: {
    product_id: '0',
    ratings: {
      1: '0',
      2: '0',
      3: '0',
      4: '0',
      5: '0',
    },
    recommended: {
      false: '0',
      true: '0',
    },
    characteristics: {
      Size: {
        id: '0',
        value: '',
      },
      Width: {
        id: '0',
        value: '',
      },
      Comfort: {
        id: '0',
        value: '',
      },
    },
  },
  styles: {
    product_id: '0',
    results: [{
      style_id: 0,
      name: '',
      original_price: '0',
      sale_price: '0',
      default: false,
      photos: [{
        thumbnail_url: '',
        url: '',
      }],
      skus: {
        37: {
          quantity: 0,
          size: '',
        },
        38: {
          quantity: 0,
          size: '',
        },
        39: {
          quantity: 0,
          size: '',
        },
      },
    }],
  },
  index: 0,
};
