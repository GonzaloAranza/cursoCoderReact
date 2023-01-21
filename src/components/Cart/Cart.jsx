import React, {useContext} from 'react'
import { Link } from 'react-router-dom'
import { CartContext } from '../CartContext/CartContext'
import CartList from '../CartList/CartList'


function Cart() {

    const { cartList } = useContext(CartContext)

    return (
        <>
            <img src='https://res.cloudinary.com/dfln5arua/image/upload/v1674314532/gamingpc_hdpcsi.jpg' className="img-fluid"></img>
            {cartList.length === 0
            ? 
                <div className="container mt-5">
                    <div className="row text-center justify-content-center">
                        <h3 className="my-5">Carrito Vacio</h3>
                        <h4 className="my-5">¿Agregar productos?</h4>
                        <Link className="btn btn-danger bg-gradient w-25" to="/">
                            Volver
                        </Link>
                    </div>
                </div>
            :
                <CartList />
            }
        </>
    )
}

export default Cart
