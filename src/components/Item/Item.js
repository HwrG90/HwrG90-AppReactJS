import "./Item.css"
import React from "react"
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'

  const Item = ({img, stock, id, name, category, }) => {
    return (
<div className="CardItem">
 <Card  style={{ width: '16rem'}} key={id}>
 <Card.Img variant="top" src={img} />
 <Card.Body>
 <small className="text-muted">{}</small>
 <small className="text-muted">{category}</small>
   <Card.Title style={{margin:"2rem"}}>{name}</Card.Title>
   <Card.Text>
   </Card.Text>
 </Card.Body>
 <Card.Footer>
   <Button variant="outline-dark">Saber Mas</Button>
 </Card.Footer>
 <small className="text-muted"> Stock: {stock}</small>
</Card>
</div>


  )
}
export default Item