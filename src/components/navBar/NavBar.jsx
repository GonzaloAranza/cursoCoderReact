import "./NavBar.css";
import CartWidget from "../cartWidget/CartWidget";
import { Link } from "react-router-dom";

const NavBar = () => {

 

  return (
    <nav>
        <ul className="navBar">
            <Link className="navbar-Item" to={`/category/procesador`}>Procesadores</Link>
            <Link className="navbar-Item" to={`/category/memoria`}>memorias</Link>
            <Link className="navbar-Item"to={"/"}>Todos</Link>
        </ul>

        <CartWidget />
        
    </nav>
  );
};

export default NavBar;
