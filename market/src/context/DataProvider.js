import React, { createContext, useState, useEffect } from "react";
import Data from "../Data/data";
import Swal from "sweetalert2";

export const DataContext = createContext();

export const DataProvider = (props) => {
  const [productos, setProductos] = useState(Data.items);
  const [menu, setMenu] = useState(false);
  const [carrito, setCarrito] = useState([]);
  const [total, setTotal] = useState(0);

  // useEffect(() => {
  //   const producto = Data.items;
  //   if (producto) {
  //     setProductos(producto);
  //   } else {
  //     setProductos([]);
  //   }
  // }, []);

  const addCarrito = (id) => {
    const check = carrito.every((item) => {
      return item.id !== id;
    });
    if (check) {
      const data = productos.filter((producto) => {
        return producto.id === id;
      });
      setCarrito([...carrito, ...data]);
    } else {
      Swal.fire({
        icon: "success",
        title: "Sin problemas",
        text: "Articulo agregado con éxito!",
      });
    }
  };
  useEffect(() => {
    const dataCarrito = JSON.parse(localStorage.getItem("dataCarrito"));
    if (dataCarrito) {
      setCarrito(dataCarrito);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("dataCarrito", JSON.stringify(carrito));
  }, [carrito]);

  const getTotal = () => {
    const res = carrito.reduce((prev, item) => {
      return prev + item.price * item.cantidad;
    }, 0);
    setTotal(res);
  };

  useEffect(() => {
    getTotal();
  }, [carrito]);

  const value = {
    productos: [productos],
    menu: [menu, setMenu],
    carrito: [carrito, setCarrito],
    addCarrito: addCarrito,
    total: [total, setTotal],
  };
  return (
    <DataContext.Provider value={value}>{props.children}</DataContext.Provider>
  );
};
