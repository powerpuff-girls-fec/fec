import { useState } from 'react';
import styled from 'styled-components';

export default function Twitter(props) {
  const clickHandler = props.clickHandler;
  return(
    <img src="https://favpng.com/img/share_twitter.png" onClick={() => {clickHandler()}}></img>
  )
}