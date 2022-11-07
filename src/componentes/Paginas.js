import React from "react";
import {Routes, Route} from "react-router-dom";
import {Inicio} from "./Inicio/Index";
import { ProductosLista } from "./Productos/index";
import { ItemDetail } from "./Productos/ProductoDetalle";


export const Paginas = () => {
    return (
        <section>
            <Routes>
                <Route  path="/" exact element={<Inicio/>} />
                <Route  path="/productos" exact element={<ProductosLista/>} />
                <Route  path="/producto/:id"  exact element={<ItemDetail/>} />
            </Routes>
        </section>
    )
}

export default Paginas;