import "./styles.css";
import React, { useContext, useEffect, useState } from "react";
import { DataContext } from "../../context/DataProvider";
import { useParams } from "react-router-dom";
import ProductoItem from "../../components/productoItems";

const ProductosDetalles = () => {
  const value = useContext(DataContext);
  const [productos] = value.productos;
  const addCarrito = value.addCarrito;
  const [detalle, setDetalle] = useState([]);
  const [url, setUrl] = useState(0);
  const [images, setImages] = useState("");
  const params = useParams();
  let item = 0;

  useEffect(() => {
    item = 0;
    productos.forEach((producto) => {
      if (producto.id === parseInt(params.id)) {
        setDetalle(producto);
        setUrl(0);
      }
    });
  }, [params.id, productos]);

  useEffect(() => {
    const values = `${detalle.img1}${url}${detalle.img2}`;
    setImages(values);
  }, [url, params.id]);

  const handleInput = (e) => {
    const number = e.target.value.toString().padStart(2, "01");
    setUrl(number);
  };

  if (detalle.length < 1) return null;

  return (
    <>
      <div className="detalles">
        <h2>{detalle.title}</h2>
        <p className="price">PRICE: ${detalle.price}</p>
        {url ? (
          <img src={images} alt={detalle.title} />
        ) : (
          <img src={detalle.image} alt={detalle.title} />
        )}
        <div className="description">
          <p>
            <b>
              description: Los mejores instrumentos del mercado, con los mejores
              precios!
            </b>
          </p>
          <br />
          <p></p>
        </div>
        <div className="grid">
          <p className="nuevo">Nuevo</p>
          <button onClick={() => addCarrito(detalle.id)}>
            Añadir al carrito
          </button>
        </div>
      </div>

      <h2 className="relacionados">Productos relacionados</h2>
      <div className="productos">
        {productos.map((producto) => {
          if (item < 6 && detalle.category === producto.category) {
            item++;
            return (
              <ProductoItem
                key={producto.id}
                title={producto.title}
                image={producto.image}
                category={producto.category}
                price={producto.price}
                id={producto.id}
              />
            );
          }
        })}
      </div>
    </>
  );
};

export default ProductosDetalles;
