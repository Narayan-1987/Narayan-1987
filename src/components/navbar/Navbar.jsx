import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div className="flex items-center w-full justify-between px-6 py-4 bg-black/90 backdrop-blur-md fixed top-0 z-50 border-b border-cyan-400 shadow-[0_0_15px_#00f7ff]">

      {/* Neon Logo */}
      <div className="h-16 w-16 rounded-full bg-[url('/energylogo.jpg')] bg-cover border-2 border-cyan-400 shadow-[0_0_20px_#00f7ff] hover:shadow-[0_0_30px_#ff00ff] transition-all duration-300"></div>

      {/* Neon Links */}
      <div className="flex gap-8 text-lg font-semibold">
        <Link
          to="/"
          className="text-cyan-400 hover:text-pink-500 drop-shadow-[0_0_8px_#00f7ff] hover:drop-shadow-[0_0_12px_#ff00ff] transition-all duration-300"
        >
          Home
        </Link>
        <Link
          to="/about"
          className="text-green-400 hover:text-yellow-400 drop-shadow-[0_0_8px_#39ff14] hover:drop-shadow-[0_0_12px_#ffff00] transition-all duration-300"
        >
          About
        </Link>
        <Link
          to="/project"
          className="text-pink-400 hover:text-cyan-400 drop-shadow-[0_0_8px_#ff00ff] hover:drop-shadow-[0_0_12px_#00f7ff] transition-all duration-300"
        >
          Project
        </Link>
        <Link
          to="/contact"
          className="text-yellow-400 hover:text-purple-400 drop-shadow-[0_0_8px_#ffff00] hover:drop-shadow-[0_0_12px_#a020f0] transition-all duration-300"
        >
          Contact
        </Link>
      </div>
    </div>
  );
}
