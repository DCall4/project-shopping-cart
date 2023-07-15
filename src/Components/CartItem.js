import { useShoppingCart } from "../Context/ShoppingCartContext";
import ShopItems from "../Data/ShopItems";
import formatCurrency from "../Utilities/formatCurrency";

export function CartItem({id, quantity}) {
    const { removeFromCart, getItemQuantity} = useShoppingCart();
    const item = ShopItems.find(i => i.id === id)

    if(item == null) return null

    return (
        <div>
            <img src={item.image} alt={item.name} className="thumbnail"/>
            <div>
                <div className="cartName">
                    {item.name}{" "}
                    {getItemQuantity(item.id) > 1 && (
                        <span className="cartItemQuantity">
                            x{getItemQuantity(item.id)}
                        </span>
                    )}
                </div>
                <div className="itemPrice">
                    {formatCurrency(item.price)}
                </div>
                <div className="totalItemPrice">
                {formatCurrency(item.price * quantity)}
                </div>
                <button onClick={() => removeFromCart(item.id)}>X</button>
            </div>
        </div>
    )
}