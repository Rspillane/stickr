// import '../globals.css'
import styles from "./styles.modules.css"

//components
import Item from '../components/item/Item'
import { itemList } from '../components/assets/itemList'

import Link from 'next/link'



const listItems = itemList.map((prop) =>
    // <Link href="/shop/shopitem" className="">
        <Item
            image={prop.image}
            id={prop.id}
            title={prop.title}
            price={prop.price}
        />
    // </Link>
);


export default function Shop () {
    return (
        <main className='main'>
            <h2>Shop</h2>
            <div className='shopping-grid'>
                { listItems }
            </div>
        </main>
    )
}