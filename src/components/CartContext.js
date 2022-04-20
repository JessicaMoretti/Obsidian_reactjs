import { createContext, useEffect, useState } from "react";

export const contexto = createContext()
const { Provider } = contexto;

const MiProvider = ({ children }) => {

    const [carrito, setCarrito] = useState([]);
    const [cantidad, setCantidad] = useState(0);
    const [totalItems, setTotalItems] = useState(0);
    const [precioTotal, setPrecioTotal] = useState(0);

    const borrarDelCarrito = (id) => {

        const carritoAux = carrito.filter(elemento => elemento.producto.id !== id);
        setCarrito(carritoAux)
    }

    const isInCart = (producto) => {
        return carrito && carrito.some(item => item.producto.id === producto.id)
    }

    const agregarAlCarrito = (producto, cantidad) => {
        let cartProduct = {producto,cantidad}
    
        let carritoAux = []
        if(isInCart(producto)) {
          cartProduct = carrito.find(item => item.producto.id === producto.id)
          cartProduct.cantidad = cartProduct.cantidad + cantidad
          carritoAux = [...carrito]
        }else{
          carritoAux = [cartProduct, ...carrito]
        }
        return setCarrito(carritoAux)
      };

    const limpiarCarrito = () => {
        setCarrito([]);
    };


    useEffect(() => {
        let total = 0
        carrito.map(elemento => {
            total += elemento.cantidad
            return setTotalItems(total)
        });
    }, [carrito])

    useEffect(() => {
        let total = 0
        carrito.map(elemento => {
            total += elemento.producto.precio * elemento.cantidad;
            return setPrecioTotal(total)
        });
    }, [carrito]);

    const valorDelContexto = {
        borrarDelCarrito,
        limpiarCarrito,
        carrito,
        cantidad,
        precioTotal,
        totalItems,
        agregarAlCarrito,
        isInCart,
    };

    return <Provider value={valorDelContexto}>{children}</Provider>;
};

export default MiProvider;