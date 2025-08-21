import React from "react";
import { Link } from "react-router-dom"; // MUST import Link

function Nav() {
  return (
    <nav className="p-4 bg-blue-600 text-white flex gap-4">
      <Link to="/">Home</Link>
      <Link to="/about">Login</Link>
      <Link to="/contact">Cart</Link>
    </nav>
  );
}

export default Nav;
