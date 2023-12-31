import "./styles.css";
import React, { useContext } from "react";
import { DataContext } from "../../context/DataProvider";
import ProductoItem from "../../components/productoItems";
import data from "../../Data/data";

export const Inicio = () => {
  const value = useContext(DataContext);
  const [...productos] = value.productos;

  return (
    <>
      <h1 className="produ">PRODUCTOS</h1>
      <div className="productos">
        {data.items.map((producto) => (
          <ProductoItem
            key={producto.id}
            title={producto.title}
            image={producto.image}
            category={producto.category}
            type={producto.Type}
            price={producto.price}
            id={producto.id}
          />
        ))}
      </div>
    </>
  );
};
