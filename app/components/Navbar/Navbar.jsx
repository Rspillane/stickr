import styles from "./styles.modules.css"
import Link from 'next/link'
import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined';


export default function ShopItem () {
    return (
        <main>
            <nav className="navbar">
                <div className="links">
                    <Link href="/" className="link">Home</Link>
                    <Link href="/" className="link">About</Link>
                    <Link href="/shop" className="link">Shop</Link>
                    <Link href="/" className="link">Contact</Link>
                </div>
                <div className="nav-basket">
                    <Link href="/basket" className="basket-button link"> 
                        <ShoppingBagOutlinedIcon/>
                    Basket </Link>
                </div>
            </nav>
        </main>
    )
}