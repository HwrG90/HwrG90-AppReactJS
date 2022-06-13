import { useContext } from "react";
import { Link } from "react-router-dom";
import CartContext from "../../context/CartContext";
import "./CartWidget.css";

function CarritoComponente() {
  const { contadorProductosCarrito } = useContext(CartContext);
  const contadorCarrito = contadorProductosCarrito();

  return (
    <div>
      <Link to="/cart">
        <img
          className="ImgCartWidget"
          src="/images/CarritoCompras.png"
          alt="Carrito de Compras"
        />
      </Link>
      <h4 className="h4__color">{contadorCarrito}</h4>
    </div>
  );
}

export default CarritoComponente;
