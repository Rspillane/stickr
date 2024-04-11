'use client'
import styles from "./styles.modules.css";
import Product from "../../components/product/product";
// import product from '../../components/assets/testItem';
import { itemList } from '../../components/assets/itemList.js';

const getPageId = ( ProdId ) => {
    for (let i = 0; i < itemList.length; i++) {
        if (itemList[i].id === 7) {
          let selectedProduct = itemList[i];
          return selectedProduct;
        }
      }
}

export default function ShopItem ( {params} ) {

    console.log(itemList);
    const product = getPageId(params.id);
    console.log(product)

    return (
        <main>
            <h2>Item Page</h2>
            <div>
                <Product
                    image={product.image}
                    title={product.title}
                    descr={product.descr}
                    price={product.price}
                />
            </div>
        </main>
    )
}