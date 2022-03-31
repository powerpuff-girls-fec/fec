import axios from 'axios';
import { useEffect, useState } from 'react';


export const useGetData = (url) => {
  const [productData, setProductData] = useState(productData);

  useEffect(() => {
    axios.get(url)
      .then(result => {
        setProductData(result);
      });
  }, [url])

  return productData;
}