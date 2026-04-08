import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* TOP BAR */}
      <nav className="fixed top-0 left-0 w-full bg-white shadow z-50">
        <div className="flex justify-between items-center p-4">
          <Link to="/" className="text-xl font-bold text-green-600">
            Nexus Africa
          </Link>

          <button
            className="text-2xl"
            onClick={() => setOpen(true)}
          >
            ☰
          </button>
        </div>
      </nav>

      {/* OVERLAY */}
      {open && (
        <div
          className="fixed inset-0 bg-black bg-opacity-40 z-40"
          onClick={() => setOpen(false)}
        />
      )}

      {/* SIDE MENU */}
      <div
        className={`fixed top-0 right-0 h-full w-64 bg-white shadow-lg z-50 transform transition-transform duration-300 ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="p-4 border-b flex justify-between">
          <h2 className="font-bold">Menu</h2>
          <button onClick={() => setOpen(false)}>✕</button>
        </div>

        <div className="flex flex-col p-4 space-y-4">
          <Link to="/" onClick={() => setOpen(false)}>🏠 Home</Link>
          <Link to="/match" onClick={() => setOpen(false)}>🔍 Explore</Link>
          <Link to="/post-supply" onClick={() => setOpen(false)}>🌾 Supply</Link>
          <Link to="/post-demand" onClick={() => setOpen(false)}>🏢 Demand</Link>
        </div>
      </div>

      {/* SPACER */}
      <div className="h-16"></div>
    </>
  );
};

export default Navbar;