import { useState } from 'react';
import styled from 'styled-components';

export default function Facebook(props) {
  const clickHandler = props.clickHandler;
  return(
    <img src="https://favpng.com/img/share_facebook.png" onClick={() => {clickHandler()}}></img>
  )
}