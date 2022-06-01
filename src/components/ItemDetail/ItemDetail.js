import "./ItemDetail.css";
import React from "react";
import Card from "react-bootstrap/Card";
import ItemCount from "../ItemCount/ItemCount";

const ItemDetail = ({ name, id, img, description, price, stock }) => {
  return (
    <div className="CardItemDetail">
      <Card style={{ width: "20rem" }} key={id}>
        <Card.Img variant="top" src={img} />
        <Card.Body>
          <Card.Title style={{ margin: "2rem" }}>{name}</Card.Title>
          <Card.Text>
            <small className="text-muted">Descripcion: {description}</small>
          </Card.Text>
          <small className="text-muted">Precio: {price}</small>
        </Card.Body>
        <Card.Footer></Card.Footer>
        <small className="text-muted"> Stock: {stock}</small>
        <ItemCount stock={stock} initial="1" />
      </Card>
    </div>
  );
};

export default ItemDetail;
