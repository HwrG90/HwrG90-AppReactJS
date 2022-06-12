import { useState } from "react";
import "./ItemCount.css";

function ItemCount({ stock, numeroInicia = 1, onAdd }) {
  const [inicial, setInicial] = useState(numeroInicia);

  const decrementa = () => {
    if (inicial > 1) {
      setInicial(inicial - 1);
    }
  };

  const incrementa = () => {
    if (inicial < stock) {
      setInicial(inicial + 1);
    }
  };

  const AgregarAlCarrito = () => {
    onAdd(inicial);
  };

  return (
    <div className="card-body">
      <h3 className="h3--size">Disponibles {stock - inicial} </h3>
      <div className="contador">
        <button className="btn btn-outline-danger" onClick={decrementa}>
          -
        </button>
        <h3 className="h3--size"> {inicial} </h3>
        <button className="btn btn-outline-success" onClick={incrementa}>
          +
        </button>
      </div>
      <div className="carrito">
        <button
          className="btn btn-outline-secondary"
          onClick={AgregarAlCarrito}
        >
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
