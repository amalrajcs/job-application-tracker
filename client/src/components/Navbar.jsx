import React from "react";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const location = useLocation();

  const linkClasses = (path) =>
    `px-4 py-2 rounded-md text-sm font-medium transition ${
      location.pathname === path
        ? "bg-blue-600 text-white"
        : "text-gray-700 hover:bg-blue-100"
    }`;

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto flex justify-between items-center px-6 py-3">
        <h1 className="text-xl font-bold text-blue-600">Job Tracker</h1>

        <div className="flex gap-3">
          <Link to="/" className={linkClasses("/")}>
            Dashboard
          </Link>
          <Link to="/add" className={linkClasses("/add")}>
            Add Job
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
