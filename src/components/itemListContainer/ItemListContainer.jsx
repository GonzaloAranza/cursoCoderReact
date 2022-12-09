//import { useState , useEffect } from "react"
import ItemCount from "../itemCount/ItemCount"
import "./ItemListContainer.css"


 

  const ItemListContainer = ({props}) => {

  // const [isDark, setIsDark] = useState(false)

  // const toggleMode = () =>{
  //   setIsDark(!isDark)
  // }

  // //el useEffect se va a ejecutar cuando  el componente esté renderizado, siempre que haya un cambio se vuelve a renderizar
  // useEffect( () =>{
  //   console.log("hola dentro del primer efecto")
  // })

  // //useEffect con array de dependencia se ejecuta solo cuando renderiza por primera vez
  // useEffect( () =>{
  //   console.log("hola dentro del efecto con array de dependecias vacio")
  // }, [] //ARREGLO DE DEPENDENCIAS
  // )
  
  // //useEffect que esté a la espera de la escucha de isDark
  // useEffect( () =>{
  //   console.log("hola dentro del efecto con array de dependecia a la escucha")
  // }, [ isDark] //ARREGLO DE DEPENDENCIAS
  // )

const onAdd = (mensaje) =>{
  alert(mensaje)
}

const task = new Promise( (resolve, reject) =>{
    resolve('todo bien')
    reject('todo mal')
    }
)

task
      .then((res)=>{console.log(res)})
      .catch( (err) =>{console.log(err )})



  return (
      <div  /*  className={isDark ? "itemsContainer-dark": "itemsContainer-light" }  */>

{/*
          <h2> {props}</h2>

          <button onClick={toggleMode}>
                  {isDark ? 'cambiar a modo claro':'cambiar a modo oscuro'} 
            </button>
  */}
          <ItemCount stock={10} onAdd={onAdd}/>
      </div>
  )
}

export default ItemListContainer