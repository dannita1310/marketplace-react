import "./styles.css";
import React, { useContext } from "react";
import data from "../../Data/data";
import { Link } from "react-router-dom";
import principal from "../../images/principal.jpg";

export const Header = () => {
  const value = useContext(data);
  const [carrito] = value.carrito;
  const [menu, setMenu] = value.menu;

  const toogleMenu = () => {
    setMenu(!menu);
  };

  return (
    <header>
      <div className="menu">
        <box-icon name="menu"></box-icon>
      </div>
      <Link to="/">
        <div className="logo">
          <img src={principal} alt="Imagen no disponible" width="150" />
        </div>
      </Link>
      <ul>
        <li>
          <Link to="/">INICIO</Link>
        </li>
        <li>
          <Link to="/productos">PRODUCTOS</Link>
        </li>
      </ul>
      <div className="cart" onClick={toogleMenu}>
        <box-icon name="cart"></box-icon>
        <span className="item__total"> {carrito.length} </span>
      </div>
    </header>
  );
};
