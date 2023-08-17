import "./App.css";
import React from "react";
import { DataProvider } from "./context/DataProvider";
import { BrowserRouter } from "react-router-dom";
import Routing from "./routes/routing";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <DataProvider>
          <Routing />
        </DataProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
