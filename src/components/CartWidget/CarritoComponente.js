/* import "./CartWidget.css";
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
 */


//import { AiOutlineShoppingCart } from "react-icons/ai";
//import { AiOutlineShoppingCart } from "react-icons/ai";
//import CartContext from "../../Context/CartContext";
//import '../CarritoComponente/CarritoImg.css'
import { useContext } from 'react'
import { Link } from "react-router-dom";
import CartContext from "../../context/CartContext";
import "./CartWidget.css";

function CarritoComponente() {

   const {contadorProductosCarrito} = useContext(CartContext)
   const contadorCarrito = contadorProductosCarrito()


    return(


/*       

        <Link to='/cart' className="contenido">
            <strong className="contador-carrito">{contadorCarrito}</strong> 
        </Link>

 */


        

    <div>
      <Link to="/cart">
        <img
          className="ImgCartWidget"
          src="/images/CarritoCompras.png"
          alt="Carrito de Compras"
        />
      </Link>
      <h5 className="h5__color">{contadorCarrito}</h5>
    </div>





        
    )
}

export default CarritoComponente

