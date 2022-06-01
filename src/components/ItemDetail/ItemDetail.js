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
          <Card.Title style={{ fontWeight: "bold"}} >{name}</Card.Title>
            <small className="text-muted"> <h2>Descripcion: </h2>{description}</small>
          <small className="text-muted"> <h2>Precio: </h2>{price}</small>
        </Card.Body>
        <small className="text-muted"> <h2>Stock: </h2>{stock}</small>
        <ItemCount stock={stock} initial="1" />
      </Card>
    </div>
  );
};

export default ItemDetail;
