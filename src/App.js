import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import { CartContextProvider } from "./context/CartContext";
import ItemDetailConteiner from "./components/ItemDetailContainer/ItemDetailContainer";
import Cart from "./components/Cart/Cart";
import "./App.css";
import PageNotFound from "./components/PageNotFound/pageNotFound";

function App() {
  return (
    <div className="App">
      <CartContextProvider>
        <BrowserRouter>
          <NavBar />
          <Routes>
            <Route
              path="/"
              element={<ItemListContainer greeting="Todos los libros" />}
            />
            <Route
              path="/categoria/:categoriaId"
              element={<ItemListContainer greeting="Libros filtrados" />}
            />
            <Route path="/about" element={<h5>Sobre Nosotros</h5>} />
            <Route path="/detalle/:id" element={<ItemDetailConteiner />} />
            <Route path="/contacto" element={<h5>Contacto</h5>} />
            <Route path="/cart" element={<Cart />} />
            <Route path="*" element={<PageNotFound/>} />
          </Routes>
        </BrowserRouter>
      </CartContextProvider>
    </div>
  );
}

export default App;
