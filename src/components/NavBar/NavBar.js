import "./NavBar.css";
import logo from "../../InfinitySymbol.png";
import CartWidget from "../CartWidget/CartWidget";
import { Link } from "react-router-dom";


const NavBar = () => {
  return (
        <header>
        <Link to={'/'}>
            <img className="img-fluid logo" src={logo} alt="logo" />
        </Link>
        <Link className="btn-lightBtnL" to={'/'}> Inicio
        </Link>
      <div>
      <nav>
        <ul className="nav__enlaces">
          <li>
<Link to={'/category/literaturaArgentina'}>Literatura Argentina</Link>
          </li>
          <li>
          <Link to={'/category/litetaturaEspañola'}>Literatura Española</Link>  
          </li>
          <li>
          <Link to={'/about'} className="about" >Sobre Nosotros</Link>
          </li>
        </ul>
      </nav>
      </div>
      <Link className="btn-lightBtnR" to={'/contact'}> Contacto
        </Link>
      <CartWidget />
    </header>
  );
};

export default NavBar;
