import "../ItemDetail/ItemDetail.css";
import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import ItemCount from "../ItemCount/ItemCount";
import CartContext from "../../context/CartContext";
import "./ItemDetail.css";
import Card from "react-bootstrap/Card";

const ItemDetail = ({
  id,
  description,
  img,
  nombre,
  precio,
  categoria,
  stock,
}) => {
  const [quantity, setQuantity] = useState(0);
  const { addItem, iniciarProducto } = useContext(CartContext);

  const handleOnAdd = (inicial) => {
    setQuantity(inicial);

    addItem({ id, nombre, precio, inicial, img, description, categoria });
  };

  return (
    <div className="CardItemDetail">
      <Card style={{ width: "20rem" }}>
        <Card.Img variant="top" src={img} />
        <Card.Body>
          <Card.Title style={{ fontWeight: "bold" }}>{nombre}</Card.Title>
          <small className="text-muted">
            {" "}
            <h2>Descripcion: </h2>
            {description}
          </small>
          <small className="text-muted">
            {" "}
            <h2>Precio: </h2>
            {precio}
          </small>
        </Card.Body>
        <small className="text-muted">
          {" "}
          <h2>Stock: </h2>
          {stock}
        </small>
        <div className="btn--secondary">
          {quantity > 0 ? (
            <Link className="btn btn-outline-secondary" to="/cart">
              Finalizar compra
            </Link>
          ) : (
            <ItemCount
              stock={stock}
              onAdd={handleOnAdd}
              initial={iniciarProducto(id)?.quantity}
            />
          )}
          {quantity > 0 ? (
            <Link className="btn btn-outline-secondary" to="/">
              Continuar comprando
            </Link>
          ) : null}
        </div>
      </Card>
    </div>
  );
};

export default ItemDetail;
