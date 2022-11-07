import React, {useContext} from "react";
import { DataContext } from "../../context/Dataprovider";
import { Link } from "react-router-dom";


export const ProductoItem = ({
    id,
    title,
    price,
    image,
    author,
}) =>{

 

    const value = useContext(DataContext)
    const addCarrito = value.addCarrito;


    return (
        <div className="producto">
        <Link to={`/producto/${id}`}>
    <div className="producto_img">   
    <img src={image} alt={title}></img>
</div>
</Link>
<div className="producto_footer">
    <h1>{title}</h1>
    <p>{author}</p>
    <p className="price">${price}</p>
</div>
<div className="button">
    <button className="btn" onClick={() => addCarrito(id)}>Añadir al carrito</button>
    <div>
    <Link to={`/producto/${id}`} className="btn">
        Vista
    </Link>
</div>
</div>
</div>
    )
}