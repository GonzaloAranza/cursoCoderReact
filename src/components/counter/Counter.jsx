import { useState } from "react"
import CustomButton from "../customButton/CustomButton"


const Counter = () => {

const [counter , setCounter ] = useState (0)




  return (
<>
    <h2>{counter}</h2>
    <CustomButton textBox={"sumar"} counter ={counter} setCounter={setCounter} />
 </>
  )
}

export default Counter