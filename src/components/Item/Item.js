import "./Item.css";
import React from "react";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";

const Item = ({ img, stock, id, name }) => {
  return (
    <div className="CardItem">
      <Card style={{ width: "20rem" }} key={id}>
        <Card.Img variant="top" src={img} />
        <Card.Body>
        <Card.Title style={{ fontWeight: "bold"}} >{name}</Card.Title>
        </Card.Body>
        <Card style={{ width: "6rem" }}>
          <Link
            className="btn btn-outline-secondary"
            to={`/detail/${id}`}
          >
            {" "}
            Saber mas
          </Link>
        </Card>
        <small className="text-muted"> <h2>Stock: </h2>{stock}</small>
      </Card>
    </div>
  );
};
export default Item;
