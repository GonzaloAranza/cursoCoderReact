
const CustomButton = ({textBox, counter, setCounter}) => {
    
    const sumar = () =>{
        setCounter (counter +1)
    }
  return (
    <button onClick={sumar}>{textBox} </button>
  )
}

export default CustomButton