import React, { useState } from "react";
import Swal from "sweetalert2";
import styles from "./styles.css";
import data from "../../Data/data";

function FormNewP() {
  const [productData, setProductData] = useState({
    id: data.items.length,
    title: "",
    price: "",
    image: "",
    category: "",
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;

    if (name === "productName") {
      setProductData((prevData) => ({
        ...prevData,
        title: value,
      }));
    } else if (name === "productPrice") {
      setProductData((prevData) => ({
        ...prevData,
        price: value,
      }));
    } else if (name === "productImage") {
      const selectedImage = value;

      setProductData((prevData) => ({
        ...prevData,

        image: selectedImage,
      }));
    } else if (name === "productCategory") {
      setProductData((prevData) => ({
        ...prevData,
        category: value,
      }));
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!data.items.some((item) => item.id === productData.id)) {
      data.items.push(productData);
      console.log(data.items);
      Swal.fire({
        icon: "success",
        title: "Sin problemas",
        text: "Articulo agregado con éxito!",
      });
    }
  };

  return (
    <div className="formulario">
      <div className="container">
        <h1 className="descr">Agregar Producto Nuevo</h1>
        <form className="form" onSubmit={handleSubmit}>
          <div className="input">
            <input
              type="text"
              name="productName"
              value={productData.productName}
              onChange={handleInputChange}
            />
            <label>Nombre del Producto</label>
          </div>
          <div className="input">
            <input
              type="number"
              name="productPrice"
              value={productData.productPrice}
              onChange={handleInputChange}
            />
            <label>Precio del Producto</label>
          </div>
          <div className="input">
            <input
              type="text"
              name="productImage"
              accept="image/*"
              onChange={handleInputChange}
            />
            <label>Foto del Producto</label>
          </div>
          <div className="input">
            <input
              type="text"
              name="productCategory"
              value={productData.category}
              onChange={handleInputChange}
            />
            <label>Categoría del Producto</label>
          </div>
          <button title="Add" className="cssbuttons-io-button">
            <svg
              height="25"
              width="25"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M0 0h24v24H0z" fill="none"></path>
              <path
                d="M11 11V5h2v6h6v2h-6v6h-2v-6H5v-2z"
                fill="currentColor"
              ></path>
            </svg>
            <span>Add</span>
          </button>
        </form>
      </div>
    </div>
  );
}

export default FormNewP;
