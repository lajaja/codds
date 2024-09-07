import React from "react";
import { Routes, Route } from "react-router-dom";

import Home from "./components/Home.jsx";
// import Lol from "./components/Lol.jsx";
import Layout from "./components/Layout.jsx";
function App() {
  return (
    <>
    
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          {/* <Route path="materials" element={<Lol />} /> */}
          {/* <Route path="clothes" element={<Lol />} /> */}
          <Route path="*" element={<Home />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
