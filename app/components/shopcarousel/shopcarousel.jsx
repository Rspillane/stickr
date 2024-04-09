import React from 'react'
import styles from "./styles.modules.css"

//components
import Item from '../item/Item'
import { itemList } from '../assets/itemList'


const listItems = itemList.map((prop) =>
    <Item
        image={prop.image}
        key={prop.id}
        title={prop.title}
        price={prop.price}
    />
);

export default function Shopcarousel() {
  return (
    <main>
        <section className='carousel'>
          { listItems }
        </section>
    </main>
  )
}
