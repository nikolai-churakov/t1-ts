import React from "react";
import { Pages } from "./pages/Pages";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Catalog } from "./pages/Catalog";
import { ProductsList } from "./pages/ProductsList";

// interface BrowserRouterProps {
//   basename?: string;
//   children?: React.ReactNode;
//   future?: FutureConfig;
//   window?: Window;
// }


function App() {
    
  return <Pages />;

//   return (
//     <BrowserRouter basename="/Pages">
//       <Routes>
//         <Route path="/t1-ts/"/> {}
        
//       </Routes>
//     </BrowserRouter>
//   );
// }

// function Pages() {
    
//   return <Pages />;

}

export default App;
