import "./styles.css";
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import principal from "../../images/principal.jpg";
import { DataContext } from "../../context/DataProvider";
import { Carrito } from "../Shopping cart/carrito";

export const Header = () => {
  const value = useContext(DataContext);
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
          <Link to="/formNewP">NUEVOS PRODUCTOS</Link>
        </li>
        <li>
          <Link to="/login">LOGIN</Link>
        </li>
      </ul>
      <div className="cart" onClick={toogleMenu}>
        <span className="item__total"> {carrito.length} </span>
        <Carrito />
      </div>
    </header>
  );
};
