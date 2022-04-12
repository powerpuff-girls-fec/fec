import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const ThumbnailContainer = styled.div`
  display: flex;
  flex-grow: 1;
  justify-content: center;
  align-items: center;
  height: 50px;
  padding-bottom: 10px;
`;

const ThumbnailBubble = styled.img`
  border-style: solid;
  border-width: 4px;
  border-color: #F5F5F5;
  border-radius: 50%;
  width: 50px;
  height: 50px;

  transition-duration: 0.3s;
  &:hover {
    opacity: 0.7;
  }
`;

const Checkmark = styled.img`
  height: 10px;
  width: 10px;
  z-index: 1;

  position: relative;
  bottom: 12px;
  left: 60px;
`;

export default function Thumbnail({
  url, id, checkIndex, clickHandler,
}) {
  const checkmarkUrl = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQsDwaDOGfqAcWdLGxdWKZ3GdPMA1kuZ2S2-g&usqp=CAU';

  if (id === checkIndex) {
    return (
      <ThumbnailContainer data-testid="Checkmark" onClick={() => { clickHandler(url); }}>
        <Checkmark src={checkmarkUrl} />
        <ThumbnailBubble src={url} />
      </ThumbnailContainer>
    );
  }
  return (
    <ThumbnailContainer data-testid="noCkeck" onClick={() => { clickHandler(url); }}>
      <ThumbnailBubble src={url} />
    </ThumbnailContainer>
  );
}

Thumbnail.propTypes = {
  url: PropTypes.string,
  id: PropTypes.number,
  checkIndex: PropTypes.number,
  clickHandler: PropTypes.func,
};

Thumbnail.defaultProps = {
  url: '',
  id: 0,
  checkIndex: 0,
  clickHandler: () => {},
};
