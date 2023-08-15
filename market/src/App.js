import "./App.css";
import React from "react";
import { Header } from "./components/header/header";
import { Carrito } from "./components/Shopping cart/carrito";
import { DataProvider } from "./context/DataProvider";
import { BrowserRouter, BrowserRouter as Router } from "react-router-dom";
import Pages from "./routes/page";
// import "boxicons";

function App() {
  return (
    <DataProvider>
      <div className="App">
        <BrowserRouter>
          <Pages>
            {/* <Header />
            <Carrito />
            <Pages /> */}
          </Pages>
        </BrowserRouter>
      </div>
    </DataProvider>
  );
}

export default App;
