
import Counter from "./components/counter/Counter";
import Header from "./components/header/Header";
import ItemListContainer from "./components/itemListContainer/ItemListContainer";

function App() {
  return (
    <>
    <Header />
    <Counter />
    <ItemListContainer props={'lista de articulos'}/>
  
    </> 
    
    );
}

export default App;
