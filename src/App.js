import React from "react";
import {Header} from "./componentes/Header"
import "boxicons";
import {BrowserRouter} from "react-router-dom"
import {Paginas} from "./componentes/Paginas"
import {DataProvider} from "./context/Dataprovider"
import { CartWidget } from "./componentes/Carrito/CartWidget";


function App() {
  return (

    <div className="App">
      <DataProvider>
      <BrowserRouter>
      <Header/>
      <CartWidget/>
      <Paginas/>
      </BrowserRouter>
      </DataProvider>
    </div>

   
  );
}

export default App;
