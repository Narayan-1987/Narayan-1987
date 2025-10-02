// page.jsx
import React from "react";
import { galleryImages, bannerData } from "../../static_data/projectststicdata";
import { motion } from "framer-motion";

function Project() {
  return (
    <div>
      {/* ====================== Hero Section ====================== */}
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
          <h1 className="text-4xl md:text-6xl font-extrabold mb-4 tracking-wide drop-shadow-lg">
            {bannerData.title}
          </h1>
          <p className="text-lg md:text-xl">
            <span className="text-green-400 font-semibold">{bannerData.breadcrumb[0]}</span>
            <span className="mx-2 text-gray-300">›</span>
            <span className="text-gray-200">{bannerData.breadcrumb[1]}</span>
          </p>
        </motion.div>
      </section>

      {/* ====================== Gallery ====================== */}
      <section className="w-full px-6 py-16 md:px-20 bg-gray-50">
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
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {galleryImages.map((img) => (
            <motion.div
              key={img.id}
              variants={{
                hidden: { opacity: 0, scale: 0.9 },
                visible: { opacity: 1, scale: 1 },
              }}
              transition={{ duration: 0.6 }}
              className="overflow-hidden rounded-2xl shadow-md hover:shadow-2xl transition-all duration-500 transform hover:scale-105"
            >
              <img
                src={img.url}
                alt={`Portfolio ${img.id}`}
                className="w-full h-72 object-cover transition-all duration-500 hover:brightness-110 hover:scale-110"
              />
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* ====================== Contact / CTA ====================== */}
      <footer className="bg-gray-800 text-white py-16 px-6 lg:px-20 grid lg:grid-cols-3 gap-12">
        <div>
          <h2 className="text-3xl font-bold">Let's Build Great Dreams Together</h2>
        </div>
        <div>
          <p>📞 +1 8533921354</p>
          <p>✉ narayanpachaury567@gmail.com</p>
        </div>
        <form className="flex items-center bg-gray-700 rounded-full overflow-hidden">
          <input type="email" placeholder="Enter Your Email"
            className="flex-1 px-4 py-3 bg-transparent text-gray-300" />
          <button className="bg-white text-black px-6 py-3 rounded-full">Subscribe</button>
        </form>
      </footer>
    </div>
  );
}

export default Project;
