import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const CarouselContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 75%;
  height: 75%;
`;

const CarouselWrapper = styled.div`
  display: flex;
  width: 75%;
  height: 75%;
  position: relative;
`;

const CarouselContentWrapper = styled.div`
  overflow: hidden;
  width: 100%;
  height: 100%;
`;

const CarouselContent = styled.div`
  display: flex;
  transition: all 250ms linear;
  -ms-overflow-style: none;
  scrollbar-width: none;
  width: 100%;
  height: 100px;

  > * {
    width: 75%;
    flex-shrink: 0.75;
    flex-grow: 0.25;
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
  position: relative;
  left: 20px;
  top: 40%;

  border-radius: 50%;
  border-width: 1px;
  width: 10px;
  height: 15px;
  background-color: white;

  &:hover {
    color: #f1f1f1;
  }
`;

const RightButton = styled.button`
position: relative;
right: 20px;
top: 40%;

border-radius: 50%;
border-width: 1px;
width: 10px;
height: 15px;
background-color: white;

&:hover {
  color: #f1f1f1;
}
`;

function Carousel({ children, changeHandler }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [length, setLength] = useState(children.length);

  const rightArrow = 'https://cdn-icons-png.flaticon.com/512/467/467282.png';
  const leftArrow = 'https://cdn-icons-png.flaticon.com/512/467/467274.png';

  useEffect(() => {
    setLength(children.length);
  }, [children]);

  const next = () => {
    if (currentIndex < (length - 1)) {
      setCurrentIndex((prevState) => prevState + 1);
      changeHandler(currentIndex + 1);
    }
  };

  const prev = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prevState) => prevState - 1);
      changeHandler(currentIndex - 1);
    }
  };

  return (
    <CarouselContainer>
      <CarouselWrapper>
        <LeftButton type="button" onClick={() => prev()} className="left-arrow">
          <LeftArrow src={leftArrow} alt="&lt;" />
        </LeftButton>
        <CarouselContentWrapper>
          {/* <CarouselContent style={{ transform: `translateX(-${currentIndex * 100}%)` }} />
          {children} */}
          <CarouselContent>
            {children}
          </CarouselContent>
        </CarouselContentWrapper>
        <RightButton type="button" src={rightArrow} onClick={() => next()} className="right-arrow">
          <RightArrow src={rightArrow} alt="&gt;" />
        </RightButton>
      </CarouselWrapper>
    </CarouselContainer>
  );
}

export default Carousel;

Carousel.propTypes = {
  children: PropTypes.arrayOf(PropTypes.shape()),
  changeHandler: PropTypes.func,
};

Carousel.defaultProps = {
  children: [],
  changeHandler: () => {},
};
