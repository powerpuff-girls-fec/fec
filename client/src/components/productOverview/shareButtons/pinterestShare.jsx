import { useState } from 'react';
import styled from 'styled-components';

export default function Pinterest(props) {
  const clickHandler = props.clickHandler;
  return(
    <img src="https://favpng.com/img/share_pinterest.png"onClick={() => {clickHandler()}}></img>
  )
}