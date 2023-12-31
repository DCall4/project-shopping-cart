import { Link } from "react-router-dom";
import ShopItems from "../Data/ShopItems";
import formatCurrency from "../Utilities/formatCurrency";
import { useShoppingCart } from "../Context/ShoppingCartContext";

export default function Shop() {
    const { getItemQuantity, increaseCartQuantity, decreaseCartQuantity, 
        removeFromCart } = useShoppingCart();

        return (
            <div>
                <div className="title">Shop</div>
                <div className="shop">
                    {ShopItems.map(item => {
                        return (
                            <div key={item.id} className="item">
                                <Link to={`./${item.id}`}>
                                    <img className="thumbnail" src={item.image} alt={item.name} />
                                    <div className="itemName">{item.name}</div>
                                    <div>{formatCurrency(item.price)}</div>
                                </Link>
                                        {getItemQuantity(item.id) === 0 ? <button className="addToCart"
                                                            onClick={() => increaseCartQuantity(item.id)}>Add to Cart</button> : 
                                            <div className="quantity">
                                                <div className="addSubBtns">
                                                    <button onClick={() => increaseCartQuantity(item.id)}>+</button>
                                                    <div>
                                                        <span>{getItemQuantity(item.id)}</span>
                                                        in Cart
                                                        </div>
                                                    <button onClick={() => decreaseCartQuantity(item.id)}>-</button>
                                                </div>
                                                <div>
                                                    <button className="remove"
                                                        onClick={() => removeFromCart(item.id)}>Remove</button>
                                                </div>
                                            </div>
                                        }
                                    </div>
                            
                    )})}
                </div>
            </div>
        )
}