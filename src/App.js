/* import "./App.css";
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
          <Route path='/cart' element={<Cart />}/>
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
 */

//import './App.css';";
//import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
//import ItemListContainer from './componentes/ItemListContainer/ItemListContainer';
//import PageNotFound from './componentes/PageNotFound/PageNotFound';
//import About from './componentes/About/About';
//import Cart from './componentes/Cart/Cart';
//import { CartContextProvider } from './Context/CartContext';
//import './App.css';
//import NavBar from './componentes/NavBar/NavBar';
//import ItemDetailConteiner from './componentes/ItemDetailConteiner/ItemDetailConteiner';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
//import PageNotFound from './componentes/PageNotFound/PageNotFound';
//import About from './componentes/About/About';
//import Cart from './componentes/Cart/Cart';
import { CartContextProvider } from "./context/CartContext";
import ItemDetailConteiner from "./components/ItemDetailContainer/ItemDetailContainer";
import Cart from "./components/Cart/Cart";
//import NavBar from './components/NavBar/NavBar';

function App() {
  return (
    <div className="App">
      {/*       <header className="App-header">
      </header> */}
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
            {/* <Route path='/nosotros' element={<About />} /> */}
            <Route path="/about" element={<h4>Sobre Nosotros</h4>} />
            <Route path="/detalle/:id" element={<ItemDetailConteiner />} />
            <Route path="/contacto" element={<h4>Contacto</h4>} />
            <Route path="/cart" element={<Cart />} />
            {/* <Route path='*' element={<PageNotFound />} /> */}
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
