import "./CartWidget.css";
import { Link } from "react-router-dom";

const CartWidget = () => {
  return (
    <div>
    <Link to={'/trolley'}>
      <img
        className="ImgCarrito"
        src="/images/CarritoCompras.png"
        alt="Carrito de Compras"
      />
      </Link>
      <h3 className="h3__color">8</h3>
    </div>
  );
};

export default CartWidget;
