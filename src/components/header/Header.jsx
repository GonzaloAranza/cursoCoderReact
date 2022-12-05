import "./Header.css";
import NavBar from "../navBar/NavBar"

const Header = () =>{
return(
<header>

    <div className="logoContainer">
          <img src= "https://res.cloudinary.com/dfln5arua/image/upload/v1669507788/logo_ujnqsc.png" alt="logo.img" />
    </div>

    <NavBar/>

</header>
)
}

export default Header;
