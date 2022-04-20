import NavBar from "./components/NavBar"
import Footer from "./Footer"
import Main from "./Main"
import { BrowserRouter } from "react-router-dom"
import MiProvider from "./components/CartContext"
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
    return (
        <MiProvider>
            <BrowserRouter>
                <NavBar></NavBar>
                <Main />
                <Footer />
            </BrowserRouter>
        </MiProvider>
    )
}

export default App