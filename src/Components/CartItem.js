import { Link } from "react-router-dom";
import { useShoppingCart } from "../Context/ShoppingCartContext";
import ShopItems from "../Data/ShopItems";
import formatCurrency from "../Utilities/formatCurrency";

export function CartItem({id, quantity}) {
    const { removeFromCart, getItemQuantity, increaseCartQuantity, decreaseCartQuantity} = useShoppingCart();
    const item = ShopItems.find(i => i.id === id)

    if(item == null) return null

    return (
        <div className="item">
            <Link to={`./shop/${item.id}`}>
                <img src={item.image} alt={item.name} className="thumbnail"/>
            </Link>
            <div>
                <div className="itemName">
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
                {formatCurrency(item.price * quantity)} Total
                </div>
                <div className="quantity">
                <div className="addSubBtns">
                    <button onClick={() => increaseCartQuantity(item.id)}>+</button>
                    <div>
                        <span>{getItemQuantity(item.id)}</span>
                                in Cart
                    </div>
                    <button onClick={() => decreaseCartQuantity(item.id)}>-</button>
                    </div>
                </div>
                <button onClick={() => removeFromCart(item.id)}>Remove from Cart</button>
            </div>
        </div>
    )
}