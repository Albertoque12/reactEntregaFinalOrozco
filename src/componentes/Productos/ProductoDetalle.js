import React, {useContext, useState, useEffect} from "react";
import { useParams } from "react-router-dom";
import { DataContext } from "../../context/Dataprovider";
import { ProductoItem } from "./ProductoItem";


export const ItemDetail = () => {
    const value = useContext(DataContext)
    const [productos] = value.productos;
    const addCarrito = value.addCarrito;
    const [detalle, setDetalle ] = useState([])
    const params = useParams();


    useEffect(() =>{
        productos.forEach(producto =>{
            console.log(producto.id, parseInt(params.id));
            if(producto.id === parseInt(params.id)){
                setDetalle(producto)
            }
        })
    },[params.id, productos] )  
 

    return (
        <>
        <div className="detalles">
            <h2>{detalle.title}</h2>
            <h2>{detalle.author}</h2>
            <p className="price">${detalle.price}</p>
            <button onClick={()=> addCarrito(detalle.id)} >Añadir al carrito</button>
            <img src={detalle.image} alt={detalle.title} />
        </div> 
        </>
    )
}

export default ItemDetail