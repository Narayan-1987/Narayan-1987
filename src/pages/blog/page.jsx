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
      <div>
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
    </div>
  );
}
