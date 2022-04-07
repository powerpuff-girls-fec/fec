import React from 'react';
import styled, { keyframes } from 'styled-components';
import PropTypes from 'prop-types';

const Container = styled.div``;

const ImageContainer = styled.img`
  height: 100px;
  width: 100px;
  cursor: pointer;
  transition: 0.3s;

  &:hover {
    opacity: 0.7;
  }
`;

const MyModal = styled.div`
  display: none;
  position: fixed;
  z-index: 1;
  padding-top: 100px;
  left: 0;
  top: 0;
  width: 200px;
  height: 200px;
  overflow: auto;
  background-color: rgb(0,0,0);
  background-color: rgba(0,0,0,0.9)
`;

const ZoomAnimation = keyframes`
  from {transform:scale(0)}
  to {transform:scale(1)}
`;

const MyModalContent = styled.img`
  margin: auto;
  display: block;
  width: 80%
  max-width: 700px;

  animation-name: ${ZoomAnimation};
  animation-duration: 0.6s;
`;

const CloseButton = styled.span`
  position: absolute;
  top: 15px;
  right: 35px;
  color: #f1f1f1;
  font-size: 40px;
  font-weight: bold;
  transition: 0.3s;

  &:hover {
    color: #bbb;
    text-decoration: none;
    cursor: pointer;
  }
`;

export default function CurrentModal({ image }) {
  const onImageClick = () => {
    // console.log('click');
    // modal.style.display = 'block';
  };

  return (
    <Container>
      <ImageContainer src={image} alt="placeholder" onClick={() => { onImageClick(); }} />
      <MyModal className="modal">
        <CloseButton className="close">&times;</CloseButton>
        <MyModalContent id="img01" alt="" />
      </MyModal>
    </Container>
  );
}

CurrentModal.propTypes = {
  image: PropTypes.string,
};

CurrentModal.defaultProps = {
  image: '',
};
