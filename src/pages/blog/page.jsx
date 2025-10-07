import { motion } from "framer-motion";
import { bannerData, morecards } from "../../static_data/blogststicdata";
import React, { useState } from "react";

export default function Blogs() {
  const [selectedCard, setSelectedCard] = useState(null);

  return (
    <div className="overflow-x-hidden"> {/* ✅ Prevent horizontal overflow */}
      {/* ====================== First Section ====================== */}
      <section className="relative w-full min-h-[70vh] flex items-center justify-center bg-gray-900 overflow-hidden">
        {/* ✅ Removed image overflow glitch */}
        <motion.img
          src={bannerData.image}
          alt={bannerData.title}
          className="absolute inset-0 w-full h-full object-cover"
          initial={{ scale: 1.05 }}
          animate={{ scale: 1 }}
          transition={{ duration: 2, ease: "easeOut" }}
        />

        {/* ✅ Overlay */}
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

        {/* ✅ Text */}
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

      {/* ====================== Cards Section ====================== */}
      <section className="px-6 py-12 md:px-16 bg-white overflow-hidden">
        {!selectedCard ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {morecards.map((card, index) => (
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
                  <button
                    onClick={() => setSelectedCard(card)}
                    className="mt-4 text-sm font-semibold text-gray-700 border-b-2 border-gray-300 hover:border-orange-500 hover:text-orange-500 transition-all"
                  >
                    READ MORE
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        ) : (
          <motion.div
            key={selectedCard.id}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto mt-6 text-center overflow-hidden"
          >
            <motion.img
              src={selectedCard.image}
              alt={selectedCard.title}
              className="w-full h-72 object-cover rounded-xl mb-6 shadow-md"
            />
            <p className="text-sm text-orange-500 font-semibold tracking-wide uppercase">
              {selectedCard.date} • {selectedCard.category}
            </p>
            <h2 className="text-2xl font-bold text-gray-800 mt-2 mb-4">
              {selectedCard.title}
            </h2>
            <p className="text-gray-600 leading-relaxed mb-6 px-4 md:px-0">
              {selectedCard.description}
            </p>

            <button
              onClick={() => setSelectedCard(null)}
              className="bg-orange-500 text-white px-6 py-2 rounded-md hover:bg-orange-600 transition-all"
            >
              ← Back
            </button>
          </motion.div>
        )}
      </section>
    </div>
  );
}
