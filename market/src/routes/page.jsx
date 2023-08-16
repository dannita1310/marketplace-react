import React from "react";

import {Inicio} from "../pages/inicio";
// import { Producto } from "../components/productoItems/index";
import { ProductosDetalles } from "../pages/productoDetalles";
import { Navigate, Route, Routes } from "react-router-dom";

function Page() {
  return (
    <section>
      <Routes>
        <Route path="/" element={<Inicio />}>
          {/* <Route path="/productos" element={<Producto />}></Route> */}
          <Route path="/producto/:id" element={<ProductosDetalles />} />
        </Route>

        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </section>
  );
}

export default Page;
