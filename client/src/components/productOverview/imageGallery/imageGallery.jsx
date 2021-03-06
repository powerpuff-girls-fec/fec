import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import ImageModal from 'common/imageModal';

const ImageComponent = styled.div`
  background-color: #D3D3D3;
  /* flex-basis: 65%; */
  display: flex;
  position: relative;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

const DisplayCarousel = styled.img`
  object-fit: contain;
  width:100%;
  max-width:600px;
  height: 800px;

  transition-duration: 0.2s;
  &:hover {
    cursor: pointer;
    opacity: 0.8;
  }
`;

const LeftArrow = styled.img`
  width: 9px;
  height: 9px;

  position: relative;
  right: 6px;
  bottom: 2px;
`;

const RightArrow = styled.img`
  width: 9px;
  height: 9px;

  position: relative;
  right: 3px;
  bottom: 2px;
`;

const LeftButton = styled.button`
  position: absolute;
  left: 2%;
  z-index: 1;
  cursor: pointer;

  border-radius: 1em;
  border-width: 0;
  width: 5em;
  height: 30em;
  background-color:  #D8D6EA  ;
  opacity: 0.5;

  transition-duration: 0.2s;
  &:hover {
    opacity: 1;
  }
`;

const RightButton = styled(LeftButton)`
  left: auto;  
  right: 2%;
`;

const compileImageList = (photos) => {
  const listOfPhotos = [];
  for (let i = 0; i < photos.length; i += 1) {
    listOfPhotos.push(photos[i].url);
  }
  return listOfPhotos;
};

export default function ImageGallery({ index, styles }) {
  const compiledImageList = compileImageList(styles.results[index].photos);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [length, setLength] = useState(compiledImageList.length);
  const [displayModal, setDisplayModal] = useState(false);

  const rightArrow = 'https://cdn-icons-png.flaticon.com/512/467/467282.png';
  const leftArrow = 'https://cdn-icons-png.flaticon.com/512/467/467274.png';

  useEffect(() => {
    setLength(compiledImageList.length);
  }, [compiledImageList]);

  const next = () => {
    if (currentImageIndex < (length - 1)) {
      setCurrentImageIndex((prevState) => prevState + 1);
    }
  };

  const previous = () => {
    if (currentImageIndex > 0) {
      setCurrentImageIndex((prevState) => prevState - 1);
    }
  };

  const openModal = () => {
    setDisplayModal(true);
  };

  const closeModal = () => {
    setDisplayModal(false);
  };

  if (!displayModal) {
    return (
      <ImageComponent data-testid="ImageComponent">
        <LeftButton data-testid="leftbutton" type="button" onClick={() => previous()}>
          <LeftArrow src={leftArrow} />
        </LeftButton>
        <DisplayCarousel data-testid="mainImage" src={compiledImageList[currentImageIndex]} onClick={() => openModal()} />
        <RightButton data-testid="rightbutton" type="button" onClick={() => next()}>
          <RightArrow src={rightArrow} />
        </RightButton>
      </ImageComponent>
    );
  }

  return (
    <div>
      <ImageComponent>
        <LeftButton type="button" onClick={() => previous()}>
          <LeftArrow src={leftArrow} />
        </LeftButton>
        <DisplayCarousel src={compiledImageList[currentImageIndex]} onClick={() => openModal()} />
        <RightButton data-testid="rightbutton" type="button" onClick={() => next()}>
          <RightArrow src={rightArrow} />
        </RightButton>
      </ImageComponent>
      <ImageModal data-testid="ImageModal" image={compiledImageList[currentImageIndex]} closeModal={closeModal} />
    </div>
  );
}

ImageGallery.propTypes = {
  index: PropTypes.number,
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
};

ImageGallery.defaultProps = {
  index: 0,
  styles: {
    product_id: '',
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
};
