// import '../globals.css'
import styles from "./styles.modules.css"

//components
import Item from '../components/item/Item'
import { itemList } from '../components/assets/itemList'

import Link from 'next/link'



export default function Basket () {
    return (
        <main className='main'>
            <div className="title-block">
                <h2>Basket</h2>
            </div>
            <div className="basket-block">
                <h3>
                    this is where the items in the basket will go
                </h3>
            </div>
        </main>
    )
}