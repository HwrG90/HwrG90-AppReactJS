import React, { useContext, useState, useEffect } from "react";
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
          style={{ width: "4rem", margin: "3rem" }}
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
                          <th>Subtotal</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>1</td>
                          <td>{prod.nombre}</td>
                          <td>{prod.inicial}</td>
                          <td>$ {prod.precio}</td>
                          <td>$ {prod.precio * prod.inicial}</td>
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
              <h2 className="h2Total">Total: $ {totalApagar}</h2>
            </div>
            <div className="button--position">
              <Link className="btn btn-info" to="/formulario">
                Generar Orden{" "}
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
          <div className="h2Cart--position">
            <h2 className="h2Cart--size">El carrito esta vacio ... </h2>
            <Link className="btn btn-dark" to="/">
              Volver a inicio!
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;
