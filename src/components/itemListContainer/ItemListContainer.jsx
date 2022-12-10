import { useState , useEffect } from "react"
import ItemCount from "../itemCount/ItemCount"
import "./ItemListContainer.css"
import  {products} from "../../productsMock"
import ItemList from "../itemList/ItemList"
import { useParams } from "react-router-dom"


 

  const ItemListContainer = ({props}) => {

   const [isDark, setIsDark] = useState(false)

   const toggleMode = () =>{
     setIsDark(!isDark)
   }

  //el useEffect se va a ejecutar cuando  el componente esté renderizado, siempre que haya un cambio se vuelve a renderizar
   useEffect( () =>{
   })

 // useEffect con array de dependencia se ejecuta solo cuando renderiza por primera vez
   useEffect( () =>{
   }, [] //ARREGLO DE DEPENDENCIAS
   )
  
  // //useEffect que esté a la espera de la escucha de isDark
  // useEffect( () =>{
  //   console.log("hola dentro del efecto con array de dependecia a la escucha")
  // }, [ isDark] //ARREGLO DE DEPENDENCIAS
  // )

 const onAdd = (mensaje) =>{
   alert(mensaje)
 }

const [items , setItems] = useState([])

const {categoryName} = useParams()
console.log(categoryName)

useEffect(()=>{
  const task = new Promise( (resolve, reject) =>{
    const productsFiltered = products.filter( productos => productos.category === categoryName)
    console.log(productsFiltered)
    setTimeout(() => {
      resolve(categoryName ? productsFiltered : products)
    }, 1500);
    
    
    }
)

task
      .then(  (res)=>{  setItems  (   res  ) } )
      .catch( (err) =>{console.log(err )})


},[categoryName])





  return (
      <div className={isDark ? "itemsContainer-dark": "itemsContainer-light" } >


          <h2> {props}</h2>

          <button onClick={toggleMode}>
                  {isDark ? 'cambiar a modo claro':'cambiar a modo oscuro'} 
            </button>
  
          <ItemCount stock={10} onAdd={onAdd}/>

          <ItemList items={items}/>

      </div>
  )
}

export default ItemListContainer