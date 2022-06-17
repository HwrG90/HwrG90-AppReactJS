import { useState, useEffect } from "react";
import ItemDetail from "../ItemDetail/ItemDetail";
import { useParams } from "react-router-dom";
import Spinner from "react-bootstrap/Spinner";
import "./ItemDetailContainer.css";
import { doc, getDoc } from "firebase/firestore";
import { dataBase } from "../../services/firebase";

const ItemDetailConteiner = () => {
  const [producto, setProducto] = useState();
  const [cargando, setCargando] = useState(true);

  const { id } = useParams();

  useEffect(() => {
    getDoc(doc(dataBase, "productos", id))
      .then((respuesta) => {
        const producto = { id: respuesta.id, ...respuesta.data() };
        setProducto(producto);
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
        setCargando(false);
      });
  }, []);

  if (cargando) {
    return (
      <div className="spiner--grow">
        <Spinner animation="grow" role="status">
          <span className="visually-hidden"></span>
        </Spinner>
      </div>
    );
  }

  return (
    <div>
      <ItemDetail {...producto} />
    </div>
  );
};

export default ItemDetailConteiner;
