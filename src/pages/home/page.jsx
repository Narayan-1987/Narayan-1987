import Card from "../../components/Card";
import Casestudycard from "../../components/Casestudycard";
import { data, industries, services, casestudydata, ClientLogos, logos, images, features, orange, steps, specialities, hlast } from "../../static_data/staticdata";
import { FaSolarPanel, FaWind, } from "react-icons/fa";
import { FaFacebookF, FaXTwitter, FaLinkedinIn, FaYoutube } from "react-icons/fa6";
import { Star } from "lucide-react";
import React, { useState, useEffect } from "react";
import { color } from "framer-motion";
import { motion } from "framer-motion";



function Home() {
  const [current, setCurrent] = useState(0);

  // Auto slide every 2s
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 2000);
    return () => clearInterval(interval);
  }, [images.length]);

  const interval = [
    "/man1.jpg", // image paths
    "/man2.jpg",
    "/man3.jpg",
  ];



  return (
    <div className="bg-gradient-to-b from-blue-50 via-white to-blue-50 text-gray-900 relative overflow-hidden">
      {/* Video Section */}
      <div className="relative w-full h-screen overflow-hidden">
        {/* Background Video */}
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="/video_20250924.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        {/* Dark Overlay for Readability */}
        <div className="absolute inset-0 bg-black/30"></div>

        {/* Social Icons - Left Side */}
        <div className="absolute top-1/2 left-6 transform -translate-y-1/2 flex flex-col gap-6 text-white text-xl">
          <FaFacebookF className="hover:text-blue-400 cursor-pointer" />
          <FaXTwitter className="hover:text-blue-400 cursor-pointer" />
          <FaLinkedinIn className="hover:text-blue-400 cursor-pointer" />
          <FaYoutube className="hover:text-red-500 cursor-pointer" />
        </div>

        {/* Text Content */}
        <div className="relative z-10 flex flex-col items-start justify-center h-full px-8 sm:px-16">
          <motion.span
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-white uppercase tracking-widest text-sm sm:text-base mb-3"
          >
            Renewable Way
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="text-4xl sm:text-6xl md:text-7xl font-extrabold text-white leading-tight max-w-3xl"
          >
            Bright idea is <br /> using Solar.
          </motion.h1>
        </div>
      </div>



      {/* About Us */}
      <section className="py-10 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-10 items-center">
            {logos.map((logo, index) => (
              <motion.div
                key={index}
                className="flex items-center justify-center"
                whileHover={{ scale: 1.1 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <motion.img
                  src={logo.src}
                  alt={logo.alt}
                  className="h-full w-auto object-contain"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Slider Section */}
      <section className="w-full bg-white py-16 px-6 lg:px-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <p className="text-sm font-semibold uppercase tracking-widest border-l-4 border-black pl-2 mb-4">
              What We Do
            </p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 leading-snug mb-6">
              We are Building a <br /> Sustainable Future
            </h2>
            <p className="text-gray-600 mb-10 max-w-xl">
              It amet consectetur adipiscing elit duis tristique. Nulla aliquet
              enim tortor at. Eget nulla facilisi etiam sumitut est dignissim
              diam quis. Varius duis at consecteturer lorem.
            </p>

            {/* Services */}
            <div className="space-y-8">
              {/* Solar Power System */}
              <motion.div
                className="flex items-start gap-4"
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true }}
              >
                <FaSolarPanel className="text-orange-500 text-4xl flex-shrink-0" />
                <div>
                  <h3 className="text-lg font-bold text-gray-900">
                    Solar power system
                  </h3>
                  <p className="text-gray-600">
                    Nulla aliquet enim tortor at. Eget nulla facilisi etiam
                    sumitut est dignissim diam quis.
                  </p>
                </div>
              </motion.div>

              {/* Wind Energy System */}
              <motion.div
                className="flex items-start gap-4"
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                viewport={{ once: true }}
              >
                <FaWind className="text-orange-500 text-4xl flex-shrink-0" />
                <div>
                  <h3 className="text-lg font-bold text-gray-900">
                    Wind Energy system
                  </h3>
                  <p className="text-gray-600">
                    Nulla aliquet enim tortor at. Eget nulla facilisi etiam
                    sumitut est dignissim diam quis.
                  </p>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Right Image Slider */}
          <motion.div
            className="relative w-full h-[400px] lg:h-[410px] overflow-hidden"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <motion.div
              className="flex w-full h-full"
              animate={{ x: `-${current * 100}%` }}
              transition={{ duration: 0.7, ease: "easeInOut" }}
            >
              {images.map((img, index) => (
                <motion.img
                  key={index}
                  src={img}
                  alt={`slide-${index}`}
                  className="w-full h-full object-cover flex-shrink-0"
                  whileHover={{ scale: 1.05 }}
                />
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      <section className="py-12 px-4 md:px-12 lg:px-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="text-center lg:text-left group cursor-pointer"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
            >
              <motion.div
                className="text-6xl md:text-7xl font-extrabold text-gray-300 relative inline-block transition-colors duration-300 group-hover:text-orange-500"
                whileHover={{ color: "#f97316" }}
              >
                {feature.number}
                <span className="absolute -right-5 top-1/2 transform -translate-y-1/2 w-2.5 h-2.5 bg-orange-500"></span>
              </motion.div>
              <h3 className="mt-4 text-xl font-bold text-gray-900">
                {feature.title}
              </h3>
              <p className="mt-2 text-gray-600 text-sm md:text-base">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Everyone Section */}
      <section className="bg-orange-500 text-white py-16 px-6 md:px-20">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <p className="uppercase tracking-widest text-sm font-semibold mb-2">
            What We Do
          </p>
          <h2 className="text-3xl md:text-4xl font-extrabold">
            We Create Green Energy <br /> for Everyone
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {orange.map((orangeItem, index) => (
            <motion.div
              key={index}
              className="relative group border border-white/40 p-10 text-center cursor-pointer overflow-hidden"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
            >
              {/* Default Content */}
              <div className="transition-opacity duration-500 group-hover:opacity-0">
                <div className="flex justify-center mb-6">
                  {orangeItem.icon}
                </div>
                <p className="uppercase text-xs tracking-widest font-semibold">
                  {orangeItem.category}
                </p>
                <h3 className="mt-2 text-lg font-bold">{orangeItem.title}</h3>
              </div>

              {/* Hover Image */}
              <motion.div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                whileHover={{ scale: 1.1 }}
              >
                <img
                  src={orangeItem.image}
                  alt={orangeItem.title}
                  className="w-full h-full object-cover"
                />
              </motion.div>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="text-center mt-10"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <p className="text-sm">
            We are largest independent manufacturing company{" "}
            <a href="#" className="underline font-semibold">
              View all Service
            </a>
          </p>
        </motion.div>
      </section>

      <section className="py-16 px-6 md:px-20">
        <motion.h2
          className="text-3xl md:text-4xl font-extrabold mb-10"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          Most used bio energy world
        </motion.h2>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
          {/* Left: Steps */}
          <div className="space-y-6">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                className={`flex items-center gap-4 p-4 border-l-4 transition cursor-pointer ${index === 0
                  ? "bg-black text-white border-black"
                  : "border-gray-200 hover:bg-orange-50"
                  }`}
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.03 }}
              >
                <span
                  className={`text-sm font-bold px-2 py-1 ${index === 0 ? "bg-white text-black" : "bg-orange-500 text-white"
                    }`}
                >
                  {step.number}
                </span>
                <h3 className="font-semibold">{step.title}</h3>
              </motion.div>
            ))}
          </div>

          {/* Center Image */}
          <motion.div
            className="flex justify-center"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.05 }}
          >
            <img
              src="/man1.jpg"
              alt="Bio Energy"
              className="w-full max-w-sm h-auto object-cover rounded-lg shadow-md"
            />
          </motion.div>

          {/* Right: Alternatives Section */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold mb-4">
              Alternatives for renewable energy
            </h3>
            <p className="text-gray-600 mb-6">
              It amet consectetur adipiscing elit duis tristique. Nulla aliquet enim
              tortor at. Eget nulla facilisi etiam sumitut est dignissim diam quis.
              Varius duis at consectetur lorem.
            </p>

            <ul className="space-y-4">
              {features.map((feature, index) => (
                <motion.li
                  key={index}
                  className="flex items-center gap-3"
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                  viewport={{ once: true }}
                >
                  <span className="text-orange-500">✔</span>
                  <span>
                    {feature.title
                      ? feature.title
                      : feature.description || feature}
                  </span>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>
      </section>

      {/* what we do */}
      <div className="w-auto my-20">
        {/* Heading Section */}
        <motion.section
          className="bg-transparent text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <p className="text-orange-500 uppercase tracking-widest mb-2 text-sm">
            <span style={{ color: "black" }}>what We Do</span>
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            We have some easy working
          </h2>
        </motion.section>

        {/* Slider Section */}
        <motion.div
          className="relative w-full overflow-hidden"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.div
            className="flex"
            animate={{ x: `-${current * 100}%` }}
            transition={{ duration: 0.7, ease: "easeInOut" }}
          >
            {images.map((src, index) => (
              <motion.div
                key={index}
                className="w-full flex-shrink-0"
                whileHover={{ scale: 1.02 }}
              >
                <img
                  src={src}
                  alt={`slide-${index}`}
                  className="w-full h-[500px] md:h-[500px] object-cover"
                />
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
      {/* What our clients say Greenly? */}
      <section className="w-full py-12 px-6 lg:px-20 bg-white">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          {/* Left Side */}
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <p className="text-sm font-semibold tracking-widest text-gray-600 flex items-center gap-2">
              <span className="h-px w-8 bg-gray-400"></span>
              WHAT WE DO
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              What our clients say <br /> Greenly?
            </h2>
            <motion.button
              whileHover={{ scale: 1.05 }}
              className="bg-orange-500 text-white px-8 py-3 rounded-md font-semibold hover:bg-orange-600 transition"
            >
              VIEW ALL
            </motion.button>
          </motion.div>

          {/* Right Side */}
          <motion.div
            className="flex flex-col md:flex-row items-start gap-6"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <motion.img
              whileHover={{ scale: 1.05 }}
              src="https://images.unsplash.com/photo-1607746882042-944635dfe10e?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80"
              alt="Client"
              className="w-40 h-40 rounded-lg object-cover shadow-md"
            />
            <div className="space-y-4">
              {/* Stars */}
              <div className="flex text-orange-500">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-orange-500" />
                ))}
              </div>

              {/* Quote */}
              <motion.p
                className="text-gray-700 text-lg leading-relaxed"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 1, delay: 0.2 }}
              >
                Cut down on all your work by collaborating with our Launch Pad
                team to get the framework of your online business up and
                running in no time.
              </motion.p>

              {/* Author */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
              >
                <h3 className="text-lg font-semibold text-gray-900">
                  Victoria Porter
                </h3>
                <p className="text-sm uppercase tracking-wide text-gray-500">
                  World-famous Magician
                </p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Marquee Section */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        style={{
          margin: 0,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          minHeight: "200px",
          background: "#fff",
          fontFamily: "Arial, sans-serif",
          gap: "20px",
          width: "90%",
          marginInline: "auto",
        }}
      >
        {/* TOP ROW */}
        <div
          style={{
            fontSize: "clamp(20px,4vw,40px)",
            fontWeight: 700,
            color: "#bdbdbd",
            width: "100%",
            whiteSpace: "nowrap",
            overflow: "hidden",
            position: "relative",
          }}
        >
          <motion.div
            style={{ display: "inline-block" }}
            animate={{ x: ["-100%", "100%"] }}
            transition={{ repeat: Infinity, duration: 15, ease: "linear" }}
          >
            Advisor &nbsp;&nbsp;&nbsp; Agency &nbsp;&nbsp;&nbsp; Business Consultant
            &nbsp;&nbsp;&nbsp; Counseling &nbsp;&nbsp;&nbsp; Effective Management
          </motion.div>
        </div>

        {/* BOTTOM ROW */}
        <div
          style={{
            fontSize: "clamp(16px,3vw,32px)",
            fontWeight: 700,
            color: "#e0e0e0",
            width: "100%",
            whiteSpace: "nowrap",
            overflow: "hidden",
            position: "relative",
          }}
        >
          <motion.div
            style={{ display: "inline-block" }}
            animate={{ x: ["100%", "-100%"] }}
            transition={{ repeat: Infinity, duration: 15, ease: "linear" }}
          >
            HR &nbsp;&nbsp;&nbsp; Human &nbsp;&nbsp;&nbsp; Resource Management
            &nbsp;&nbsp;&nbsp; Human
          </motion.div>
        </div>
      </motion.section>

      {/* Blog Section */}
      <section className="py-12 bg-gray-50">
        <motion.div
          className="text-center mb-10"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <p className="text-sm uppercase tracking-widest text-gray-500">
            What We Do
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
            What's Going on in our Blog?
          </h2>
        </motion.div>

        {/* Blog Cards */}
        <div className="max-w-7xl mx-auto px-4 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {hlast.map((blog, index) => (
            <motion.div
              key={blog.id}
              className="bg-white shadow hover:shadow-lg transition rounded overflow-hidden border-b-2 border-orange-500"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.03 }}
            >
              <img
                src={blog.img}
                alt={blog.title}
                className="w-full h-56 object-cover"
              />
              <div className="p-6">
                <p className="text-xs uppercase text-gray-500 mb-2">
                  {blog.date} •{" "}
                  <span className="text-orange-500">{blog.category}</span>
                </p>
                <h3 className="text-lg font-semibold text-gray-800 mb-4">
                  {blog.title}
                </h3>
                <a
                  href={blog.link}
                  className="text-sm font-semibold text-gray-800 hover:text-orange-500"
                >
                  READ MORE
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Footer Section */}
      <section className="bg-gray-800 text-white py-16 px-6">
        <div className="max-w-7xl mx-auto grid gap-12 lg:grid-cols-3 items-center">
          {/* Left Heading */}
          <motion.div
            className="lg:col-span-1"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold leading-snug">
              Let's Build Something <br /> Great Together
            </h2>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            className="flex flex-col gap-6 lg:col-span-1"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div>
              <p className="uppercase text-sm text-gray-400 mb-1">Call Us</p>
              <a
                href="tel:+18556466242"
                className="text-lg text-gray-300 hover:text-white"
              >
                +1 8533921354
              </a>
            </div>
            <div>
              <p className="uppercase text-sm text-gray-400 mb-1">Email Us</p>
              <a
                href="mailto:info@example.com"
                className="text-lg text-gray-300 hover:text-white"
              >
                narayanpachaury567@gmail.com
              </a>
            </div>
          </motion.div>

          {/* Subscribe Form */}
          <motion.div
            className="lg:col-span-1"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
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
              <motion.button
                type="submit"
                whileHover={{ scale: 1.05 }}
                className="bg-white text-black font-semibold px-6 py-3 rounded-full hover:bg-gray-200 transition"
              >
                Subscribe
              </motion.button>
            </form>
          </motion.div>
        </div>
      </section>


    </div>
  );
}

export default Home;
