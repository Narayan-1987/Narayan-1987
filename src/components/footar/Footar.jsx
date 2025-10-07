import React from "react";
import { motion } from "framer-motion";
import {
  FaFacebookF,
  FaInstagram,
  FaYoutube,
  FaLinkedinIn,
  FaEnvelope,
  FaPhoneAlt,
} from "react-icons/fa";

export default function Footer() {
  return (
    <motion.footer
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true }}
      className="bg-[#0e1612] text-gray-300 py-12 px-6 md:px-16 overflow-hidden"
    >
      {/* Top Section */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.8 }}
        className="grid md:grid-cols-4 gap-10 border-b border-gray-700 pb-10"
      >
        {/* Left Section - Quote */}
        <div className="md:col-span-2">
          <motion.h2
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className="text-2xl font-semibold text-white leading-snug"
          >
            Create Your Big Dreams – <br /> With NCL Energy.
          </motion.h2>
        </div>

        {/* Contact Info */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4 }}
        >
          <h3 className="text-white font-semibold mb-4 text-lg">
            CONTACT INFORMATION
          </h3>
          <ul className="space-y-3 text-sm">
            <li className="flex items-center space-x-2">
              <FaEnvelope className="text-green-500" />
              <span>support@teacircle.com</span>
            </li>
            <li className="flex items-center space-x-2">
              <FaPhoneAlt className="text-green-500" />
              <span>1800-3232-8686</span>
            </li>
          </ul>
        </motion.div>

        {/* Subscribe */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
        >
          <h3 className="text-white font-semibold mb-4 text-lg">
            Get In Touch!
          </h3>
          <div className="flex items-center border border-gray-500 rounded-full overflow-hidden">
            <input
              type="email"
              placeholder="Enter your email"
              className="bg-transparent px-4 py-2 w-full focus:outline-none text-sm"
            />
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 text-sm rounded-full transition-all"
            >
              Subscribe
            </motion.button>
          </div>
        </motion.div>
      </motion.div>

      {/* Bottom Section */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.6, duration: 0.8 }}
        className="grid md:grid-cols-4 gap-8 pt-10 text-sm"
      >
        {/* Company Links */}
        <div>
          <h4 className="font-semibold text-white mb-3">NCL Energy</h4>
          <ul className="space-y-2">
            <li>Services</li>
            <li>Projects</li>
            <li>Blogs</li>
            <li>About Us</li>
            <li>Contact</li>
          </ul>
        </div>

        {/* Social Icons */}
        <div className="md:col-span-2 flex md:justify-end items-start flex-col md:items-end">
          <h4 className="font-semibold text-white mb-3">FOLLOW US</h4>
          <div className="flex space-x-4">
            {[
              {
                icon: <FaFacebookF />,
                link: "https://www.facebook.com/narayan.pachaury.2025/",
              },
              {
                icon: <FaInstagram />,
                link: "https://www.instagram.com/narayan_pachaury01/?utm_source=ig_web_button_share_sheet",
              },
              {
                icon: <FaYoutube />,
                link: "https://youtube.com/@garv_official111?si=2X_LKzavfRjRwFKc",
              },
              {
                icon: <FaLinkedinIn />,
                link: "https://www.linkedin.com/",
              },
            ].map((item, index) => (
              <motion.a
                key={index}
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.2, rotate: 10 }}
                whileTap={{ scale: 0.9 }}
                className="p-2 bg-gray-800 rounded-full hover:bg-green-600 transition"
              >
                {item.icon}
              </motion.a>
            ))}
          </div>
        </div>
      </motion.div>

      {/* Footer Bottom */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.7, duration: 0.8 }}
        className="border-t border-gray-700 mt-10 pt-6 flex flex-col md:flex-row justify-between items-center text-xs text-gray-400"
      >
        <p>© {new Date().getFullYear()} NCL Energy. All Rights Reserved.</p>
        <div className="space-x-4 mt-2 md:mt-0">
          <a className="hover:text-green-500 transition">Privacy</a>
          <a className="hover:text-green-500 transition">Terms & Conditions</a>
        </div>
      </motion.div>
    </motion.footer>
  );
}
