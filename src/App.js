import "./App.css";
//import React, { useState, createContext } from 'react'
import NavBar from "./components/NavBar/NavBar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
//import ItemCount from "./components/ItemCount/ItemCount";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import Cart from "./components/Cart/Cart";
import { BrowserRouter,  Routes, Route } from "react-router-dom";
import { CartContextProvider } from "./context/CartContext";




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
            path="/category/:categoryId"
            element={<ItemListContainer greeting="Libros filtrados" />}
          />
          <Route path="/detail/:productId" element={<ItemDetailContainer />} />
          <Route path="/about" element={<h4>Sobre Nosotros</h4>} />
          <Route path="/contact" element={<h4>Contacto</h4>} />
          <Route path='/trolley' element={<Cart />}/>
          <Route
            path="*"
            element={<h2 className="h2--styles">Page not found 404</h2>}
          />
        </Routes>
      </BrowserRouter>
      </CartContextProvider>
    </div>
  );
}

export default App;
