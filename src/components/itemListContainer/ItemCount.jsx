import React, {useState} from 'react'

function ItemCount({initial, max, onAdd}) {

    const [value, setValue] = useState(initial)


    const btnSuma = () => {
        if (value < max) {
            setValue(value + 1);
        } 
    }


    const btnResta = () => {
        if (value > initial)  {
            setValue(value - 1)
        }
    }
    
    return (
        <div>
            <div className="d-flex justify-content-center align-items-center">
                <button onClick={btnResta} className="btn btn-dark">-</button>
                <h3 className="m-3">{value}</h3>
                <button onClick={btnSuma} className="btn btn-dark">+</button>
            </div>
            <div className="d-flex justify-content-center">
                <button onClick={()=> onAdd(value)} className="btn btn-danger bg-gradient mt-3">Añadir Carrito</button>
            </div>
        </div>
    )
}

export default ItemCount
