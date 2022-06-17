import React, { useContext, useState, useEffect } from "react";
import "../Cart/Cart.css";
import { Link } from "react-router-dom";
import CartContext from "../../context/CartContext";
import Table from "react-bootstrap/Table";
import "./Cart.css";
import { dataBase } from "../../services/firebase";
import {
  addDoc,
  collection,
  documentId,
  getDocs,
  query,
  where,
  writeBatch,
} from "firebase/firestore";

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

  const crearOrden = () => {
    alert("Se creo su orden");
    const ordenObjeto = {
      comprador: {
        nombre: "",
        email: "",
        telefono: "",
      },
      producto: cart,
      total: totalApagar,
    };
    console.log(ordenObjeto);

    const ids = cart.map((prod) => prod.id);

    console.log(ids);

    const batch = writeBatch(dataBase);
    const noHayStock = [];

    const collectionRef = collection(dataBase, "productos");

    getDocs(query(collectionRef, where(documentId(), "in", ids)))
      .then((respuesta) => {
        respuesta.docs.forEach((doc) => {
          const dataDoc = doc.data();
          const productosCantidad = cart.find(
            (prod) => prod.id === doc.id
          )?.inicial;

          if (dataDoc.stock >= productosCantidad) {
            batch.update(doc.ref, { stock: dataDoc.stock - productosCantidad });
          } else {
            noHayStock.push({ id: doc.id, ...dataDoc });
          }
        });
      })
      .then(() => {
        if (noHayStock.length === 0) {
          const collectionRef = collection(dataBase, "ordenes");
          return addDoc(collectionRef, ordenObjeto);
        } else {
          return Promise.reject({
            type: "no_hay_stock",
            productos: noHayStock,
          });
        }
      })
      .then(({ id }) => {
        batch.commit();
        alert(`La orden de su producto es : ${id}`);
        borrarTodoCarrito();
      })
      .catch((error) => {
        alert(`Lo lamentamos, no hay stock disponible!`);
      });
  };

  return (
    <div>
      {/*       <div className="divImgCarrito">
        <img
          className="ImgCarrito"
          src="/images/CarritoCompras.png"
          alt="Carrito de Compras"
          style={{ width: "10rem", margin: "3rem" }}
        />
      </div> */}

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
              <button onClick={crearOrden} className="btn btn-info">
                Generar orden
              </button>
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
