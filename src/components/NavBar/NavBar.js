import './NavBar.css'
import logo from '../../InfinitySymbol.png';
const NavBar = () => {
    return (

    <header>
        <img className='logo' src={logo} alt="logo" />
        <a className='button' href='inicio'><button>inicio</button></a>
        <nav>
            <ul className='nav__enlaces'>
                <li><a href='servicios'>Servicios</a></li>
                <li><a href='proyectos'>Proyectos</a></li>
                <li><a href='nosotros'>Sobre Nosotros</a></li>
            </ul>
        </nav>
        <a className='button' href='inicio'><button>Contacto</button></a>
    </header>
    )
}

export default NavBar