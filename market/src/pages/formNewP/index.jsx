import React, { useState } from "react";
import Swal from "sweetalert2";
import styles from "./styles.css";

function FormNewP() {
  const [productName, setProductName] = useState("");
  const [productPrice, setProductPrice] = useState("");
  const [productImage, setProductImage] = useState(null);

  const handleNameChange = (event) => {
    setProductName(event.target.value);
  };

  const handlePriceChange = (event) => {
    setProductPrice(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    Swal.fire({
      icon: "success",
      title: "Sin problemas",
      text: "Articulo agregado con éxito!",
    });
  };

  const handleImageChange = (event) => {
    const selectedImage = event.target.files[0];
    setProductImage(selectedImage);
  };

  return (
    <div className="formulario">
      <div className="container">
        <h1 className="descr">Agregar Producto Nuevo</h1>
        <form className="form" onSubmit={handleSubmit}>
          <div className="input">
            <input
              type="text"
              value={productName}
              onChange={handleNameChange}
            />
            <label>Nombre del Producto</label>
          </div>
          <div className="input">
            <input
              type="number"
              value={productPrice}
              onChange={handlePriceChange}
            />
            <label>Precio del Producto</label>
          </div>
          <div className="input">
            <input
              type="file"
              value={productImage}
              accept="image/*"
              onChange={handleImageChange}
            />
            <label>Foto del Producto</label>
          </div>
          <button title="Add" class="cssbuttons-io-button">
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
