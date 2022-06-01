import "./ItemDetailContainer.css"
import { useState, useEffect } from "react";
import { getItem } from "../../asyncmock";
import ItemDetail from "../ItemDetail/ItemDetail";
import { useParams } from "react-router-dom";
import Spinner from 'react-bootstrap/Spinner'

  const ItemDetailContainer = () => {
  const [product, setProduct] = useState({});

  const [loading , setLoading] = useState(true)

    const { productId } = useParams ()

  useEffect(() => {
    setLoading(true)

    getItem(productId).then((response) => {
      setProduct(response)
        }).catch(error => {
            console.log(error)
        }).finally(() => {
            setLoading(false)
        })
  }, [productId]);

  if(loading) {
    <div className="spiner--grow">
    return <Spinner animation="grow" role="status">
  <span className="visually-hidden"></span>
</Spinner>
</div>
}

  return (
    <div>{Object.keys(product).length > 0 && <ItemDetail {...product} />}</div>
  );
};




export default ItemDetailContainer;
