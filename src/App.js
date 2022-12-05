
import Header from "./components/header/Header";
import ItemListContainer from "./components/itemListContainer/ItemListContainer";

function App() {
  return (
    <>
    <Header />
    <ItemListContainer props={'le estoy mandando al componente lo que tiene que poner'}/>
    </>
    
    );
}

export default App;
