import React from "react";
import { Inicio } from "../pages/inicio";
import ProductosDetalles from "../pages/productoDetalles";
import { Navigate, Route, Routes } from "react-router-dom";
import Layout from "../layout";
import FormNewP from "../pages/formNewP";
import LoginForm from "../pages/loginForm";

function Routing() {
  return (
    <section>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Inicio />} />
          <Route path="/producto/:id" element={<ProductosDetalles />} />
          <Route path="/formNewP" element={<FormNewP />} />
          <Route path="/login" element={<LoginForm />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Route>
      </Routes>
    </section>
  );
}

export default Routing;
