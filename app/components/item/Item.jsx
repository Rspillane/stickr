import React from 'react'
import styles from "./styles.modules.css"

export default function Item({ id, title, price }) {
  return (
    <main>
        <div className='item-card'>
            <div className='item-image'></div>
            <p className='id'>{ id }</p>
            <h3 className='item-name'>{ title }</h3>
            <p className='item-price'>{ price }</p>
        </div>
    </main>
  )
}
