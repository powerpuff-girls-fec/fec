const sampleProductStyles = {
      "product_id": "1",
      "results": [
          {
              "style_id": 1,
              "name": "blue",
              "original_price": "140",
              "sale_price": "0",
              "default?": true,
              "photos": [
                      {
                      "thumbnail_url": "https://m.media-amazon.com/images/I/31+BV5HPPIL._SS36_.jpg",
                      "url": "https://m.media-amazon.com/images/I/41YOP98WZBL._AC_.jpg"
                  },
                      {
                      "thumbnail_url": "https://m.media-amazon.com/images/I/31+BV5HPPIL._SS36_.jpg",
                      "url": "https://m.media-amazon.com/images/I/41YOP98WZBL._AC_.jpg"
                  }
                      // ...
              ],
          "skus": {
                        "37": {
                                  "quantity": 8,
                                  "size": "XS"
                        },
                        "38": {
                                  "quantity": 0,
                                  "size": "S"
                        },
                        "39": {
                                  "quantity": 17,
                                  "size": "M"
                        },
              //...
                    }
      },
    {
          "style_id": 2,
          "name": "red",
          "original_price": "140",
          "sale_price": "0",
          "default?": false,
          "photos": [
                      {
                      "thumbnail_url": "https://m.media-amazon.com/images/I/21qZQ0W1hRL._SS36_.jpg",
                      "url": "https://m.media-amazon.com/images/I/A1umI+PwGFL._AC_SL1500_.jpg"
          }
        // ...
              ],
          "skus": {
                        "37": {
                                  "quantity": 5,
                                  "size": "S"
                        },
                        "38": {
                                  "quantity": 7,
                                  "size": "L"
                        },
                        "39": {
                                  "quantity": 32,
                                  "size": "XXL"
                        },
              //...
                    }
      }]
}

export default sampleProductStyles;