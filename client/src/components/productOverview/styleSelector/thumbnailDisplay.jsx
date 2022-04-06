import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import Checkmark from './checkmark';

const ThumbnailContainer = styled.div`
  border-style: solid;
  flex-grow: 1;
  height: 50px;
`;

const ThumbnailBubble = styled.img`
  width: 50px;
  height: 50px;
`;

export default function Thumbnail({
  url, id, checkIndex, clickHandler,
}) {
  if (id === checkIndex) {
    return (
      <ThumbnailContainer onClick={() => { clickHandler(url); }}>
        <Checkmark />
        <ThumbnailBubble src={url} />
      </ThumbnailContainer>
    );
  }
  return (
    <ThumbnailContainer onClick={() => { clickHandler(url); }}>
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
