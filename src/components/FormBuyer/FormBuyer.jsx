import { useState, useContext } from 'react'
import { CartContext } from '../CartContext/CartContext'
import { Link } from 'react-router-dom'
import { getFirestore, collection,  addDoc, Timestamp} from 'firebase/firestore'


const FormBuyer = () => {

    const [orderId, setOrderId] = useState('')
    const [creatingOrder, setCreatingOrder] = useState(false)
    const [formData, setFormData] = useState({
        name:"", email:"", emailConfirm:"", phone:""
    })
    const { cartList, totalBuy, emptyCart } = useContext(CartContext)


    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value   
        })
    }


    const createOrder = (e) => {
        e.preventDefault();
        setCreatingOrder(true)
        delete formData.emailConfirm
        let order = {}
        order.date = Timestamp.fromDate(new Date())
        order.buyer = formData
        order.total = totalBuy()
        
        order.items = cartList.map(cartItem => {
            const id = cartItem.id
            const name = cartItem.name
            const price = cartItem.price
            const quantity = cartItem.quantity
            const totalPrice = cartItem.price * cartItem.quantity
            return {id, name, price, quantity, totalPrice}
        })


        const db = getFirestore()
        const orderCollection = collection(db, 'orders')
        addDoc(orderCollection, order)
        .then(resp => setOrderId(resp.id))
        .catch(err => console.log(err))
        .finally(() => { 
            setCreatingOrder(false)
            emptyCart()
            setFormData({
                name:"", email:"", emailConfirm:"", phone:""
            })
        })


    }

    return (
        <> 
            {creatingOrder
            ?
                <>      
                    <h4 className="mt-5 text-center">Procesando su orden, espere un momento...</h4>
                </>
            :
            orderId
            ? 
                <div className="container">
                    <div className="py-5 text-center mt-5">
                        <h2 className="mt-5">¡Gracias por elegirnos!</h2>
                        <h4 className="my-5">La compra se ha realizado exitosamente.</h4>
                        <Link className="btn btn-danger bg-gradient mt-5" to={`/`}>
                            <strong>Volver al inicio</strong>
                        </Link>
                    </div>
                </div>
            :
                <div className="container mt-5 form__container d-flex">
                    <div className="container align-self-center position-relative">
                        <div className="row">
                            <div className="col-12">
                                <form className="d-flex flex-column"
                                    onSubmit={createOrder}
                                    onChange={handleChange}
                                >
                                    <div className="mb-3 d-flex flex-column align-items-center">
                                        <label className="form-label">Nombre</label>
                                        <input type="name" className="form-control form-control--color" name="name" placeholder="" defaultValue={formData.name} required />
                                    </div>
                                    <div className="mb-3 d-flex flex-column align-items-center">
                                        <label className="form-label">Teléfono</label>
                                        <input type="number" className="form-control form-control--color" name="phone" placeholder="" defaultValue={formData.phone} required />
                                    </div>
                                    <div className="mb-3 d-flex flex-column align-items-center">
                                        <label className="form-label">Email</label>
                                        <input type="email" className="form-control form-control--color" name="email" placeholder="" defaultValue={formData.email} required />
                                    </div>
                                    <div className="mb-3 d-flex flex-column align-items-center">
                                        <label className="form-label">Confirmar Email</label>
                                        <input type="email" className="form-control form-control--color" name="emailConfirm" placeholder="" defaultValue={formData.emailConfirm} required />
                                    </div>
                                    <button className="btn btn-danger bg-gradient d-flex justify-content-center w-50 align-self-center" 
                                        disabled={!formData.name || !formData.phone || !formData.email || formData.email !== formData.emailConfirm || cartList.length == 0}>
                                        Comprar
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            }
        </>
    )
}

export default FormBuyer
