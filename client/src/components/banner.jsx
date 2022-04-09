import React from 'react';
import styled from 'styled-components';

const BannerBar = styled.h1`
  height: 100px;
  background-color: lightblue;
  text-align: center;
  font-size: 40px;
  font-weight: bold;
  font-family: Sans-Serif;
`;

export default function Banner() {
  return (
    <BannerBar>Come up with some fun name, put it here</BannerBar>
  );
}
