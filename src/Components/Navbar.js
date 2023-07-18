import { Link } from "react-router-dom"
import { useShoppingCart } from "../Context/ShoppingCartContext";

export default function Navbar() {
    const {openCart, cartQuantity} = useShoppingCart();

    return (
    <nav className="nav">
        <ul className="navBar">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/shop">Shop</Link></li>
            {cartQuantity > 0 && (
                <li>
                    <button onClick={() => openCart()}>{cartQuantity} Checkout</button>
                </li>
            )}   
        </ul>
    </nav>
    )
}