import React, { useState } from "react";
import ItemCount from "./ItemCount";
import { Link } from "react-router-dom";
import Button from 'react-bootstrap/Button'
import { contexto } from './CartContext';
import { useContext } from "react";

const ItemDetail = (props) => {
  
  const item = props.itemProductos;

  const carritoContext = useContext(contexto)

  const onAdd = (unidades) => {
    carritoContext.agregarAlCarrito(item,unidades)
    setconfCompra(false)

  }

  const [confCompra, setconfCompra] = useState(true)

  return (
    <div id="cardDetalle">
      <img src={item.img} />
      <div className="detalleTxt">
      <h4>{item.nombre}</h4>
      <h5>Precio: ${item.precio}</h5>
      <h6>{item.descripcion}</h6>
      {confCompra ? <ItemCount initial={1} stock={7} onAdd={onAdd} /> : <Link to='/carrito'><Button className="btn">Ir al carrito</Button></Link>}
      </div>
    </div>
  );
};

export default ItemDetail;