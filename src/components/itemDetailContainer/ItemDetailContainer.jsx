import {useState, useEffect} from 'react'
import { useParams } from 'react-router-dom'
import ItemDetail from '../ItemDetail/ItemDetail'
import {productos} from '../../productsMock'

function ItemDetailContainer() {

    const {idProduct} = useParams()
    const [product, setProduct] = useState({})
    /*
    useEffect(() => {
        const db = getFirestore()
        const queryDb = doc(db, 'items', idProduct )
        getDoc(queryDb)
        .then(resp => setProduct( { id: resp.id, ...resp.data() } ))
        .finally(() => setLoading(false))
    }, [idProduct])
*/

useEffect(() => {
    let producto = productos.filter( productos => productos.id === parseInt(idProduct))
  
setProduct(producto[0])
{console.log(product)}
   
}, [idProduct])
    return (
        <div>
           
               <ItemDetail product={product}/>
            
        </div>
    )
}

export default ItemDetailContainer
