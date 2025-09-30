import React from 'react'
import { FaTwitter, FaLinkedin } from 'react-icons/fa';

export default function Footer() {
  return (
    <>
      {/* Footer */}
      <footer className="relative bg-black text-white py-12 border-t border-gray-700 overflow-hidden">
        {/* Neon background glow */}
        <div className="absolute inset-0 bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500 opacity-20 blur-3xl -z-10"></div>

        {/* Navigation Links */}
        <div className="flex justify-center space-x-8 text-base font-medium neon-text">
          {["About Us", "Services", "Industries", "Case Studies", "Contact"].map(
            (item, idx) => (
              <a
                key={idx}
                href="#"
                className="hover:text-pink-400 transition-colors duration-300"
              >
                {item}
              </a>
            )
          )}
        </div>

        {/* Social Icons */}
        <div className="flex justify-center space-x-6 mt-8 text-2xl">
          <a
            href="#"
            className="text-purple-400 hover:text-pink-400 transition-colors duration-300 glow"
          >
            <FaTwitter />
          </a>
          <a
            href="https://www.linkedin.com/feed/"
            className="text-blue-400 hover:text-pink-400 transition-colors duration-300 glow"
          >
            <FaLinkedin />
          </a>
        </div>

        {/* Copyright */}
        <div className="text-center mt-8 text-sm text-gray-400 neon-text">
          © {new Date().getFullYear()} Greenly Solar Energy Inc. All rights reserved.
        </div>
      </footer>

      {/* Neon Glow Classes */}
      <style jsx>{`
        .glow {
          text-shadow: 0 0 5px #fff, 0 0 10px #ff6ec7, 0 0 20px #ff6ec7, 0 0 40px #ff6ec7;
        }
        .neon-text {
          text-shadow: 0 0 2px #fff, 0 0 5px #ff6ec7, 0 0 10px #ff6ec7;
        }
      `}</style>
    </>
  )
}
