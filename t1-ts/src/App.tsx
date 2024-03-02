import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Catalog } from "./pages/Catalog";
import { ProductsList } from "./pages/ProductsList";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Catalog />} />
        <Route path="/ProductsList" element={<ProductsList />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
