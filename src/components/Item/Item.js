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
          <small className="text-muted">{}</small>
          <Card.Title style={{ margin: "2rem" }}>{name}</Card.Title>
          <Card.Text></Card.Text>
        </Card.Body>
        <Card.Footer>
          <Link
            type="button"
            className="btn btn-outline-secondary"
            to={`/detail/${id}`}
          >
            {" "}
            Saber mas
          </Link>
        </Card.Footer>
        <small className="text-muted"> Stock: {stock}</small>
      </Card>
    </div>
  );
};
export default Item;
