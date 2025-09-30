import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FiMessageCircle, FiSearch } from "react-icons/fi";
import { NavLink } from "react-router-dom";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  const links = [
    { name: "home", path: "/" },
    { name: "about", path: "/about" },
    { name: "services", path: "/services" },
    { name: "project", path: "/project" },
    { name: "blogs", path: "/blogs" },
    { name: "contact", path: "/contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`w-full fixed top-0 z-50 backdrop-filter backdrop-blur-lg transition-colors duration-500 ${scrolled
          ? "bg-gray-900 bg-opacity-90" // background color on scroll
          : "bg-transparent bg-opacity-30" // default
        }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <img
            src="/logo_1.png"
            alt="Greenly Logo"
            className="h-50 w-30 object-contain"
          />
          <div className="text-white font-bold text-lg leading-tight">
            <div className="text-xs font-normal tracking-wide text-gray-200"></div>
          </div>
        </div>

        {/* Nav Links */}
        <nav className="hidden md:flex gap-8 font-semibold text-sm text-white">
          {links.map((link, i) => (
            <motion.div key={i} whileHover={{ scale: 1.1 }}>
              <NavLink
                to={link.path}
                className={({ isActive }) =>
                  `transition-colors duration-300 cursor-pointer hover:text-orange-500 ${isActive ? "text-orange-500" : ""
                  }`
                }
              >
                {link.name.toUpperCase()}
              </NavLink>
            </motion.div>
          ))}
        </nav>

        {/* Right Side */}
        <div className="flex items-center gap-4">
          <button className="p-2 rounded-full hover:bg-blue-600 text-white">
            <FiSearch size={18} />
          </button>
          <a
            href="#quote"
            className="px-4 py-2 bg-orange-500 text-white rounded-md font-semibold shadow hover:bg-orange-600 transition"
          >
            GET A QUOTE
          </a>
        </div>
      </div>
    </motion.header>
  );
}
