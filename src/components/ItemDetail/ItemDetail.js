import "./ItemDetail.css";
import Card from "react-bootstrap/Card";
import ItemCount from "../ItemCount/ItemCount";
import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import CartContext from "../../context/CartContext";


const ItemDetail = ({ name, id, img, description, price, stock }) => {
  const [quantity, setQuantity] = useState(0)

  const { addItem, getProduct } = useContext(CartContext)

  const handleOnAdd = (quantity) => {
      
      setQuantity(quantity)
      alert (`Agregaste al carrito: ${quantity} ${name}`)
      addItem({ id, name, price, quantity })
  }


  return (
    <div className="CardItemDetail">
      <Card style={{ width: "20rem" }} key={id}>
        <Card.Img variant="top" src={img} />
        <Card.Body>
          <Card.Title style={{ fontWeight: "bold" }}>{name}</Card.Title>
          <small className="text-muted">
            {" "}
            <h2>Descripcion: </h2>
            {description}
          </small>
          <small className="text-muted">
            {" "}
            <h2>Precio: </h2>
            {price}
          </small>
        </Card.Body>
        <small className="text-muted">
          {" "}
          <h2>Stock: </h2>
          {stock}
        </small>
        <div className="btn--secondary">
        {quantity > 0 ? (
          <Link className="btn btn-outline-secondary" to="/trolley">
            Finalizar compra
          </Link>
        ) : (
          <ItemCount stock={stock} onAdd={handleOnAdd} initial={getProduct(id)?.quantity} />
        )}
        </div>
      </Card>
    </div>
  );
};

export default ItemDetail;