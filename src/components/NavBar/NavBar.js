import "./NavBar.css";
import logo from "../../InfinitySymbol.png";
import CartWidget from "../CartWidget/CartWidget";


const NavBar = () => {
  return (
        <header>
            <img className="img-fluid logo" src={logo} alt="logo" />
        <a className="button" href="inicio">
            <button className="btn btn-lightBtnL">Inicio</button>
      </a>
      <div>
      <nav>
        <ul className="nav__enlaces">
          <li>
            <a href="servicios">Servicios</a>
          </li>
          <li>
            <a href="proyectos">Productos</a>
          </li>
          <li>
            <a href="nosotros">Sobre Nosotros</a>
          </li>
        </ul>
      </nav>
      </div>
      <a className="button" href="inicio">
        <button className="btn btn-lightBtnR">Contacto</button>
      </a>
      <CartWidget />
    </header>
  );
};

export default NavBar;
