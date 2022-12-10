
import Header from "./components/header/Header";
import ItemListContainer from "./components/itemListContainer/ItemListContainer";
import {BrowserRouter, Routes, Route, Router} from "react-router-dom"
import ItemDetailContainer from "./components/itemDetailContainer/ItemDetailContainer";
function App() {


  return (
  /*  <>
    <Header />
    <Counter />
    <ItemListContainer props={'lista de articulos'}/> 
    </> 
   */

        <BrowserRouter>
        
          <Header />
          
          <Routes>

              <Route path="/" element={<ItemListContainer/>}/>
              
              <Route path="/category/:categoryName" element={<ItemListContainer />} />

              <Route path="/itemDetail/:id" element={<ItemDetailContainer  />}/>

              <Route path="/cart" element={<h2>estoy en el carrito</h2>} />


          </Routes>
          
        </BrowserRouter> 
    );
}

export default App;
