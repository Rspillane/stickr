import styles from "./styles.modules.css";
import Product from "../../components/product/product";
import product from '../../components/assets/testItem';
import products from '../../components/assets/itemList';



export default function ShopItem (  ) {


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