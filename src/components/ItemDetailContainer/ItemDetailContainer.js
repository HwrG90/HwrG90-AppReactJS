import { useState, useEffect } from "react";
import { getItem } from "../../asyncmock";
import ItemDetail from "../ItemDetail/ItemDetail";

const ItemDetailContainer = () => {
  const [product, setProduct] = useState({});

  useEffect(() => {
    getItem().then((response) => {
      setProduct(response);
    });
  }, []);

  return (
    <div>{Object.keys(product).length > 0 && <ItemDetail {...product} />}</div>
  );
};

export default ItemDetailContainer;
