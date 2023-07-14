import { useParams } from "react-router-dom";
import ShopItems from "../Data/ShopItems";
import formatCurrency from "../Utilities/formatCurrency";

export default  function Products() {
    const { id } = useParams();
    const item = ShopItems.find(item => item.id === id);

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
                <div>{item.description}</div>
            </div>
        </div>
    )

}