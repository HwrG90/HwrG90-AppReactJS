import { useState } from "react";
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
export default ItemCount;
