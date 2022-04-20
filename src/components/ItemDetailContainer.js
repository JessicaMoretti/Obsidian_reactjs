import React, { useEffect, useState } from "react";
import ItemDetail from "./ItemDetail";
import { useParams } from "react-router-dom";
import { db } from './Firebase'
import { collection, where, query, getDocs } from "firebase/firestore";

const ItemDetailContainer = (props) => {
    console.log(props)
    const [itemDeProductos, setItemDeProductos] = useState({});

    const { id } = useParams()


    useEffect(() => {
        const productosCollection = collection(db, "db");
        const miFiltro = query(productosCollection, where("id", "==", Number(id)))
        const documentos = getDocs(miFiltro)
        documentos
            .then(respuesta => setItemDeProductos(respuesta.docs.map(doc => doc.data())[0]))
            .catch((error) => {
                console.log("Error al obtener los productos");
            })
    }, [id]);

    const greeting = props.greeting
    return (
        <>
            <h1>{greeting}</h1>
            <ItemDetail itemProductos={itemDeProductos} />

        </>
    );
}

export default ItemDetailContainer;