import React from "react";
import { Route, Routes } from "react-router-dom";
import Inicio from "../pages/inicio/index";
import { ProductoItems } from "../pages/productos";
import { ProductosDetalles } from "../pages/productoDetalles";

function Page() {
  return (
    <div>
      <Routes>
        <Route path="/" exact component={Inicio} />
        <Route path="/productos" exact component={ProductoItems} />
        <Route path="/producto/:id" exact component={ProductosDetalles} />
      </Routes>
    </div>
  );
}

export default Page;
