import React, { useState } from "react";
import { bannerData, accordions, services } from "../../static_data/servicestaticdata";
import { Check, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Services() {
  const [active, setActive] = useState(null);

  return (
    <div className="bg-gray-50">
      {/* ========================== HERO ========================== */}
      <section className="relative bg-gradient-to-r from-orange-500 to-yellow-500 text-white py-20 px-6 md:px-16 flex flex-col md:flex-row items-center gap-10">
        {/* Text */}
        <motion.div
          initial={{ x: -60, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="flex-1 space-y-6"
        >
          <h1 className="text-4xl md:text-6xl font-extrabold leading-snug">
            {bannerData.title}
          </h1>
          <p className="text-lg md:text-xl text-orange-100 max-w-lg">
            {bannerData.breadcrumb[0]} › {bannerData.breadcrumb[1]}
          </p>
          <button className="px-6 py-3 bg-white text-orange-600 font-semibold rounded-full hover:bg-gray-200 transition">
            Get Started
          </button>
        </motion.div>

        {/* Image */}
        <motion.img
          initial={{ x: 60, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          src={bannerData.image}
          alt="Services Banner"
          className="flex-1 rounded-2xl shadow-lg object-cover h-80 md:h-[450px]"
        />
      </section>

      {/* ========================== SERVICES GRID ========================== */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold">What We Offer</h2>
          <p className="text-gray-600 mt-3 max-w-2xl mx-auto">
            Discover a range of solutions designed to bring sustainable energy into your life and business.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            { icon: "⚡", title: "Quick Installation", desc: "Fast, seamless setup with minimal disruption to your routine." },
            { icon: "🌿", title: "Eco-Friendly", desc: "Contribute to a greener planet with clean renewable energy." },
            { icon: "💡", title: "Smart Solutions", desc: "Tailored systems optimized for performance and efficiency." },
            { icon: "🔋", title: "Durable Systems", desc: "Long-lasting equipment designed for consistent energy supply." },
            { icon: "🌍", title: "Global Standards", desc: "We follow industry-leading practices to ensure quality." },
            { icon: "🤝", title: "Dedicated Support", desc: "Our team is available around the clock to guide you." },
          ].map((item, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -8 }}
              className="bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition"
            >
              <div className="text-5xl mb-4">{item.icon}</div>
              <h3 className="font-semibold text-lg mb-2">{item.title}</h3>
              <p className="text-sm text-gray-600">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ========================== ACCORDION SECTION ========================== */}
      <section className="bg-white py-20 px-6 md:px-16">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12">
          {/* Image */}
          <motion.img
            initial={{ x: -60, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            src="https://plus.unsplash.com/premium_photo-1681074963522-00ca908dce4e?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Experience"
            className="w-full lg:w-1/2 rounded-2xl shadow-lg"
          />

          {/* Accordion */}
          <div className="flex-1 space-y-6">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              Why Work With Us?
            </h2>
            {accordions.map((item) => (
              <div key={item.id} className="border rounded-lg overflow-hidden">
                <button
                  onClick={() => setActive(active === item.id ? null : item.id)}
                  className="w-full flex justify-between items-center px-5 py-4 font-medium text-left hover:bg-gray-100 transition"
                >
                  {item.title}
                  <ChevronDown
                    className={`w-5 h-5 transition-transform ${
                      active === item.id ? "rotate-180 text-orange-500" : ""
                    }`}
                  />
                </button>
                <AnimatePresence>
                  {active === item.id && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="px-5 pb-4 text-sm text-gray-600"
                    >
                      {item.content}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========================== SERVICES LIST ========================== */}
      <section className="bg-gray-100 py-20 px-6 md:px-16">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Our Expertise</h2>
            <p className="text-gray-600 mb-6">
              From consultation to complete system setup, we deliver reliable and efficient renewable energy solutions tailored to your needs.
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
          <motion.img
            initial={{ opacity: 0, scale: 1.1 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            src="https://plus.unsplash.com/premium_photo-1663089743898-aefbe7863763?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1pbi1zYW1lLXNlcmllc3wxfHx8ZW58MHx8fHx8"
            alt="Services"
            className="w-full rounded-2xl shadow-lg"
          />
        </div>
      </section>

      {/* ========================== FOOTAR SECTION ========================== */}
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
