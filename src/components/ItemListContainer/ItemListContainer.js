import "./ItemListContainer.css";
import ItemList from "../ItemList/ItemList";
import { useState, useEffect } from "react";
import { getProducts } from '../../asyncmock'
const ItemListContainer = ({greeting}) => {
  const [products, setProducts] = useState([])

    useEffect(() => {
        getProducts().then(response => {
            setProducts(response)
        })
    }, [])
    
  return (
  <div className="greeting--style">
  <h2>{greeting}</h2>
  <ItemList products={products}/>
  </div>
  )
};

export default ItemListContainer;
