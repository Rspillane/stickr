import React from 'react'
import styles from "./styles.modules.css"

//components
import Item from '../item/Item'

export default function Shopcarousel() {
  return (
    <main>
        <div className='carousel'>
            <Item />
            <Item />
            <Item />
        </div>
    </main>
  )
}
