import React from "react";
import { Routes, Route } from "react-router-dom";

import "./App.css";
import Home from "./pages/homepage/Home";
import Register from "./pages/register/Register";

// app me hi state patakna hai, usko register pe update karke

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </>
  );
}

export default App;
