import "./ItemListContainer.css";
import ItemList from "../ItemList/ItemList";
import { useState, useEffect } from "react";
import { getProducts, getProductsByCategory } from '../../asyncmock'
import { useParams } from "react-router-dom";


const ItemListContainer = ({greeting}) => {
  const [products, setProducts] = useState([])

  const { categoryId } = useParams()

    useEffect(() => {
      if(!categoryId){
        getProducts ().then(response => {
          setProducts(response)
        })
      } else {
        getProductsByCategory(categoryId).then(response => {
          setProducts(response)
        })
      }
    }, [categoryId])
    
  return (
  <div className="greeting--style">
  <h2>{greeting}</h2>
  <ItemList products={products}/>
  </div>
  )
};

export default ItemListContainer;
