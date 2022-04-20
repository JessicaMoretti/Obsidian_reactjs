import CartWidget from "./CartWidget"
import { Link } from "react-router-dom";
import { Navbar, Nav } from "react-bootstrap";
import { useContext } from "react";
import { contexto } from "./CartContext";
import OBSIDIANLOGO from "../images/OBSIDIANLOGO.png"


const NavBar = () => {

    const {carrito} = useContext(contexto);
    
    return (
        <>
            <Navbar id ="navContainer">
                    <Link to="/"> <img src={OBSIDIANLOGO} alt="" /></Link>
                    <Nav className="NavBar">
                        <Link  to="/">HOME</Link>
                        <Link  to="/categoria/carteras">CARTERAS</Link>
                        <Link  to="/categoria/mochilas">MOCHILAS</Link>
                        {carrito.length > 0 && <CartWidget/>}
                    </Nav>
                    
            </Navbar>
        </>
    )
}

export default NavBar;