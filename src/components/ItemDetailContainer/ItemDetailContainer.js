//import { productoId } from "../../asyncmock";
import { useState, useEffect } from "react";
import ItemDetail from "../ItemDetail/ItemDetail";
import { useParams } from "react-router-dom";
import Spinner from "react-bootstrap/Spinner";
import "./ItemDetailContainer.css";
import { database } from "../../services/firebase";
import { doc, getDoc } from "firebase/firestore";

const ItemDetailConteiner = () => {
  const [producto, setProducto] = useState();
  const [cargando, setCargando] = useState(true);

  const { id } = useParams();

  useEffect(() => {
    getDoc(doc(database, "productos", id))
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

    /*     productoId(id)
      .then((respuesta) => {
        setProducto(respuesta);
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
        setCargando(false);
      }); */
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
