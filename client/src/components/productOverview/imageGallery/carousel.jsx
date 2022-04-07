import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const CarouselContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const CarouselWrapper = styled.div`
  display: flex;
  width: 100%;
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
  height: 400px;
  width: 400px;

  > * {
    width: 100%;
    flex-shrink: 0;
    flex-grow: 1;
  }
`;

function Carousel({ children, changeHandler }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [length, setLength] = useState(children.length);

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
        <button type="button" onClick={() => prev()} className="left-arrow">
          &lt;
        </button>
        <CarouselContentWrapper>
          <CarouselContent style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
            {children}
          </CarouselContent>
        </CarouselContentWrapper>
        <button type="button" onClick={() => next()} className="right-arrow">
          &gt;
        </button>
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
