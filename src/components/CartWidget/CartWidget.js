import "./CartWidget.css";
import { Link } from "react-router-dom";

const CartWidget = () => {
  return (
    <div>
      <Link to={"/trolley"}>
        <img
          className="ImgCarrito"
          src="/images/CarritoCompras.png"
          alt="Carrito de Compras"
        />
      </Link>
      <h5 className="h5__color">0</h5>
    </div>
  );
};

export default CartWidget;
