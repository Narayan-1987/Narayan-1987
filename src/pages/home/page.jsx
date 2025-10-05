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

  return (
    <div className="bg-gradient-to-b from-blue-50 via-white to-blue-50 text-gray-900">

      {/* ================= Hero Section ================= */}
      <section className="relative w-full h-screen overflow-hidden">
        <video autoPlay loop muted playsInline className="absolute inset-0 w-full h-full object-cover">
          <source src="/video_20250924.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-black/30"></div>

        {/* Social Icons */}
        <div className="absolute top-1/2 left-6 -translate-y-1/2 flex flex-col gap-6 text-white text-xl">
          <FaFacebookF className="hover:text-blue-400 cursor-pointer" />
          <FaXTwitter className="hover:text-blue-400 cursor-pointer" />
          <FaLinkedinIn className="hover:text-blue-400 cursor-pointer" />
          <FaYoutube className="hover:text-red-500 cursor-pointer" />
        </div>

        {/* Text */}
        <div className="relative z-10 flex flex-col items-start justify-center h-full px-8 sm:px-16">
          <motion.span initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }}
            className="text-white uppercase tracking-widest text-sm mb-3">
            Renewable Way
          </motion.span>
          <motion.h1 initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }}
            className="text-4xl sm:text-6xl md:text-7xl font-extrabold text-white leading-tight max-w-3xl">
            Bright idea is <br /> using Solar.
          </motion.h1>
        </div>
      </section>

      {/* ================= Logo Section ================= */}
      <section className="py-10 bg-white">
        <div className="max-w-7xl mx-auto grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-10 px-4">
          {logos.map((logo, i) => (
            <motion.img key={i} src={logo.src} alt={logo.alt}
              className="h-12 object-contain"
              initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.1 }} />
          ))}
        </div>
      </section>

      {/* ================= Services & Slider ================= */}
      <section className="py-16 px-6 lg:px-20 grid lg:grid-cols-2 gap-12 items-center bg-gray-50">
        <motion.div initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }}>
          <p className="text-sm font-semibold border-l-4 border-black pl-2 mb-4">What We Do</p>
          <h2 className="text-4xl font-bold mb-6">We are Building a Sustainable Future</h2>
          <p className="text-gray-600 mb-10">We deliver complete solar & wind energy systems with top-notch expertise.</p>

          <div className="space-y-8">
            <div className="flex gap-4">
              <FaSolarPanel className="text-orange-500 text-4xl" />
              <div>
                <h3 className="font-bold">Solar Power Systems</h3>
                <p className="text-gray-600">From design to execution, solar made easy.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <FaWind className="text-orange-500 text-4xl" />
              <div>
                <h3 className="font-bold">Wind Energy Solutions</h3>
                <p className="text-gray-600">Reliable & clean energy with wind tech.</p>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div className="relative w-full h-[400px] overflow-hidden rounded-lg shadow-lg">
          <motion.div className="flex w-full h-full"
            animate={{ x: `-${current * 100}%` }} transition={{ duration: 0.7 }}>
            {images.map((img, i) => (
              <img key={i} src={img} alt={`slide-${i}`} className="w-full h-full object-cover flex-shrink-0" />
            ))}
          </motion.div>
        </motion.div>
      </section>

      {/* ================= Features ================= */}
      <section className="py-12 px-6 lg:px-20 grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
        {features.map((f, i) => (
          <motion.div key={i} initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }}>
            <div className="text-6xl font-extrabold text-gray-300">{f.number}</div>
            <h3 className="mt-4 text-xl font-bold">{f.title}</h3>
            <p className="text-gray-600">{f.description}</p>
          </motion.div>
        ))}
      </section>

      {/* ================= Orange Section ================= */}
      <section
        className="relative bg-cover bg-center text-white py-16 px-6 lg:px-20"
        style={{ backgroundImage: "url('/solar6.png')" }}
      >
        <div className="absolute inset-0 bg-black/50"></div> {/* Overlay */}

        <div className="relative text-center mb-12">
          <p className="uppercase text-sm">What We Do</p>
          <h2 className="text-3xl md:text-4xl font-extrabold">
            We Create Green Energy for Everyone
          </h2>
        </div>

        <div className="relative grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {orange.map((item, i) => (
            <div
              key={i}
              className="p-8 text-center border border-white/40 rounded-lg bg-white/10 backdrop-blur-sm"
            >
              <div className="text-orange-400 text-4xl mb-2">{item.icon}</div>
              <h3 className="mt-2 font-bold">{item.title}</h3>
            </div>
          ))}
        </div>
      </section>


      {/* ================= Steps Section ================= */}
      <section className="py-16 px-6 lg:px-20 grid lg:grid-cols-3 gap-12 items-center">
        <div className="space-y-6">
          {steps.map((s, i) => (
            <div key={i} className="flex gap-4 border-l-4 pl-4">{s.number} - {s.title}</div>
          ))}
        </div>
        <img src="eman4.jpg" alt="Bio Energy" className="rounded-lg shadow-md" />
        <div>
          <h3 className="text-2xl font-bold mb-4">Alternatives for Renewable Energy</h3>
          <ul className="space-y-2">
            {features.map((f, i) => <li key={i}>✔ {f.title}</li>)}
          </ul>
        </div>
      </section>

      {/* ================= Testimonials ================= */}
      <section className="py-16 px-6 lg:px-20 bg-white grid md:grid-cols-2 gap-10 items-center">
        <div>
          <p className="text-sm text-gray-600">WHAT WE DO</p>
          <h2 className="text-3xl font-bold">What our clients say about Greenly?</h2>
          <button className="bg-orange-500 text-white px-8 py-3 rounded-md mt-6">VIEW ALL</button>
        </div>
        <div className="flex gap-6">
          {<img src="f5.jpg" alt="Client"
            className="w-40 h-40 rounded-lg" />}
          <div>
            <div className="flex text-orange-500">
              {[...Array(5)].map((_, i) => <Star key={i} className="w-5 h-5 fill-orange-500" />)}
            </div>
            <p className="text-gray-700 mt-4">Amazing service, cost-effective and eco-friendly energy solutions.</p>
            <h3 className="font-semibold mt-2">Victoria Porter</h3>
          </div>
        </div>
      </section>

      {/* ================= Blog Section ================= */}
      <section className="py-16 bg-gray-50">
        <div className="text-center mb-10">
          <p className="text-sm uppercase text-gray-500">What We Do</p>
          <h2 className="text-3xl md:text-4xl font-bold">What's Going on in our Blog?</h2>
        </div>
        <div className="max-w-7xl mx-auto grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {hlast.map((b, i) => (
            <div key={i} className="bg-white shadow rounded overflow-hidden border-b-2 border-orange-500">
              <img src={b.img} alt={b.title} className="w-full h-56 object-cover" />
              <div className="p-6">
                <p className="text-xs text-gray-500">{b.date} • <span className="text-orange-500">{b.category}</span></p>
                <h3 className="text-lg font-semibold mb-4">{b.title}</h3>
                <a href={b.link} className="text-sm font-semibold hover:text-orange-500">READ MORE</a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ================= Footer ================= */}
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

export default Home;
