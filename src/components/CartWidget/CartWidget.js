import "./CartWidget.css";
import { useContext } from "react";
import { Link } from "react-router-dom";
import CartContext from "../../context/CartContext";

const CartWidget = () => {

  const { getQuantity } = useContext(CartContext)

  const quantity = getQuantity()


  return (
    <div>
      <Link to={"/trolley"}>
        <img
          className="ImgCartWidget"
          src="/images/CarritoCompras.png"
          alt="Carrito de Compras"
        />
      </Link>
      <h5 className="h5__color">{quantity}</h5>
    </div>
  );
};

export default CartWidget;
