import {BsCart4} from "react-icons/bs"
import {Link} from "react-router-dom"
const CartWidget = () => {
  return (
    <Link to={"/cart"}>
        <div>
        <BsCart4 size={30} />
        </div>
    </Link>
  )
}

export default CartWidget

