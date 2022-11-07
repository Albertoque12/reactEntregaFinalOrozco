import React from "react";
import Portada from "../../images/inicio.jpg"
import { Link } from "react-router-dom";

export const Inicio = () => {
    return(
        <div className="inicio">
            <Link to="/">
                <h1 className="title">¡Bienvenidos a la Librería Digital  Macondo¡</h1>
            </Link>
            <Link to="/productos">
                <h1 className="title"> Productos</h1> 
            </Link>
            <img src={Portada} alt="Inicio"></img>
        </div>
    )
}


export default Inicio;