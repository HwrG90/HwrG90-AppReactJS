import "../NavBar/NavBar.css";
import { Link } from "react-router-dom";
import { useContext } from "react";
import CartContext from "../../context/CartContext";
import logo from "../../InfinitySymbol.png";
import CarritoComponente from "../CartWidget/CartWidget";

function NavBar() {
  const { contadorProductosCarrito } = useContext(CartContext);
  const contadorCarrito = contadorProductosCarrito();

  return (
    <header>
      <Link to="/">
        <img className="img-fluid logo" src={logo} alt="logo" />
      </Link>
      <Link className="btn-lightBtnL" to="/">
        {" "}
        Inicio
      </Link>
      <div>
        <nav>
          <ul className="nav__enlaces">
            <li>
              <Link to="/categoria/Literatura Argentina">
                Literatura Argentina
              </Link>
            </li>
            <li>
              <Link to="/categoria/Litetatura Española">
                Literatura Española
              </Link>
            </li>
            <li>
              <Link to="/About" className="about">
                Sobre Nosotros
              </Link>
            </li>
          </ul>
        </nav>
      </div>
      <Link className="btn-lightBtnR" to="/Contact">
        {" "}
        Contacto
      </Link>
      {contadorCarrito > 0 && <CarritoComponente />}
    </header>
  );
}

export default NavBar;
