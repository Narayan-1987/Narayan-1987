import React from "react";
import { images, bannerData } from "../../static_data/projectststicdata";
import { motion } from "framer-motion";

function Project() {
  return (
    <div>
      {/* =================================================first section ==================================================== */}
      <section className="relative w-full h-[70vh] flex items-center justify-center bg-gray-900">
        <motion.img
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 0.9, scale: 1 }}
          transition={{ duration: 1 }}
          src={bannerData.image}
          alt={bannerData.title}
          className="absolute inset-0 w-full h-full object-cover"
        />
        {bannerData.overlay?.enabled && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: bannerData.overlay.opacity }}
            transition={{ duration: 1, delay: 0.5 }}
            className="absolute inset-0"
            style={{ backgroundColor: bannerData.overlay.color }}
          />
        )}
        <motion.div
          initial={{ y: 40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
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

      {/* ===========================================================image section==================================================== */}
      <section className="w-full px-6 py-12 md:px-16 bg-white">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: {
              opacity: 1,
              y: 0,
              transition: { staggerChildren: 0.2 },
            },
          }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {images.map((img) => (
            <motion.div
              key={img.id}
              variants={{
                hidden: { opacity: 0, scale: 0.9 },
                visible: { opacity: 1, scale: 1 },
              }}
              transition={{ duration: 0.6 }}
              className="overflow-hidden rounded-xl shadow-md hover:shadow-2xl transition-all duration-500 transform hover:scale-105 hover:rotate-1"
            >
              <img
                src={img.url}
                alt={`Gallery ${img.id}`}
                className="w-full h-64 object-cover transition-all duration-500 hover:brightness-110 hover:scale-110"
              />
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* =================================================last section ==============================================================*/}
      <section className="bg-gray-800 text-white py-16 px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="max-w-7xl mx-auto grid gap-12 lg:grid-cols-3 items-center"
        >
          {/* Left Heading */}
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 1 }}
            className="lg:col-span-1"
          >
            <h2 className="text-3xl md:text-4xl font-bold leading-snug">
              Let's Build Something <br /> Great Together
            </h2>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="flex flex-col gap-6 lg:col-span-1"
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
            initial={{ x: 50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="lg:col-span-1"
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
        </motion.div>
      </section>
    </div>
  );
}

export default Project;
