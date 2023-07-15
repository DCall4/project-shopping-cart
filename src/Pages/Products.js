import { useParams } from "react-router-dom";
import ShopItems from "../Data/ShopItems";
import formatCurrency from "../Utilities/formatCurrency";
import { useShoppingCart } from "../Context/ShoppingCartContext";

export default  function Products() {
    const { id } = useParams();
    const item = ShopItems.find(item => item.id === id);
    const { getItemQuantity, increaseCartQuantity, decreaseCartQuantity, 
        removeFromCart } = useShoppingCart();

    return (
        <div>
            <div key={item.id} className="item">
                <div className="imageAlign">
                    <img className="shopImage" src={item.image} alt={item.name} />
                </div>
                <br />
                <div className="itemName">{item.name}</div>
                <br />
                <div className="price">{formatCurrency(item.price)}</div>
                <br />
                {getItemQuantity(item.id) === 0 ? 
                    <button onClick={() => increaseCartQuantity(item.id)}>
                        Add to Cart</button> : 
                            <div>
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
                                            onClick={() => removeFromCart(item.id)}>Remove
                                        </button>
                                    </div>
                            </div>
                }
                <br />
                <div>{item.description}</div>
            </div>
        </div>
    )

}