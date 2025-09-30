import React, { useState } from "react";
import { bannerData, accordions, services } from "../../static_data/servicestaticdata";
import { Check } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Services() {
  const [open, setOpen] = useState(0);

  return (
    <div>
      {/* ====================================Services first section============================================================ */}
      <section className="relative w-full h-[70vh] flex items-center justify-center bg-gray-900">
        <motion.img
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
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
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 text-center text-white px-4"
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            {bannerData.title}
          </h1>
          <p className="text-lg md:text-xl">
            <span className="text-green-400">{bannerData.breadcrumb[0]}</span>{" "}
            <span className="mx-2">›</span> {bannerData.breadcrumb[1]}
          </p>
        </motion.div>
      </section>

      {/* ===================================================second section================================================== */}
      <div className="w-full bg-gray-50 flex flex-col lg:flex-row gap-6 p-4 lg:p-8 text-sm">
        {/* Sidebar */}
        <motion.aside
          initial={{ x: -80, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="w-full lg:w-1/4"
        >
          <div className="bg-white shadow rounded-lg p-4 flex flex-col gap-6">
            {/* Services List */}
            <div>
              <h2 className="font-bold text-base mb-3">SERVICES</h2>
              <ul className="space-y-2 text-sm">
                {[
                  "Technical Services",
                  "Energy panels",
                  "Wind Generators",
                  "Solar As A Service",
                  "Solar PV Systems",
                ].map((service, i) => (
                  <li
                    key={i}
                    className="flex justify-between items-center border-b last:border-0 pb-1 cursor-pointer hover:text-orange-500"
                  >
                    {service} <span>›</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Need Help */}
            <div>
              <h2 className="font-bold text-base mb-2">NEED HELP</h2>
              <p className="text-gray-600 text-xs leading-relaxed">
                Our Client care managers are on call 24/7 to answer your questions
                or submit a business inquiry online.
              </p>
              <p className="mt-2 font-bold text-lg">123 456 789</p>
            </div>

            {/* Downloads */}
            <div>
              <h2 className="font-bold text-base mb-3">DOWNLOAD</h2>
              <div className="flex flex-col gap-2">
                <button className="bg-orange-500 text-white py-1.5 px-3 rounded text-sm hover:bg-orange-600 transition">
                  Download.pdf
                </button>
                <button className="bg-black text-white py-1.5 px-3 rounded text-sm hover:bg-gray-800 transition">
                  Download.txt
                </button>
              </div>
            </div>
          </div>
        </motion.aside>

        {/* Main Content */}
        <motion.main
          initial={{ x: 80, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="w-full lg:w-3/4 flex flex-col gap-6"
        >
          {/* Image */}
          <div>
            <img
              src="man1.jpg"
              alt="Service"
              className="rounded-lg shadow w-full h-200 object-cover"
            />
          </div>

          {/* Services Section */}
          <section>
            <h2 className="text-xl font-bold mb-3">Services We Provide</h2>
            <p className="text-gray-600 leading-relaxed text-sm">
              Consider powering your business’ office, commercial building or a
              manufacturing plant as an investment in the future.
            </p>
          </section>

          {/* Features */}
          <section className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="bg-white rounded-lg p-4 shadow hover:shadow-md transition"
            >
              <div className="text-4xl mb-2 text-orange-500">💡</div>
              <h3 className="font-bold text-base mb-1">Easy Installation</h3>
              <p className="text-gray-600 text-xs leading-relaxed">
                Wind is a source of energy which is non-polluting and renewable,
                wind turbines create power without using fossil fuels.
              </p>
              <button className="mt-3 text-xs text-orange-500 font-semibold hover:underline">
                Read More
              </button>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.05 }}
              className="bg-white rounded-lg p-4 shadow hover:shadow-md transition"
            >
              <div className="text-4xl mb-2 text-orange-500">🌍</div>
              <h3 className="font-bold text-base mb-1">Long Time to Use</h3>
              <p className="text-gray-600 text-xs leading-relaxed">
                Source of energy which is non-polluting and renewable, wind
                turbines create power without using fossil fuels.
              </p>
              <button className="mt-3 text-xs text-orange-500 font-semibold hover:underline">
                Read More
              </button>
            </motion.div>
          </section>
        </motion.main>
      </div>

      {/* ===================================================third section================================================== */}
      <section className="w-full px-6 py-12 md:px-16 bg-white flex justify-end">
        <div className="w-full lg:w-3/4 space-y-10">
          <motion.div
            initial={{ y: 40, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <h2 className="bg-orange-500 text-white text-lg md:text-xl font-bold px-6 py-4 rounded-lg shadow">
              Why have long experience!
            </h2>

            {accordions.map((item) => (
              <div key={item.id} className="rounded-lg overflow-hidden">
                <button
                  onClick={() => setOpen(open === item.id ? 0 : item.id)}
                  className={`w-full text-left px-6 py-4 font-semibold flex justify-between items-center ${open === item.id ? "bg-gray-200" : "bg-gray-100"
                    }`}
                >
                  {item.title}
                  <span>{open === item.id ? "-" : "+"}</span>
                </button>
                <AnimatePresence>
                  {open === item.id && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.4 }}
                      className="px-6 py-4 bg-white text-gray-600"
                    >
                      {item.content}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </motion.div>

          {/* Right Section */}
          <motion.div
            initial={{ x: 80, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="flex flex-col lg:flex-row items-start gap-6"
          >
            <img
              src="man3.jpg"
              alt="Wind Turbine"
              className="w-full lg:w-1/2 rounded-xl shadow-md"
            />
            <div>
              <h2 className="text-2xl font-bold mb-4">Services We Offer</h2>
              <p className="text-gray-600 mb-6">
                We specialize in consulting in choosing and actually installing
                doing the of both full-cycle batteries.
              </p>
              <ul className="space-y-3">
                {services.map((service, i) => (
                  <li key={i} className="flex items-center gap-2 text-gray-700">
                    <Check className="w-5 h-5 text-orange-500" />
                    {service}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ===================================================last section================================================== */}
      <motion.section
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="bg-gray-800 text-white py-16 px-6"
      >
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
      </motion.section>
    </div>
  );
}
