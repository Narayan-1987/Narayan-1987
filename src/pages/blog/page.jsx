import React from "react";
import { motion } from "framer-motion";
import { bannerData, cards } from "../../static_data/blogststicdata";

export default function Blogs() {
  return (
    <div>
      {/* ============================================= First Section ============================================= */}
      <section className="relative w-full h-[70vh] flex items-center justify-center bg-gray-900">
        <motion.img
          src={bannerData.image}
          alt={bannerData.title}
          className="absolute inset-0 w-full h-full object-cover opacity-90"
          initial={{ scale: 1.2 }}
          animate={{ scale: 1 }}
          transition={{ duration: 2, ease: "easeOut" }}
        />

        {bannerData.overlay?.enabled && (
          <motion.div
            className="absolute inset-0"
            style={{
              backgroundColor: bannerData.overlay.color,
              opacity: bannerData.overlay.opacity,
            }}
            initial={{ opacity: 0 }}
            animate={{ opacity: bannerData.overlay.opacity }}
            transition={{ duration: 1 }}
          />
        )}

        <motion.div
          className="relative z-10 text-center text-white px-4"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
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

      {/* ============================================= Cards Section ============================================= */}
      <section className="px-6 py-12 md:px-16 bg-white">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {cards.map((card, index) => (
            <motion.div
              key={card.id}
              className="flex flex-col group hover:shadow-lg transition-all duration-500 rounded-xl overflow-hidden"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.8,
                delay: index * 0.2,
                ease: "easeOut",
              }}
              viewport={{ once: true }}
            >
              <motion.img
                src={card.image}
                alt={card.title}
                className="w-full h-56 object-cover transition-transform duration-500 group-hover:scale-105"
                whileHover={{ scale: 1.05 }}
              />
              <div className="p-4">
                <p className="text-sm text-orange-500 font-semibold tracking-wide uppercase">
                  {card.date} • {card.category}
                </p>
                <h3 className="mt-2 text-lg font-bold text-gray-800 group-hover:text-orange-600 transition-colors">
                  {card.title}
                </h3>
                <button className="mt-4 text-sm font-semibold text-gray-700 border-b-2 border-gray-300 hover:border-orange-500 hover:text-orange-500 transition-all">
                  READ MORE
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ============================================= Last Section ============================================= */}
      <motion.section
        className="bg-gray-800 text-white py-16 px-6"
        initial={{ opacity: 0, y: 80 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        <div className="max-w-7xl mx-auto grid gap-12 lg:grid-cols-3 items-center">
          {/* Left Heading */}
          <motion.div
            className="lg:col-span-1"
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 1 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold leading-snug">
              Let's Build Something <br /> Great Together
            </h2>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            className="flex flex-col gap-6 lg:col-span-1"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
          >
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
          </motion.div>

          {/* Subscribe Form */}
          <motion.div
            className="lg:col-span-1"
            initial={{ x: 50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
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
          </motion.div>
        </div>
      </motion.section>
    </div>
  );
}
