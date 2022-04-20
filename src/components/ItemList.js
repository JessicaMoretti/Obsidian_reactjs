import React from "react";
import Item from "./Item";

const ItemList = (props) => {
  const listaProductos = props.lista;

  return (
    <div id= "cardContainer">
      {listaProductos.map((cadaProducto) => {
        return <Item key= {cadaProducto.id} producto={cadaProducto} />;
      })}
    </div>
  );
};

export default ItemList;