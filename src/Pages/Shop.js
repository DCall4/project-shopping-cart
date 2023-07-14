import { Link } from "react-router-dom";
import ShopItems from "../Data/ShopItems";
import formatCurrency from "../Utilities/formatCurrency";
import { ShoppingCartContext, ShoppingCartProvider, useShoppingCart } from "../Context/ShoppingCartContext";
import { useContext } from "react";


export default function Shop() {
    const { getItemQuantity, increaseItemQuantity, decreaseItemQuantity, 
        removeFromCart } = useContext(ShoppingCartContext);

    const quantity = getItemQuantity();

    return (
        <div>
            <div>Shop</div>
            <div className="shop">
                {ShopItems.map(item => {
                    return (
                        <div key={item.id} className="item">
                            <Link to={`./${item.id}`}>
                                <img className="thumbnail" src={item.image} alt={item.name} />
                                <div>{item.name}</div>
                                <div>{formatCurrency(item.price)}</div>
                            </Link>
                                <div className="quantity">
                                    {quantity === 0 ? <button >Add to Cart</button> : 
                                        <div>
                                            <div className="addSubBtns">
                                                <button>+</button>
                                                <div>
                                                    <span>{quantity}</span>
                                                    in Cart
                                                    </div>
                                                <button>-</button>
                                            </div>
                                            <div>
                                                <button className="remove">Remove</button>
                                            </div>
                                        </div>
                                    }
                                </div>
                            </div>
                        
                )})}
            </div>
        </div>
    )
}