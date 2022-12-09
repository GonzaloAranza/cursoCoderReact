import { useState } from "react"



const ItemCount = ({stock,onAdd}) => {

    const [cantidad,setCantidad] = useState(1)

    const sumar = () =>{
        if(cantidad < stock)
        setCantidad(cantidad +1 )
    }

    const restar = () =>{
        if(cantidad >1)
        setCantidad(cantidad - 1 )
        
    }

    const mensaje = () =>{

        onAdd('productos agregados al carrito: ' + cantidad) 
        
    }

  return (
    
    <div>
                    <button onClick={restar}>-</button>
                     <span>{cantidad}</span>
                     <button onClick={sumar}>+</button>
                    <button onClick={stock > 0 ? mensaje : null}>Agregar al carrito</button>
    </div>
  )
}

export default ItemCount