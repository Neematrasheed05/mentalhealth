import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="bg-yellow-900 text-yellow-200 py-4 w-full sticky top-0 left-0">
      <div className="container mx-auto flex justify-center items-center">
        <Link to="/home" className="text-lg font-bold">
          Home
        </Link>
        <Link to="/about" className="text-lg font-bold ml-20">
          About
        </Link>
        <Link to="/services" className="text-lg font-bold ml-20">
          Services
        </Link>
        <Link to="/services" className="text-lg font-bold ml-20">
          Contact
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
