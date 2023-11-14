import React from 'react'
import styles from "./styles.modules.css"
import Image from 'next/image'

export default function Item({ image, id, title, price, descr }) {
  return (
    <main>
        <div className='item-card' onClick={console.log("item has been clicked")}>
            <Image
                src={ image }
                height={ 200 }
                width={ 200 }
                alt={ descr }
            /> 
            <div className='item-info'>
              <p className='item-name'>{ title }</p>
              <p className='item-price'>£ { price }</p>
            </div>
        </div>
    </main>
  )
}
