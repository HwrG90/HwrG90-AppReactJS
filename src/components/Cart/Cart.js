import { useContext } from "react";
//import { Card } from "react-bootstrap";
import CartContext from "../../context/CartContext";
import Table from "react-bootstrap/Table";

const Cart = () => {
  const { cart, removeItem, clearCart } = useContext(CartContext);

  return (
    <div>
      <img
        className="ImgCarrito"
        src="/images/CarritoCompras.png"
        alt="Carrito de Compras"
        style={{ width: "100px", margin: "3rem" }}
      />
      <div>
        {cart.map((prod) => {
          return (
            <div key={prod.id}>
              {/*La lista se muestra tanto en card como en tabla todavia no decido en cual va a quedar en la version final */}

              {/*             
              <Card style={{ width: "40%vh" }}>
                <Card.Body>
                  <Card.Title>{prod.name}</Card.Title>
                  <Card.Subtitle className="mb-2 text-muted">
                    Cantidad: {prod.quantity}
                  </Card.Subtitle>
                  <Card.Text>Precio x Uni: ${prod.price}</Card.Text>
                  <Card.Text>Subtotal: ${prod.price * prod.quantity}</Card.Text>
                  <button className="btn btn-outline-secondary" onClick={() => removeItem(prod.id)}>X</button>
                  <br />
                  <button
                    className="btn btn-outline-secondary"
                    onClick={() => clearCart(prod.id)}
                  >
                    Limpiar Carrito
                  </button>
                </Card.Body>
              </Card>
            </div> */}
              <Table
                className="tableCard"
                striped
                bordered
                hover
                style={{
                  width: "60%",
                  backgroundColor: "white",
                  marginLeft: "2rem",
                }}
              >
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
                  </tr>
                </tbody>
              </Table>
              <div className="buttomCart">
                <button
                  className="btn btn-danger"
                  onClick={() => removeItem(prod.id)}
                  style={{
                    marginBottom: "10px",
                    marginLeft: "2rem ",
                  }}
                >
                  x
                </button>
                <br />
                <button
                  className="btn btn-secondary"
                  onClick={() => clearCart(prod.id)}
                  style={{
                    marginBottom: "4rem",
                    marginLeft: "2rem ",
                  }}
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
