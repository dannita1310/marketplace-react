import "./App.css";
import React from "react";
import { Header } from "./components/header/header";
import { Carrito } from "./components/Shopping cart/carrito";
import { DataProvider } from "./context/DataProvider";
import { BrowserRouter } from "react-router-dom";
import Page from "./routes/Page";

function App() {
  return (
    <DataProvider>
      <div className="App">
        <BrowserRouter>
          <Page>
            <Header />
            <Carrito />
            <Page />
          </Page>
        </BrowserRouter>
      </div>
    </DataProvider>
  );
}

export default App;
