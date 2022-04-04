import { useState, useEffect } from 'react';
import styled from 'styled-components';

export default function AddButton({ selectedSize, available, handleSubmit }) {
  if (selectedSize === '-') {
    return (
      <form>
        <button type="submit" disabled>Add to Cart</button>
      </form>
    )
  } else {
    return(
      <form onSubmit={() => {handleSubmit()}}>
        <button type="submit">Add to Cart</button>
      </form>
    )
  }
}