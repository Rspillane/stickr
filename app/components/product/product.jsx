// ProductPage.js

import React from 'react';
import Image from 'next/image';

const Product = ({ image, id, title, price, descr}) => {
  return (
    <div>
      <Image
            src={ image }
            height={ 200 }
            width={ 200 }
            alt={ title }
        />
      <h3>title { title }</h3>
      <p>description { descr }</p>
      <p>Price: £{ price }</p>
      {/* Additional product details can be displayed here */}
    </div>
  );
};

export default Product;
