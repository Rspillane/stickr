
import styles from "./styles.modules.css"
import Image from 'next/image'
import Link from 'next/link'


export default function Item({ image, id, title, price, descr }) {
  
  return (
    <main>
      <Link href="/shop/shopitem" className='item-link'>
        <div className='item-card'>
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
