import { useState, useEffect } from "react";
import { getItem } from "../../asyncmock";
import ItemDetail from "../ItemDetail/ItemDetail";
import { useParams } from "react-router-dom";

  const ItemDetailContainer = () => {
  const [product, setProduct] = useState({});

    const { productId } = useParams ()

  useEffect(() => {
    getItem(productId).then((response) => {
      setProduct(response);
    })
  }, [productId]);

  return (
    <div>{Object.keys(product).length > 0 && <ItemDetail {...product} />}</div>
  );
};

export default ItemDetailContainer;
