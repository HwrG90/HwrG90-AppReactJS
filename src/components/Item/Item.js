import "../Item/Item.css";
import { Link } from "react-router-dom";
import Card from "react-bootstrap/Card";
import "./Item.css";

const Item = ({ id, nombre, precio, img, stock }) => {
  return (
    <div className="CardItem">
      <Card style={{ width: "18rem", borderRadius: "10px" }}>
        <Card.Img
          variant="top"
          src={img}
          style={{ width: "20rem", borderRadius: "5px" }}
        />
        <Card.Body style={{ height: "4rem" }}>
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
          <h2>Precio: </h2>$ {precio}
        </small>
      </Card>
    </div>
  );
};

export default Item;
