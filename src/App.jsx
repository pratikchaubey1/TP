import React from "react";
import { Routes, Route } from "react-router-dom";
import Nav from "./Components/Nav";
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import Cart from "./Pages/Cart";
import Card from "./Components/Card";

function App() {
  return (
    <div>
      <Nav />  {/* Navbar will appear on all pages */}
      <Card></Card>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<Login />} />
        <Route path="/contact" element={<Cart />} />
      </Routes>
    </div>
  );
}

export default App;
