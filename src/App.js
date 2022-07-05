import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import { CartContextProvider } from "./context/CartContext";
import ItemDetailConteiner from "./components/ItemDetailContainer/ItemDetailContainer";
import Cart from "./components/Cart/Cart";
import "./App.css";
import PageNotFound from "./components/PageNotFound/pageNotFound";
import Formulario from "./components/Formulario/Formulario";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";

function App() {
  return (
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
          <Route path="/About" element={<About />} />
          <Route path="/formulario" element={<Formulario />} />
          <Route path="/detalle/:id" element={<ItemDetailConteiner />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>
    </CartContextProvider>
  );
}

export default App;
