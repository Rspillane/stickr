import styles from "./styles.modules.css"
import Link from 'next/link'

export default function ShopItem () {
    return (
        <main>
            <nav className="navbar">
                <Link href="/" className="link">Home</Link>
                <Link href="/shop" className="link">Shop</Link>
            </nav>
        </main>
    )
}