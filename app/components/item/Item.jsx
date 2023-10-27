import React from 'react'
import styles from "./styles.modules.css"
import Image from 'next/image'

export default function Item({ image, id, title, price, descr }) {
  return (
    <main>
        <div className='item-card' onClick={console.log("item has been clicked")}>
            <Image
                src={ image }
                height={ 100 }
                width={ 100 }
                alt={ descr }
            /> 
            <p className='id'>{ id }</p>
            <h3 className='item-name'>{ title }</h3>
            <p className='item-price'>£ { price }</p>
        </div>
    </main>
  )
}
