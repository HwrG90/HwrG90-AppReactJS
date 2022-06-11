/* import { useContext, useEffect, useState } from "react";
//import { Card } from "react-bootstrap";
import CartContext from "../../context/CartContext";
import Table from "react-bootstrap/Table";
import "./Cart.css";

const Cart = () => {
    const [totalPay, setPayTotal] = useState(0)
  const { cart, removeItem, clearCart, getQuantity } = useContext(CartContext);
  const contadorCarrito = getQuantity()


  useEffect(() => {
    calcularTotal2()
}, [cart])


const calcularTotal2 = () => {
    let total = 0 
    cart.forEach(prod => {
        total += prod.precio * prod.inicial
    })
    setTotal(total)

} 



  return (
    <div>
      <div className="divImgCarrito">
        <img
          className="ImgCarrito"
          src="/images/CarritoCompras.png"
          alt="Carrito de Compras"
          style={{ width: "100px", margin: "3rem" }}
        />
      </div>
      <div>
        {cart.map((prod) => {
          return (
            <div key={prod.id}>
              <div className="tableCart">
                <Table className="tableCard" striped bordered hover>
                  <thead>
                    <tr>
                      <th>#</th>
                      <th>Nombre</th>
                      <th> Cantidad</th>
                      <th>Precio x Uni:</th>
                      <th>Total</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>1</td>
                      <td>{prod.name}</td>
                      <td>{prod.quantity}</td>
                      <td>${prod.price}</td>
                      <td>${prod.price * prod.quantity}</td>
                      <div className="buttomX">
                        <button
                          className="btn btn-danger"
                          onClick={() => removeItem(prod.id)}
                        >
                          <img
                            className="cestoVCard"
                            src="https://cdn-icons-png.flaticon.com/512/1017/1017530.png"
                            alt="Cesto de vasura"
                          />
                        </button>
                      </div>
                    </tr>
                  </tbody>
                </Table>
              </div>
              <div className="buttomV">
                <button
                  className="btn btn-secondary"
                  onClick={() => clearCart(prod.id)}
                >
                  Vaciar carrito
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Cart;



<div>
      <div>
        {cart.map((prod) => {
          return (
            <div key={prod.id} className="container-carrito">
              <div className="card-detail-categoria">
                <div className="card__header">
                  <img
                    id="imagen-card-carrito"
                    src={prod.img}
                    alt="card__image"
                    className="card__image"
                    width="600"
                  />
              <div className="tableCart">
                <Table className="tableCard" striped bordered hover>
                  <thead>
                    <tr>
                      <th>#</th>
                      <th>Nombre</th>
                      <th> Cantidad</th>
                      <th>Precio x Uni:</th>
                      <th>Total</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>{prod.img}</td>
                      <td>{prod.nombre}</td>
                      <td>{prod.inicial}</td>
                      <td>${prod.precio}</td>
                      <td>${prod.precio * prod.inicial}</td>
                      <div className="buttomX">
                        <button
                          className="btn btn-danger"
                          onClick={() => eliminarProducto(prod.id)}
                        >
                          <img
                            className="cestoVCard"
                            src="https://cdn-icons-png.flaticon.com/512/1017/1017530.png"
                            alt="Cesto de vasura"
                          />
                        </button>
                      </div>
                    </tr>
                  </tbody>
                </Table>
              </div>
                    <button
                      className="btn"
                      onClick={() => eliminarProducto(prod.id)}
                    >
                      Eliminar Producto
                    </button>
                  </div>
                </div>
              </div>
            </div>
          );
        })}

        {contadorCarrito > 0 ? (
          <div className="contenedor-btn-borrarTodos">
            <div>
              <h1 className="total">Total: ${totalApagar}</h1>
              <Link to="/" className="btn-detalleCompra">
                Terminar Compra
              </Link>
            </div>
            <button
              className="btn-borrarTodos"
              onClick={() => borrarTodoCarrito()}
            >
              Eliminar Todos los productos
            </button>
          </div>
        ) : (
          <div className=".contenedor-noHayProductos">
            <h1 className="titulo-NohayProductos">El carrito esta vacio ... </h1>
            <Link className="btn-acomprar" to="/">
              Volver a inicio!
            </Link>
          </div>
        )}
      </div>
    </div>













































 */

import React, { useContext, useState, useEffect } from "react";
//import CartContext from "../../Context/CartContext"
import "../Cart/Cart.css";
import { Link } from "react-router-dom";
import CartContext from "../../context/CartContext";
import Table from "react-bootstrap/Table";
import "./Cart.css";

const Cart = () => {
  const [totalApagar, setTotal] = useState(0);
  const {
    cart,
    eliminarProducto,
    borrarTodoCarrito,
    contadorProductosCarrito,
  } = useContext(CartContext);
  const contadorCarrito = contadorProductosCarrito();

  useEffect(() => {
    calcularTotal2();
  }, [cart]);

  const calcularTotal2 = () => {
    let total = 0;
    cart.forEach((prod) => {
      total += prod.precio * prod.inicial;
    });
    setTotal(total);
  };

  return (
   
    <div>
      <div className="divImgCarrito">
        <img
          className="ImgCarrito"
          src="/images/CarritoCompras.png"
          alt="Carrito de Compras"
          style={{ width: "10rem", margin: "3rem" }}
        />
      </div>

      <div>
        {cart.map((prod) => {
          return (
            <div key={prod.id}>
              <div>
                <div>
                  <div className="divCartLibros">
                    <img
                      className="imgCartLibros"
                      src={prod.img}
                      alt="card__image"
                    />
                  </div>
                  <div className="tableCart">
                    <Table className="tableCard" striped bordered hover>
                      <thead>
                        <tr>
                          <th>#</th>
                          <th>Nombre</th>
                          <th> Cantidad</th>
                          <th>Precio x Uni:</th>
                          <th>Total</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>1</td>
                          <td>{prod.nombre}</td>
                          <td>{prod.inicial}</td>
                          <td>${prod.precio}</td>
                          <td>${prod.precio * prod.inicial}</td>
                          <div className="buttomX">
                            <button
                              className="btn btn-danger"
                              onClick={() => eliminarProducto(prod.id)}
                            >
                              <img
                                className="cestoVCard"
                                src="https://cdn-icons-png.flaticon.com/512/1017/1017530.png"
                                alt="Cesto de vasura"
                              />
                            </button>
                          </div>
                        </tr>
                      </tbody>
                    </Table>
                  </div>
                </div>
              </div>
            </div>
          );
        })}

        {contadorCarrito > 0 ? (
          <div className="btn--position">
            <div className="divTotal">
              <h1 className="total">Total: ${totalApagar}</h1>
            </div>
            <div>
              <Link to="*">
                <button className="btn btn-info">Terminar Compra</button>
              </Link>
            </div>
            <button
              className="btn btn-dark"
              onClick={() => borrarTodoCarrito()}
            >
              Eliminar Todos los productos
            </button>
          </div>
        ) : (
          <div className=".contenedor-noHayProductos">
            <h1 className="titulo-NohayProductos">
              El carrito esta vacio ...{" "}
            </h1>
            <Link className="btn btn-dark" to="/">
              Volver a inicio!
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

/*     <div>
      <div>
        {cart.map((prod) => {
          return (
            <div key={prod.id} className="container-carrito">
              <div className="card-detail-categoria">
                <div className="card__header">
                  <img
                    id="imagen-card-carrito"
                    src={prod.img}
                    alt="card__image"
                    className="card__image"
                    width="600"
                  />
                </div>
                <div className="card__body_carrito">
                  <span className="tag tag-blue">{prod.categoria}</span>
                  <h4>{prod.nombre}</h4>
                  <p>Precio ${prod.precio}</p>
                  <p>Cantidad {prod.inicial}</p>
                  <p>Subtotal ${prod.precio * prod.inicial}</p>
                  <div>
                    <button
                      className="btn"
                      onClick={() => eliminarProducto(prod.id)}
                    >
                      Eliminar Producto
                    </button>
                  </div>
                </div>
              </div>
            </div>
          );
        })}

        {contadorCarrito > 0 ? (
          <div className="contenedor-btn-borrarTodos">
            <div>
              <h1 className="total">Total: ${totalApagar}</h1>
              <Link to="/" className="btn-detalleCompra">
                Terminar Compra
              </Link>
            </div>
            <button
              className="btn-borrarTodos"
              onClick={() => borrarTodoCarrito()}
            >
              Eliminar Todos los productos
            </button>
          </div>
        ) : (
          <div className=".contenedor-noHayProductos">
            <h1 className="titulo-NohayProductos">El carrito esta vacio ... </h1>
            <Link className="btn-acomprar" to="/">
              Volver a inicio!
            </Link>
          </div>
        )}
      </div>
    </div> */

/* 
<div>
      <div className="divImgCarrito">
        <img
          className="ImgCarrito"
          src="/images/CarritoCompras.png"
          alt="Carrito de Compras"
          style={{ width: "100px", margin: "3rem" }}
        />
      </div>
      <div>
        {cart.map((prod) => {
          return (
            <div key={prod.id}>
              <div className="tableCart">
                <Table className="tableCard" striped bordered hover>
                  <thead>
                    <tr>
                      <th>#</th>
                      <th>Nombre</th>
                      <th> Cantidad</th>
                      <th>Precio x Uni:</th>
                      <th>Total</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>{prod.img}</td>
                      <td>{prod.nombre}</td>
                      <td>{prod.inicial}</td>
                      <td>${prod.precio}</td>
                      <td>${prod.precio * prod.inicial}</td>
                      <div className="buttomX">
                        <button
                          className="btn btn-danger"
                          onClick={() => eliminarProducto(prod.id)}
                        >
                          <img
                            className="cestoVCard"
                            src="https://cdn-icons-png.flaticon.com/512/1017/1017530.png"
                            alt="Cesto de vasura"
                          />
                        </button>
                      </div>
                    </tr>
                  </tbody>
                </Table>
              </div>
              <div className="buttomV">
                <button
                  className="btn btn-secondary"
                  onClick={() => clearCart(prod.id)}
                >
                  Vaciar carrito
                </button>
              </div>
            </div>
          );
        })}
            {contadorCarrito > 0 ? (
          <div className="contenedor-btn-borrarTodos">
            <div>
              <h1 className="total">Total: ${totalApagar}</h1>
              <Link to="*" className="btn-detalleCompra">
                Terminar Compra
              </Link>
            </div>
            <button
              className="btn-borrarTodos"
              onClick={() => borrarTodoCarrito()}
            >
              Eliminar Todos los productos
            </button>
          </div>
        ) : (
          <div className=".contenedor-noHayProductos">
            <h1 className="titulo-NohayProductos">El carrito esta vacio ... </h1>
            <Link className="btn-acomprar" to="/">
              Volver a inicio!
            </Link>
          </div>
)}
      </div>
    </div> */

/*   );


  













  
}; */

export default Cart;
