/* import "./NavBar.css";
import logo from "../../InfinitySymbol.png";
//import CartWidget from "../CartWidget/CartWidget";
import { Link } from "react-router-dom";
import CarritoComponente from "../CartWidget/CarritoComponente";


const NavBar = () => {
  return (
        <header>
        <Link to='/'>
            <img className="img-fluid logo" src={logo} alt="logo" />
        </Link>
        <Link className="btn-lightBtnL" to='/'> Inicio
        </Link>
      <div>
      <nav>
        <ul className="nav__enlaces">
          <li>
<Link to='/categoria/literatura Argentina'>Literatura Argentina</Link>
          </li>
          <li>
          <Link to='/categoria/litetatura Española'>Literatura Española</Link>
          </li>
          <li>
          <Link to='/about' className="about" >Sobre Nosotros</Link>
          </li>
        </ul>
      </nav>
      </div>
      <Link className="btn-lightBtnR" to='/contacto'> Contacto
        </Link>
      {contadorCarrito > 0  &&   <CarritoComponente />}
    </header>
  );
};

export default NavBar;
 */

import '../NavBar/NavBar.css'
//import CarritoComponente from '../CarritoComponente/CarritoComponente'
//import '../NavBar/NavBar.css'
import CarritoComponente from "../CartWidget/CarritoComponente"
import {Link} from 'react-router-dom'
import { useContext } from 'react'
import CartContext from "../../context/CartContext"
import logo from "../../InfinitySymbol.png";
//import CartContext from '../../Context/CartContext'


function NavBar() {
    const {contadorProductosCarrito} = useContext(CartContext)
    const contadorCarrito = contadorProductosCarrito()

    return(

        
/*         <div className="barraPrincipal">
         <Link className='nav-boton' to='/'>INICIO</Link>
         <NavLink  className='nav-boton' to='/categoria/celulares'>CELULARES</NavLink>
         <NavLink className='nav-boton' to='/categoria/computacion'>COMPUTACION</NavLink>
         <Link className='nav-boton' to='nosotros'>ACERCA DE NOSOTROS</Link>
         {contadorCarrito > 0  &&   <CarritoComponente />}      
        </div> */
        
<header>
        <Link to='/'>
            <img className="img-fluid logo" src={logo} alt="logo" />
        </Link>
        <Link className="btn-lightBtnL" to='/'> Inicio
        </Link>
      <div>
      <nav>
        <ul className="nav__enlaces">
          <li>
<Link to='/categoria/literatura Argentina'>Literatura Argentina</Link>
          </li>
          <li>
          <Link to='/categoria/litetatura Española'>Literatura Española</Link>
          </li>
          <li>
          <Link to='/about' className="about" >Sobre Nosotros</Link>
          </li>
        </ul>
      </nav>
      </div>
      <Link className="btn-lightBtnR" to='/contacto'> Contacto
        </Link>
      {contadorCarrito > 0  &&   <CarritoComponente />}
    </header>










    )
}

export default NavBar
