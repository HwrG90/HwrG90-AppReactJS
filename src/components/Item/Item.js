import "./Item.css"
import React from "react"
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'

  const Item = ({img, stock, id, name, price}) => {
    return (
<div className="CardItem">
 <Card  style={{ width: '18rem' }} key={id}>
 <Card.Img variant="top" src={img} />
 <Card.Body>
 <small className="text-muted">{id}</small>
   <Card.Title style={{margin:"2rem"}}>{name}</Card.Title>
   <Card.Text>

   </Card.Text>
   <small className="text-muted">Precio {price}</small>
 </Card.Body>
 <Card.Footer>
   <Button variant="outline-dark">Saber Mas</Button>
 </Card.Footer>
 <small className="text-muted"> Stock {stock}</small>
</Card>
</div>


  )
}
export default Item