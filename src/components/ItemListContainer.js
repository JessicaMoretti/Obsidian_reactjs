import React, { useEffect, useState } from "react";
import ItemList from "./ItemList";
import itemProductos from "../Utiles";
import { db } from './Firebase';
import { useParams } from "react-router-dom";
import { getDocs, collection, query, where } from "firebase/firestore";

console.log(db);


const ItemListContainer = (props) => {
    const [listaProductos, setListaProductos] = useState([]);
    const { categoria } = useParams();

    useEffect(() => {

        if (!categoria) {

            const productosCollection = collection(db, "db");
            const documentos = getDocs(productosCollection)

            documentos
                .then((respuesta) => setListaProductos(respuesta.docs.map(doc => doc.data())))
                .catch((error) => console.log("Error al obtener los productos"))

        } else {
            const productosCollection = collection(db, "db")
            const miFiltro = query(productosCollection, where("categoria", "==", categoria))
            const documentos = getDocs(miFiltro)

            documentos
                .then((respuesta) => setListaProductos(respuesta.docs.map(doc => doc.data())))
                .catch((error) => console.log("Error al obtener los productos"))
        }

    }, [categoria])

    const greeting = props.greeting
    return (
        <>
            <h1>{greeting}</h1>
            <ItemList lista={listaProductos} />
        </>
    );


}

export default ItemListContainer;