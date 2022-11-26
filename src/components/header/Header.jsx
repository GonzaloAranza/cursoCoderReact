import "./Header.css";
import NavBar from "../navBar/NavBar"
import CartWidget from "../cartWidget/CartWidget";

const Header = () =>{
return(
<header>
    <div className="logoContainer">
    <img 
    src="https://res.cloudinary.com/dfln5arua/image/upload/v1669503486/logo_onbmp4.jpg" 
    />
    </div>
    <NavBar/>
    <CartWidget />

</header>
)
}

export default Header;
