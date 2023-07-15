import { useShoppingCart } from "../Context/ShoppingCartContext"
import formatCurrency from "../Utilities/formatCurrency";
import { CartItem } from "./CartItem";
import ShopItems from "../Data/ShopItems";

export default function ShoppingCart() {
    const {closeCart, cartItems} = useShoppingCart();
    return (
        <>
            <div className="cartFade" onClick={() => closeCart()}></div>
            <div className="cart">
                <div className="cartHeader">
                    Cart
                </div>
                <button onClick={() => closeCart()}>Close</button>
                <div className="cartItems">
                    {cartItems.map(item => (
                        <CartItem key={item.id} {...item}/>
                    ))}
                </div>
                <div className="cartTotalPrice">
                    Total {formatCurrency(cartItems.reduce((total, cartItem) => {
                        const item = ShopItems.find(i => i.id === cartItem.id)
                        return total + (item?.price || 0) *cartItem.quantity
                    }, 0)
                    )}
                </div>
            </div>
        </>
    )
}