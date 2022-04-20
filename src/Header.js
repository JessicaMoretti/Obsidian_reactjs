import logo from "./images/OBSIDIANLOGO.png"
import NavBar from "./components/NavBar"

function Header(){
    return (
        <header id= "main__header">
            <img src={logo} alt="" />
            <NavBar/>
        </header>
    )
}

export default Header