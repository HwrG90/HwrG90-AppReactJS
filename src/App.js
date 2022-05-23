/* import logo from './logo.svg'; */
/* import './App.css'; */
import NavBar from "./components/NavBar/NavBar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import ItemCount from "./components/ItemCount/ItemCount";
function App() {
  return (
    /*    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
    </div> */
    <div className="App">
      <NavBar />
      <ItemListContainer greeting="E-Commerce" />
      <ItemCount stock="5" initial="1"/>
    </div>
    
  );
}

export default App;
