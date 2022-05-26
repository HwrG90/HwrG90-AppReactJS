import "./Item.css"


const Item = ({imagen, stock, id, name,}) => {
  return (
    <div className="card" key={name}>
    <img className="card-img-top" src={imagen} alt={id}/>
    <div className="card-body">
        <h4 className="card-title"><b>{name}</b></h4>
        <p>{stock}</p>
    </div>
    </div>
  )
}


export default Item