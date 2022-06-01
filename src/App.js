/* import logo from './logo.svg'; */
import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
//import ItemCount from "./components/ItemCount/ItemCount";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route
            path="/"
            element={<ItemListContainer greeting="Todos los libros" />}
          />
          <Route
            path="/category/:categoryId"
            element={<ItemListContainer greeting="Libros filtrados" />}
          />
          <Route path="/detail/:productId" element={<ItemDetailContainer />} />
          <Route path="/about" element={<h2>Sobre Nosotros</h2>} />
          <Route path="/contact" element={<h2>Contacto</h2>} />
          <Route path="/trolley" element={<h2>Carrito</h2>} />
          <Route
            path="*"
            element={<h2 className="h2--styles">Page not found 404</h2>}
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
