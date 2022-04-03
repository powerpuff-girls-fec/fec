import { useState, useEffect } from 'react';
import styled from 'styled-components';

const SizeContainer = styled.div``

export default function Size(props) {
  console.log(props);
  return(
    <SizeContainer>
      <label>Select a size:</label>
      <select name="sizes">
        {props.sizes.map((size, key) => <option value={size} key={key}>{size}</option>)}
      </select>
    </SizeContainer>
  )
}