import { useState } from "react";
import "./ItemCount.css";

const ItemCount = ({ stock, initial }) => {
  const [count, setCount] = useState(parseInt(initial));

  const Add = () => {
    if (count < stock) {
      setCount(count + 1);
    }
  };
  const Sustract = () => {
    if (count > initial) {
      setCount(count - 1);
    }
  };
  const onAdd = () => {
    alert( `Agregaste al carrito: ${count}` )
      console.log (`Agregaste al carrito ${count}`);
  };
  return (
    <div className="card-body">
      <div className="contador">
        <button className="btn btn-outline-danger" onClick={Sustract}>
          -
        </button>
        <h3 className="h3--size">{count}</h3>
        <button className="btn btn-outline-success" onClick={Add}>
          +
        </button>
      </div>
      <div className="carrito">
        <button className="btn btn-outline-secondary" onClick={onAdd}>
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
};

export default ItemCount;
