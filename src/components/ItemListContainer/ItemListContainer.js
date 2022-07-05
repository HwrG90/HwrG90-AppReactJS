import { useState, useEffect } from "react";
import ItemList from "../ItemList/ItemList";
import { useParams } from "react-router-dom";
import { Spinner } from "react-bootstrap";
import "./ItemListContainer.css";
import { productosDeBD } from "../../services/firebase/api";

const ItemListContainer = ({ greeting }) => {
  const [productos, setProductos] = useState([]);
  const [cargando, setCargando] = useState(true);
  const { categoriaId } = useParams();

  useEffect(() => {
    setCargando(true);

    productosDeBD(categoriaId)
      .then((resp) => {
        setProductos(resp);
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
        setCargando(false);
      });
  }, [categoriaId]);

  if (cargando) {
    return (
      <div className="spiner--grow">
        {" "}
        <Spinner animation="grow" role="status">
          <span className="visually-hidden"></span>
        </Spinner>
      </div>
    );
  }

  return (
    <div className="greeting--style">
      <h3>{greeting}</h3>
      <div>
        {productos.length > 0 ? (
          <ItemList productos={productos} />
        ) : (
          <h2>El carrito esta vacio</h2>
        )}
      </div>
    </div>
  );
};

export default ItemListContainer;
