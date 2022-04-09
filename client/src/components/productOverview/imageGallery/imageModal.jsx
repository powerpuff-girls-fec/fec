import React from 'react';
import styled from 'styled-components';
import ReactDom from 'react-dom';

const Background = styled.div`
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.8);
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ModalWrapper = styled.div`
  width: 800px;
  height: 500px;
  box-shadow: 0 5px 16px rgba(0, 0, 0, 0.2);
  background: #fff;
  color: #000;
  position: relative
  z-index: 100;
  border-radius: 10px;
`;

const ModalContent = styled.img`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  line-height: 1.8;
  color: #141414;
`;

export default function ImageModal({ image, closeModal }) {
  return ReactDom.createPortal(
    <Background onClick={() => closeModal()}>
      <ModalWrapper>
        <ModalContent src={image} />
      </ModalWrapper>
    </Background>,
    document.getElementById('ImageModal'),
  );
}
