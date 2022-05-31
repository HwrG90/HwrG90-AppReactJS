import { useState, useEffect } from "react";
import { getItem } from "../../asyncmock";
import ItemDetail from "../ItemDetail/ItemDetail";

const ItemDetailContainer = () => {
  const [products, setProducts] = useState();

  useEffect(() => {
    getItem('1').then((response) => {
      setProducts(response);
    });
  }, []);
  return (
    <div>
      <ItemDetail {...products} />
    </div>
  );
};

export default ItemDetailContainer;
