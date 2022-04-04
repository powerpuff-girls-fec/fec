import { useState, useEffect } from 'react';
import styled from 'styled-components';

const Check = styled.img`
  height: 10px;
  width: 10px;
`

export default function Checkmark() {
  return(
    <Check src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQsDwaDOGfqAcWdLGxdWKZ3GdPMA1kuZ2S2-g&usqp=CAU" />
  )
}