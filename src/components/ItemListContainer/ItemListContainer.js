//import { listaProductos, productosPorCategoria } from "../../asyncmock";
import { useState, useEffect } from "react";
import ItemList from "../ItemList/ItemList";
import { useParams } from "react-router-dom";
import { Spinner } from "react-bootstrap";
import "./ItemListContainer.css";
import { getDocs, collection, query, where } from "firebase/firestore";
import { database } from "../../services/firebase";

const ItemListContainer = ({ greeting }) => {
  const [productos, setProductos] = useState([]);
  const [cargando, setCargando] = useState(true);
  const { categoriaId } = useParams();

  useEffect(() => {
    setCargando(true);

    const collectionRef = categoriaId
      ? query(
          collection(database, "productos"),
          where("categoria", "==", categoriaId)
        )
      : collection(database, "productos");

    getDocs(collectionRef)
      .then((respuesta) => {
        const productos = respuesta.docs.map((doc) => {
          return { id: doc.id, ...doc.data() };
        });
        setProductos(productos);
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
        setCargando(false);
      });

    /*     if (!categoriaId) {
      listaProductos()
        .then((respuesta) => {
          setProductos(respuesta);
        })
        .catch((error) => {
          console.log(error);
        })
        .finally(() => {
          setCargando(false);
        });
    } else {
      productosPorCategoria(categoriaId)
        .then((respuesta) => {
          setProductos(respuesta);
        })
        .catch((error) => {
          console.log(error);
        })
        .finally(() => {
          setCargando(false);
        });
    } */
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
