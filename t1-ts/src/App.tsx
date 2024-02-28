import React from "react";
import { Pages } from "./pages/Pages";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Catalog } from "./pages/Catalog";
import { ProductsList } from "./pages/ProductsList";

function App() {
  return <Pages/>;
//   return (
//     <BrowserRouter>
//       <Routes>
//         <Route path="/t1/" element={<Catalog />} />
//         <Route path="/t1/staff" element={<ProductsList />} />
//         {/* <Route path="/t1/item/:id" element={<Item />} /> */}
//       </Routes>
//     </BrowserRouter>
//   );
}

export default App;
