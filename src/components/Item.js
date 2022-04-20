import React from "react";
import { Link } from "react-router-dom";
import Button from 'react-bootstrap/Button'

const Item = (props) => {

  const producto = props.producto;

  return (
    <div id="cards">
      <img src={producto.img} alt={producto.nombre} />
      <div className="cardTxt">
        <h5>{producto.nombre}</h5>
        <h6>Precio: ${producto.precio}</h6>
      </div>
      <Link to={`/item/${producto.id}`} className="detalle"><Button variant="Dark" className="btnDetalle">
        Ver detalle</Button></Link>
    </div>

  );
};

export default Item;