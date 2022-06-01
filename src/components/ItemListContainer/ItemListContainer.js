import "./ItemListContainer.css";
import ItemList from "../ItemList/ItemList";
import { useState, useEffect } from "react";
import { getProducts, getProductsByCategory } from "../../asyncmock";
import { useParams } from "react-router-dom";
import { Spinner } from "react-bootstrap";

const ItemListContainer = ({ greeting }) => {
  const [products, setProducts] = useState([]);

  const [loading, setLoading] = useState(true);

  const { categoryId } = useParams();

  useEffect(() => {
    setLoading(true);

    if (!categoryId) {
      getProducts()
        .then((response) => {
          setProducts(response);
        })
        .catch((error) => {
          console.log(error);
        })
        .finally(() => {
          setLoading(false);
        });
    } else {
      getProductsByCategory(categoryId)
        .then((response) => {
          setProducts(response);
        })
        .catch((error) => {
          console.log(error);
        })
        .finally(() => {
          setLoading(false);
        });
    }
  }, [categoryId]);

  if (loading) {
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
      <ItemList products={products} />
    </div>
  );
};

export default ItemListContainer;
