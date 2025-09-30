import React from "react";
import { motion } from "framer-motion";
import { bannerData } from "../../static_data/contectstaticdata";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";

// Custom Marker Icon Fix (Leaflet default icon issue in React)
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png",
  iconUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
  shadowUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
});

// ================= Map Component =================
const MyMap = () => {
  return (
    <section className="w-full h-[80vh] flex justify-center items-center">
      <MapContainer
        center={[20.5937, 78.9629]} // Center of India
        zoom={5} // Zoomed out to show whole India
        scrollWheelZoom={true}
        className="w-full h-full rounded-lg shadow-lg"
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a>'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={[20.5937, 78.9629]}>
          <Popup>
            <h2 className="font-bold">India</h2>
            <p>Center of the Country</p>
          </Popup>
        </Marker>
      </MapContainer>
    </section>

  );
};

// ================= Contact Component =================
const Contact = () => {
  return (
    <>
      {/* ================= Banner Section ================= */}
      <motion.section
        className="relative w-full h-[70vh] flex items-center justify-center bg-gray-900"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <img
          src={bannerData.image}
          alt={bannerData.title}
          className="absolute inset-0 w-full h-full object-cover opacity-90"
        />
        {bannerData.overlay?.enabled && (
          <div
            className="absolute inset-0"
            style={{
              backgroundColor: bannerData.overlay.color,
              opacity: bannerData.overlay.opacity,
            }}
          />
        )}
        <motion.div
          className="relative z-10 text-center text-white px-4"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            {bannerData.title}
          </h1>
          <p className="text-lg md:text-xl">
            <span className="text-green-400">{bannerData.breadcrumb[0]}</span>{" "}
            <span className="mx-2">›</span> {bannerData.breadcrumb[1]}
          </p>
        </motion.div>
      </motion.section>

      {/* ================= Map Section ================= */}
      <MyMap />

      {/* =============================================================== Contact Form Section ================= */}
      <section
        className="w-full flex justify-center items-center py-12 bg-cover bg-center bg-fixed"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1487875961445-47a00398c267?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
        }}
      >
        <div className="flex flex-col md:flex-row w-full max-w-6xl shadow-lg rounded-lg overflow-hidden bg-white/90 backdrop-blur-md">
          {/* Left Side */}
          <motion.div
            className="bg-orange-500 text-white w-full md:w-1/3 p-8 flex flex-col justify-between"
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1 }}
          >
            <div>
              <h2 className="text-3xl font-bold mb-6">Start a new project?</h2>

              <div className="mb-6">
                <h3 className="font-semibold text-lg">Address</h3>
                <p>Aligarh,</p>
                <p>India</p>
              </div>

              <div className="mb-6">
                <h3 className="font-semibold text-lg">Phone</h3>
                <p>Mobile: 8533921354</p>
                <p>Hotline: 7800500200</p>
              </div>

              <div className="mb-6">
                <h3 className="font-semibold text-lg">Email</h3>
                <p>narayanpachaury567@gmail.com</p>
                <p>pachaury.com</p>
              </div>
            </div>

            {/* Social Icons */}
            <motion.div
              className="flex gap-4 mt-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.2 }}
            >
              <a href="#" className="hover:scale-125 transition-transform">
                <i className="fab fa-facebook"></i>
              </a>
              <a href="#" className="hover:scale-125 transition-transform">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="#" className="hover:scale-125 transition-transform">
                <i className="fab fa-linkedin"></i>
              </a>
            </motion.div>
          </motion.div>

          {/* Right Side */}
          <motion.div
            className="w-full md:w-2/3 bg-white p-8"
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1 }}
          >
            <h2 className="text-2xl font-bold mb-6">Send us a message</h2>
            <form className="space-y-4">
              <motion.input
                type="text"
                placeholder="Your Name *"
                className="w-full border-b p-2 focus:outline-none focus:border-orange-500"
                whileFocus={{ scale: 1.05 }}
              />
              <motion.input
                type="email"
                placeholder="Your Email *"
                className="w-full border-b p-2 focus:outline-none focus:border-orange-500"
                whileFocus={{ scale: 1.05 }}
              />
              <motion.input
                type="text"
                placeholder="Website URL"
                className="w-full border-b p-2 focus:outline-none focus:border-orange-500"
                whileFocus={{ scale: 1.05 }}
              />
              <motion.textarea
                placeholder="Message"
                className="w-full border-b p-2 focus:outline-none focus:border-orange-500"
                rows="4"
                whileFocus={{ scale: 1.05 }}
              ></motion.textarea>
              <motion.button
                type="submit"
                className="bg-black text-white px-6 py-3 font-semibold hover:bg-gray-800"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                Send Message
              </motion.button>
            </form>
          </motion.div>
        </div>
      </section>


      {/*================================================ last section======================================================================= */}
      <section className="bg-gray-800 text-white py-16 px-6">
        <div className="max-w-7xl mx-auto grid gap-12 lg:grid-cols-3 items-center">
          {/* Left Heading */}
          <div className="lg:col-span-1">
            <h2 className="text-3xl md:text-4xl font-bold leading-snug">
              Let's Build Something <br /> Great Together
            </h2>
          </div>

          {/* Contact Info */}
          <div className="flex flex-col gap-6 lg:col-span-1">
            <div>
              <p className="uppercase text-sm text-gray-400 mb-1">Call Us</p>
              <a
                href="tel:+18556466242"
                className="text-lg text-gray-300 hover:text-white"
              >
                +91 8533921354
              </a>
            </div>
            <div>
              <p className="uppercase text-sm text-gray-400 mb-1">Email Us</p>
              <a
                href="mailto:naraynpachaury567@gmail.com"
                className="text-lg text-gray-300 hover:text-white"
              >
                naraynpachaury567@gmail.com
              </a>
            </div>
          </div>

          {/* Subscribe Form */}
          <div className="lg:col-span-1">
            <p className="uppercase text-sm text-gray-400 mb-3">
              Subscribe to receive updates
            </p>
            <form className="flex items-center bg-gray-800 rounded-full overflow-hidden max-w-md">
              <input
                type="email"
                placeholder="Enter Your Email"
                className="flex-1 px-4 py-3 bg-transparent text-gray-300 focus:outline-none"
              />
              <button
                type="submit"
                className="bg-white text-black font-semibold px-6 py-3 rounded-full hover:bg-gray-200 transition"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </section>

    </>
  );
};

{/* Exporting the Contact Component */ }
export default Contact;
