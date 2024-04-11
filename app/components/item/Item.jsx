
import styles from "./styles.modules.css"
import Image from 'next/image'
import Link from 'next/link'
import { useState } from "react";


export default function Item({ image, id, title, price, descr }) {
  
  const [selectedProduct, setSelectedProduct] = useState(null);

  // Function to handle product selection
  const handleProductSelect = (e) => {
    const id = e.target.id;
    console.log(`my id is ${id}`);
  };

  return (
    <main>
      <Link href="" className='item-link'>
        <div key={ id } className='item-card' onClick={handleProductSelect}>
            <Image
                src={ image }
                height={ 200 }
                width={ 200 }
                alt={ title }
            /> 
            <div className='item-info'>
              <p className='item-name'>{ title }</p>
              <p className='item-price'>£ { price }</p>
              {/* <button className='item-button' onClick={() => addToCart({ id })}>Add to Basket</button> */}
            </div>
        </div>
      </Link>
    </main>
  )
}
