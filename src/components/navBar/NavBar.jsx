import "./NavBar.css";
import CartWidget from "../cartWidget/CartWidget";


const NavBar = () => {

 

  return (
    <nav>
        <ul className="navBar">
            <li className="navbar-Item">procesadores</li>
            <li className="navbar-Item">placas de video</li>
            <li className="navbar-Item">memorias</li>
        </ul>

        <CartWidget />
        
    </nav>
  );
};

export default NavBar;
