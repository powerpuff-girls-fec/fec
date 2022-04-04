import { useState, useEffect } from 'react';
import styled from 'styled-components';

export default function AddButton({ handleSubmit }) {

  return(
    <form onSubmit={() => {handleSubmit()}}>
      <button type="submit">Add to Cart</button>
    </form>
  )
}