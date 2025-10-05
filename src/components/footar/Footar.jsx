import React from 'react'
import { FaTwitter, FaLinkedin } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="bg-black text-white py-10">
      {/* Navigation Links */}
      <div className="flex flex-wrap justify-center gap-6 text-base font-medium">
        {["About Us", "Services", "Industries", "Case Studies", "Contact"].map(
          (item, idx) => (
            <a key={idx} href="#" className="hover:text-gray-400 transition">
              {item}
            </a>
          )
        )}
      </div>

      {/* Social Icons */}
      <div className="flex justify-center gap-6 mt-6 text-2xl">
        <a href="#" className="hover:text-gray-400 transition">
          <FaTwitter />
        </a>
        <a
          href="https://www.linkedin.com/feed/"
          className="hover:text-gray-400 transition"
        >
          <FaLinkedin />
        </a>
      </div>

      {/* Copyright */}
      <div className="text-center mt-8 text-sm text-gray-400">
        © {new Date().getFullYear()} Greenly Solar Energy Inc. All rights reserved.
      </div>
    </footer>
  );
}
