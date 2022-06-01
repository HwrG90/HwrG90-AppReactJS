import Item from "../Item/Item";
import "../ItemDetail/ItemDetail.css";

const ItemList = ({ products }) => {
  return (
    <div>
      {products.map((prod) => (
        <Item key={prod.id} {...prod} />
      ))}
    </div>
  );
};

export default ItemList;
