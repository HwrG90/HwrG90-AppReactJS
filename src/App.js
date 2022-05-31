/* import logo from './logo.svg'; */
import './App.css';
import NavBar from "./components/NavBar/NavBar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import ItemCount from "./components/ItemCount/ItemCount";
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
function App() {
  return (
    <div className="App">
      <NavBar />
      <ItemListContainer greeting="Libros" />
      <ItemCount stock="5" initial="1"/>
      <ItemDetailContainer/>
    </div>
    
  );
}

export default App;
