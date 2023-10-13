import '../globals.css'

//components
import Item from '../components/item/Item'
import { itemList } from '../components/assets/itemList'



const listItems = itemList.map((prop) =>
    <Item
        key={prop.key}
        title={prop.title}
        price={prop.price}
    />
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