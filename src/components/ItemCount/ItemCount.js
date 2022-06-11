/* import { useState } from "react";
import "./ItemCount.css";

function ItemCount({ stock, inicial = 1, onAdd }) {
  const [start, setInicial] = useState(inicial);

  const sustract = () => {
    if (start > 1) {
      setInicial(start - 1);
    }
  };

  const add = () => {
    if (start < stock) {
      setInicial(start + 1);
    }
  };

  const trolley = () => {
    onAdd(start);
  };

  return (
    <div className="card-body">
      <div className="contador">
        <button className="btn btn-outline-danger" onClick={sustract}>
          -
        </button>
        <h3 className="h3--size">{start}</h3>
        <button className="btn btn-outline-success" onClick={add}>
          +
        </button>
      </div>
      <div className="carrito">
        <button className="btn btn-outline-secondary" onClick={trolley}>
          Agregar
          <img
            className="ImgCarritoBtn"
            src="/images/CarritoCompras.png"
            alt="Carrito de Compras"
          />
        </button>
      </div>
    </div>
  );
}
export default ItemCount; */




//import '../ItemCount/ItemCount.css'
//import '../ItemCount/ItemCount.css'
import {useState} from 'react';
import "./ItemCount.css";


function ItemCount({stock, numeroInicia = 1 , onAdd}) {
   const [inicial, setInicial] = useState(numeroInicia)
    
    const decrementa =()=>{
         if(inicial > 1){
            setInicial(inicial - 1)
        }      
    }

    const incrementa =()=>{
        if(inicial < stock){
            setInicial(inicial + 1)
        } 
    }

    const AgregarAlCarrito = ()=>{
        onAdd(inicial)
    }

    return(


/*          <div>
            <strong>Disponibles {stock - inicial} </strong>
            <div>
            <button className='boton-itemCount' onClick={decrementa}> - </button>
            <strong>  {inicial} </strong>
            <button className='boton-itemCount'  onClick={incrementa}> + </button>
            <div>
            <button className='boton-itemCount' onClick={AgregarAlCarrito}>AGREGAR AL CARRITO</button>
            </div>
            </div>
        </div>  */

       
        <div className="card-body">
        <h3 className="h3--size">Disponibles {stock - inicial} </h3>
        <div className="contador">
          <button className="btn btn-outline-danger" onClick={decrementa}>
            -
          </button>
          <h3 className="h3--size">  {inicial} </h3>
          <button className="btn btn-outline-success" onClick={incrementa}>
            +
          </button>
        </div>
        <div className="carrito">
          <button className="btn btn-outline-secondary" onClick={AgregarAlCarrito}>
            Agregar
            <img
              className="ImgCarritoBtn"
              src="/images/CarritoCompras.png"
              alt="Carrito de Compras"
            />
          </button>
        </div>
      </div>










    )




    



    
}

export default ItemCount;