import "../Item/Item.css";
import { Link } from "react-router-dom";
import Card from "react-bootstrap/Card";
import "./Item.css";

const Item = ({ id, nombre, precio, img, stock }) => {
  return (
    <div className="CardItem">
      <Card style={{ width: "20rem" }}>
        <Card.Img variant="top" src={img} />
        <Card.Body>
          <Card.Title style={{ fontWeight: "bold" }}>{nombre}</Card.Title>
        </Card.Body>
        <Card style={{ width: "6rem" }}>
          <Link className="btn btn-outline-secondary" to={`/detalle/${id}`}>
            {" "}
            Saber mas
          </Link>
        </Card>
        <small className="text-muted">
          {" "}
          <h2>Stock: </h2>
          {stock}
        </small>
        <small className="text-muted">
          {" "}
          <h2>Precio: </h2>
          {precio}
        </small>
      </Card>
    </div>
  );
};

export default Item;
