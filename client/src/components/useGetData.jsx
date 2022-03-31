import axios from 'axios';
import { useEffect, useState } from 'react';

export default function useGetData(url) {
  const [productData, setProductData] = useState();

  useEffect(() => {
    axios.get(url)
      .then((result) => {
        setProductData(result);
      });
  }, [url]);

  return productData;
}
