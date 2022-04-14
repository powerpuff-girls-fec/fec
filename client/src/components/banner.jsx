import React from 'react';
import styled from 'styled-components';

const BannerBar = styled.div`
  height: 100px;
  display: flex;
  background-color: #8B85C1;
  align-items: center;
`;

const Title = styled.h1`
  text-align: left;
  font-size: 2em;
  font-weight: bold;
  padding-left: 1em;
  font-family: 'Nunito Sans', sans-serif;
`;

export default function Banner() {
  return (
    <BannerBar>
      <Title>
        Atelier
      </Title>
    </BannerBar>
  );
}
