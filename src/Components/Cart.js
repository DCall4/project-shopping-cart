import { useState } from "react";
import ShopItems from "../Data/ShopItems";

export default function Cart(itemId) {
    const [cart, setCart] = useState([]);
    const [total, setTotal] = useState(0);

    const item = ShopItems.find(item => item.id === itemId);


}