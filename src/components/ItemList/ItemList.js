/* import Item from "../Item/Item";
import "../ItemDetail/ItemDetail.css";

const ItemList = ({ productos }) => {
  return (
    <div>
      {productos.map((prod) => (
        <Item key={prod.id} {...prod} />
      ))}
    </div>
  );
};

export default ItemList; */

import Item from '../Item/Item'



const ItemList = ({productos}) => {
    return(
        <div>
             {productos.map(prod => <Item key={prod.id} {...prod} />)} 
        </div>
    )
}

export default ItemList
