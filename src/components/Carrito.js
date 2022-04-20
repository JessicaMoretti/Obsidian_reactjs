import React from 'react'
import { useContext } from 'react'
import { contexto } from './CartContext'
import { Link } from 'react-router-dom'
import CARRITOVACIO from '../images/CARRITOVACIO.png'
import Button from 'react-bootstrap/Button'
import { db } from './Firebase'
import { addDoc, collection, serverTimestamp } from 'firebase/firestore'

const Carrito = () => {

  const { carrito, borrarDelCarrito, precioTotal, totalItems } = useContext(contexto)


  const btnConfirmarCompra = () => {

    const pedidoVenta = {
      buyer: {
        nombre: 'Jessica Moretti',
        telefono: '123456789',
        email: "jessica.moretti@gmail.com"
      },
      items: totalItems,
      date: serverTimestamp(),
      total: precioTotal,
    }
    const ventasCollection = collection(db, "ventas");
    const pedido = addDoc(ventasCollection, pedidoVenta)
  }
  return (
    <>
      <div className='carritoTextContainer'>
        <h2>Carrito</h2>
        {carrito.length === 0 ? 
        <Link to="/" id="link"> 
          <img src={CARRITOVACIO}></img>
          <p>Carrito Vacio, Ir a Inicio</p>
        </Link>: 
        <p className='totalp'>Productos:{totalItems}  <br/>Total: ${precioTotal}</p>
        }
      </div>

      {
        carrito.map((elemento) => {
          return( 
          <div key={elemento.producto.id} className='carritoItemContainer'>
            <div key={elemento.producto.id} id="cards">
              <img src={elemento.producto.img} alt="" />
              <div className="cardTxt">
                <h4>{elemento.producto.nombre}</h4>
                <h5>${elemento.producto.precio}</h5>
                <p>Cantidad seleccionada: {elemento.cantidad}</p>
                <p>Precio total: ${elemento.producto.precio * elemento.cantidad}</p>
              </div>
              <Button className="btnDetalle" onClick={() => borrarDelCarrito(elemento.producto.id)}>borrar</Button>

            </div>
          </div>) 
        }
        )}
      {carrito.length > 0 && <Button className="btn" variant="Dark" onClick={() => { btnConfirmarCompra() }}>Finalizar Compra</Button>}
    </>
  )
}

export default Carrito