import "./CartWidget.css";

const CartWidget = () => {
  return (
    <div>
      <img
        className="ImgCarrito"
        src="/images/CarritoCompras.png"
        alt="Carrito de Compras"
      />
      <h3 className="h3__color">8</h3>
    </div>
  );
};

export default CartWidget;
