/* import "./ItemDetailContainer.css";
import { useState, useEffect } from "react";
import { productoId } from "../../asyncmock";
import ItemDetail from "../ItemDetail/ItemDetail";
import { useParams } from "react-router-dom";
import Spinner from "react-bootstrap/Spinner";

const ItemDetailConteiner = () => {
  const [producto , setProducto] = useState()
  const [ loading , setCargando] = useState(true)

  const {id} = useParams()
  
  useEffect(()=>{
      productoId(id).then(respuesta =>{
          setProducto(respuesta)
      }).catch(error =>{
          console.log(error)
      }).finally(( )=>{
          setCargando(false)
      })
},[])

  if (cargando) {
      return (
    <div className="spiner--grow">
      <Spinner animation="grow" role="status">
        <span className="visually-hidden"></span>
      </Spinner>
    </div> )
  }

  return(
    <div>
        <ItemDetail {...producto} />
    </div>
)
}

export default ItemDetailConteiner; */



//import '../ItemDetailConteiner/ItemDetailConteiner.css'
//import '../ItemDetailConteiner/ItemDetailConteiner.css'
import { useState, useEffect } from "react";
import { productoId } from "../../asyncmock";
import ItemDetail from '../ItemDetail/ItemDetail'
import { useParams } from "react-router-dom";
import Spinner from "react-bootstrap/Spinner";
import "./ItemDetailContainer.css";

const ItemDetailConteiner = () => {
    const [producto , setProducto] = useState()
    const [ cargando , setCargando] = useState(true)

    const {id} = useParams()
    
    useEffect(()=>{
        productoId(id).then(respuesta =>{
            setProducto(respuesta)
        }).catch(error =>{
            console.log(error)
        }).finally(( )=>{
            setCargando(false)
        })
  },[])

    if (cargando) {
        return (
            <div className="spiner--grow">
              <Spinner animation="grow" role="status">
                <span className="visually-hidden"></span>
              </Spinner>
            </div> 
            )


    }

    return(
        <div>
            <ItemDetail {...producto} />
        </div>
    )
}

export default ItemDetailConteiner