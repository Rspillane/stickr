import React from 'react'
import styles from "./styles.modules.css"

export default function Item() {
  return (
    <main>
        <div className='item-card'>
            <div className='item-image'></div>
            <h3 className='item-name'>item name</h3>
            <p className='item-price'> price </p>
        </div>
    </main>
  )
}
