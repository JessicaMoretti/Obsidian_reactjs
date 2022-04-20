import ItemListContainer from "./components/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer";
import Carrito from "./components/Carrito";
import { Route, Routes } from "react-router-dom";


const Main = () => {
    return (
        <main className="container">
            <Routes>
                <Route path="/" element={<ItemListContainer greeting="WE ARE BLACK"/>}/>
                <Route path="/categoria/:categoria" element={<ItemListContainer/>}/>
                <Route path="/item/:id" element={<ItemDetailContainer/>}/>
                <Route path="/carrito" element={<Carrito/>}/>
            </Routes>
        </main>
    );
}

export default Main;