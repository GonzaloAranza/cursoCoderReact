import { useState } from 'react'
import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { products } from '../../productsMock'
const ItemDetailContainer = () => {

const [product, setProduct] = useState({})

const { id } = useParams()


useEffect (()=>{
    const productSelected = products.find( producto => producto.id == id)
    setProduct(productSelected)
}
,[id])

console.log(product)
 
  return (
    <div>
    <h1>{product.name}</h1>
    <span>{product.description}</span>
    </div>
  )
}

export default ItemDetailContainer