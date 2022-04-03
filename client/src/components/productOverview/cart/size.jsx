import { useState, useEffect } from 'react';
import styled from 'styled-components';

const SizeContainer = styled.div``

export default function Size(props) {
  const selectHandler = props.selectHandler;
  return(
    <SizeContainer>
      {/* <label>Select a size:</label> */}
      <select name="sizes" onChange={() => {selectHandler(event)}}>
        <option>Select A Size</option>
        {props.sizes.map((size, key) => <option value={key} key={key}>{size}</option>)}
      </select>
    </SizeContainer>
  )
}