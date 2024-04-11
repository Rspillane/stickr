'use client'
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
    // {/* </Link> */}
);


export default function Shop () {
    const [selectedProduct, setSelectedProduct] = useState(null);

    // Function to handle product selection
    const handleProductSelect = (productId) => {
      // Find the selected product from the product data
      const selected = productData.find((product) => product.id === productId);
      setSelectedProduct(selected); // Update the selected product state
    };

    return (
        <main className='main'>
            <h2>Shop</h2>
            <div className='shopping-grid'>
                { listItems }
            </div>
        </main>
    )
}