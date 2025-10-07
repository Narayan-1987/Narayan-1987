// src/pages/Home.jsx
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  FaSolarPanel,
  FaWind,
  FaFacebookF,
  FaLinkedinIn,
  FaYoutube,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { Star } from "lucide-react";

import {
  logos,
  images,
  features,
  orange,
  steps,
  hlast,
} from "../../static_data/staticdata";

function Home() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(
      () => setCurrent((prev) => (prev + 1) % images.length),
      3000
    );
    return () => clearInterval(interval);
  }, []);

  // 🔹 Animation Variants
  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: (i = 0) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.2, duration: 0.6, ease: "easeOut" },
    }),
  };

  const fadeIn = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 1 } },
  };

  const slideLeft = {
    hidden: { opacity: 0, x: -80 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut" } },
  };

  const slideRight = {
    hidden: { opacity: 0, x: 80 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut" } },
  };

  const zoomIn = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.6 } },
  };

  return (
    <div className="bg-gradient-to-b from-blue-50 via-white to-blue-50 text-gray-900">
      {/* ================= Hero Section ================= */}
      <section className="relative w-full h-screen overflow-hidden">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="/video_20250924.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-black/40"></div>

        {/* Social Icons */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeIn}
          className="
            absolute 
            text-white text-xl
            flex 
            gap-6
            md:flex-col md:top-1/2 md:left-6 md:-translate-y-1/2 
            bottom-6 left-1/2 -translate-x-1/2 
            md:translate-x-0 md:bottom-auto
          "
        >
          {[FaFacebookF, FaXTwitter, FaLinkedinIn, FaYoutube].map(
            (Icon, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.3 }}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 * i, duration: 0.5 }}
              >
                <Icon className="cursor-pointer hover:text-orange-400 transition" />
              </motion.div>
            )
          )}
        </motion.div>

        {/* Text Content */}
        <div className="relative z-10 flex flex-col items-start justify-center h-full px-8 sm:px-16">
          <motion.span
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            className="text-white uppercase tracking-widest text-sm mb-3"
          >
            Renewable Way
          </motion.span>

          <motion.h1
            initial="hidden"
            animate="visible"
            variants={slideLeft}
            className="text-4xl sm:text-6xl md:text-7xl font-extrabold text-white leading-tight max-w-3xl"
          >
            Bright idea is <br /> using Solar.
          </motion.h1>
        </div>
      </section>

      {/* ================= Logo Section ================= */}
      <section className="py-10 bg-white">
        <div className="max-w-7xl mx-auto grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-10 px-4">
          {logos.map((logo, i) => (
            <motion.img
              key={i}
              src={logo.src}
              alt={logo.alt}
              className="h-12 object-contain"
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              custom={i}
            />
          ))}
        </div>
      </section>

      {/* ================= Services & Slider ================= */}
      <section className="py-16 px-6 lg:px-20 grid lg:grid-cols-2 gap-12 items-center bg-gray-50">
        <motion.div
          variants={slideLeft}
          initial="hidden"
          whileInView="visible"
        >
          <p className="text-sm font-semibold border-l-4 border-black pl-2 mb-4">
            What We Do
          </p>
          <h2 className="text-4xl font-bold mb-6">
            We are Building a Sustainable Future
          </h2>
          <p className="text-gray-600 mb-10">
            We deliver complete solar & wind energy systems with top-notch
            expertise.
          </p>

          <div className="space-y-8">
            <motion.div variants={fadeUp} initial="hidden" whileInView="visible" custom={0}>
              <div className="flex gap-4">
                <FaSolarPanel className="text-orange-500 text-4xl" />
                <div>
                  <h3 className="font-bold">Solar Power Systems</h3>
                  <p className="text-gray-600">
                    From design to execution, solar made easy.
                  </p>
                </div>
              </div>
            </motion.div>
            <motion.div variants={fadeUp} initial="hidden" whileInView="visible" custom={1}>
              <div className="flex gap-4">
                <FaWind className="text-orange-500 text-4xl" />
                <div>
                  <h3 className="font-bold">Wind Energy Solutions</h3>
                  <p className="text-gray-600">
                    Reliable & clean energy with wind tech.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>

        <motion.div
          className="relative w-full h-[400px] overflow-hidden rounded-lg shadow-lg"
          variants={slideRight}
          initial="hidden"
          whileInView="visible"
        >
          <motion.div
            className="flex w-full h-full"
            animate={{ x: `-${current * 100}%` }}
            transition={{ duration: 0.7 }}
          >
            {images.map((img, i) => (
              <img
                key={i}
                src={img}
                alt={`slide-${i}`}
                className="w-full h-full object-cover flex-shrink-0"
              />
            ))}
          </motion.div>
        </motion.div>
      </section>

      {/* ================= Features ================= */}
      <section className="py-12 px-6 lg:px-20 grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
        {features.map((f, i) => (
          <motion.div
            key={i}
            variants={zoomIn}
            initial="hidden"
            whileInView="visible"
            custom={i}
            whileHover={{ scale: 1.05 }}
            className="p-4 bg-white rounded-xl shadow hover:shadow-lg transition"
          >
            <div className="text-6xl font-extrabold text-gray-300">{f.number}</div>
            <h3 className="mt-4 text-xl font-bold">{f.title}</h3>
            <p className="text-gray-600">{f.description}</p>
          </motion.div>
        ))}
      </section>

      {/* ================= Orange Section ================= */}
      <motion.section
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        className="relative bg-cover bg-center text-white py-16 px-6 lg:px-20"
        style={{ backgroundImage: "url('/solar6.png')" }}
      >
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="relative text-center mb-12">
          <p className="uppercase text-sm">What We Do</p>
          <h2 className="text-3xl md:text-4xl font-extrabold">
            We Create Green Energy for Everyone
          </h2>
        </div>
        <div className="relative grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {orange.map((item, i) => (
            <motion.div
              key={i}
              variants={zoomIn}
              initial="hidden"
              whileInView="visible"
              custom={i}
              whileHover={{ scale: 1.08 }}
              className="p-8 text-center border border-white/40 rounded-lg bg-white/10 backdrop-blur-sm"
            >
              <div className="text-orange-400 text-4xl mb-2">{item.icon}</div>
              <h3 className="mt-2 font-bold">{item.title}</h3>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* ================= Testimonials ================= */}
      <motion.section
        variants={slideLeft}
        initial="hidden"
        whileInView="visible"
        className="py-16 px-6 lg:px-20 bg-white grid md:grid-cols-2 gap-10 items-center"
      >
        <div>
          <p className="text-sm text-gray-600">WHAT WE DO</p>
          <h2 className="text-3xl font-bold">What our clients say about Greenly?</h2>
          <button className="bg-orange-500 text-white px-8 py-3 rounded-md mt-6 hover:bg-orange-600 transition">
            VIEW ALL
          </button>
        </div>
        <motion.div
          variants={zoomIn}
          whileHover={{ scale: 1.05 }}
          className="flex gap-6"
        >
          <img src="f5.jpg" alt="Client" className="w-40 h-40 rounded-lg shadow-lg" />
          <div>
            <div className="flex text-orange-500">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-orange-500" />
              ))}
            </div>
            <p className="text-gray-700 mt-4">
              Amazing service, cost-effective and eco-friendly energy solutions.
            </p>
            <h3 className="font-semibold mt-2">Victoria Porter</h3>
          </div>
        </motion.div>
      </motion.section>

      {/* ================= Blog Section ================= */}
      <section className="py-16 bg-gray-50">
        <div className="text-center mb-10">
          <p className="text-sm uppercase text-gray-500">What We Do</p>
          <h2 className="text-3xl md:text-4xl font-bold">
            What's Going on in our Blog?
          </h2>
        </div>
        <div className="max-w-7xl mx-auto grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {hlast.map((b, i) => (
            <motion.div
              key={i}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              custom={i}
              whileHover={{ y: -10, scale: 1.02 }}
              className="bg-white shadow rounded overflow-hidden border-b-2 border-orange-500 transition"
            >
              <img
                src={b.img}
                alt={b.title}
                className="w-full h-56 object-cover"
              />
              <div className="p-6">
                <p className="text-xs text-gray-500">
                  {b.date} •{" "}
                  <span className="text-orange-500">{b.category}</span>
                </p>
                <h3 className="text-lg font-semibold mb-4">{b.title}</h3>
                <a
                  href={b.link}
                  className="text-sm font-semibold hover:text-orange-500"
                >
                  READ MORE
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default Home;
