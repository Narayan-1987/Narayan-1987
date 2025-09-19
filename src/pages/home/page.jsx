import Card from "../../components/Card";
import Casestudycard from "../../components/Casestudycard";
import { data, industries, services, casestudydata, ClientLogos } from "../../static_data/staticdata";
import { FaTwitter, FaLinkedin } from "react-icons/fa";

function Home() {
  return (
    <div className="px-6 sm:px-10 lg:px-20 py-10 bg-black text-white relative overflow-hidden">

      {/* Neon Background Glow */}
      <div className="absolute inset-0 -z-10">
        <div className="w-[500px] h-[500px] bg-pink-500/40 rounded-full blur-3xl absolute top-10 left-[-200px]" />
        <div className="w-[400px] h-[400px] bg-cyan-400/40 rounded-full blur-3xl absolute bottom-10 right-[-150px]" />
      </div>

      {/* Video Section */}
      <div className="w-full rounded-2xl overflow-hidden shadow-[0_0_40px_#00f7ff]">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-[250px] sm:h-[400px] md:h-[500px] object-cover rounded-2xl"
        >
          <source src="/bgvideo.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>

      {/* About Us */}
      <section className="mt-16 text-center">
        <h2 className="text-5xl sm:text-6xl font-extrabold text-cyan-400 drop-shadow-[0_0_15px_#00f7ff]">
          About Us
        </h2>
        <p className="pt-6 text-lg sm:text-xl text-gray-300 leading-relaxed max-w-3xl mx-auto">
          We are a team of <span className="text-pink-400 font-bold">energy consultants</span>
          helping businesses achieve sustainability goals and cut energy costs.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {data.map((item, i) => (
            <div
              key={i}
              className="rounded-xl p-6 bg-black/40 border border-cyan-400 shadow-[0_0_20px_#00f7ff] hover:shadow-[0_0_35px_#ff00ff] transition-all transform hover:scale-105"
            >
              <Card {...item} />
            </div>
          ))}
        </div>
      </section>

      {/* Services */}
      <section className="mt-20 text-center">
        <h2 className="text-5xl sm:text-6xl font-extrabold text-pink-400 drop-shadow-[0_0_15px_#ff00ff]">
          Services
        </h2>
        <p className="pt-6 text-lg sm:text-xl text-gray-300 leading-relaxed max-w-3xl mx-auto">
          Our neon-powered services cover audits, AI insights, and futuristic energy solutions.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {services.map((item, i) => (
            <div
              key={i}
              className="rounded-xl p-6 bg-black/40 border border-pink-400 shadow-[0_0_20px_#ff00ff] hover:shadow-[0_0_35px_#00f7ff] transition-all transform hover:scale-105"
            >
              <Card {...item} />
            </div>
          ))}
        </div>
      </section>

      {/* Industries */}
      <section className="mt-20 text-center">
        <h2 className="text-5xl sm:text-6xl font-extrabold text-green-400 drop-shadow-[0_0_15px_#39ff14]">
          Industries We Serve
        </h2>
        <p className="pt-6 text-lg sm:text-xl text-gray-300 leading-relaxed max-w-3xl mx-auto">
          From startups to enterprises, our neon solutions adapt to every industry.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {industries.map((item, i) => (
            <div
              key={i}
              className="rounded-xl p-6 bg-black/40 border border-green-400 shadow-[0_0_20px_#39ff14] hover:shadow-[0_0_35px_#ff00ff] transition-all transform hover:scale-105"
            >
              <Card {...item} />
            </div>
          ))}
        </div>
      </section>

      {/* Case Studies */}
      <section className="mt-20 text-center">
        <h2 className="text-5xl sm:text-6xl font-extrabold text-yellow-400 drop-shadow-[0_0_15px_#ffff00]">
          Case Studies
        </h2>
        <p className="pt-6 text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto">
          See how we’ve built futuristic neon-powered solutions for clients.
        </p>
      </section>
      <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {casestudydata.map((item, i) => (
          <div
            key={i}
            className="rounded-xl p-6 bg-black/40 border border-yellow-400 shadow-[0_0_20px_#ffff00] hover:shadow-[0_0_35px_#ff00ff] transition-all transform hover:scale-105"
          >
            <Casestudycard item={item} />
          </div>
        ))}
      </div>

      {/* Testimonials & Client Logos */}
      <section className="mt-20 text-center">
        <h2 className="text-5xl sm:text-6xl font-extrabold text-purple-400 drop-shadow-[0_0_15px_#a020f0]">
          Testimonials & Logos
        </h2>
        <p className="pt-6 text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto">
          Trusted by brands who love our neon energy.
        </p>
      </section>

      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-8 mt-12 justify-items-center">
        {ClientLogos.map((item, i) => (
          <div
            key={i}
            className="rounded-xl p-6 bg-black/40 border border-purple-400 shadow-[0_0_20px_#a020f0] hover:shadow-[0_0_35px_#00f7ff] transition-all transform hover:scale-110"
          >
            <Card {...item} />
          </div>
        ))}
      </div>


      {/* Contact Form */}
      <section className="mt-20 text-center">
        <h2 className="text-5xl sm:text-6xl font-extrabold text-cyan-400 drop-shadow-[0_0_20px_#00f7ff]">
          Contact & Consultation
        </h2>
        <p className="pt-6 text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto">
          Get in touch with us to discuss your energy needs and schedule a consultation.
        </p>
      </section>

      {/* Form Section */}
      <div className="flex items-center justify-center mt-12 mb-20">
        <form className="flex items-center p-2 rounded-full bg-gray-900 shadow-lg">
          {/* Email Input */}
          <input
            type="email"
            placeholder="Your Email"
            className="px-4 py-3 rounded-l-full bg-transparent text-white placeholder-gray-400 outline-none border-none w-72 
      focus:ring-2 focus:ring-pink-500"
          />

          {/* Submit Button */}
          <button
            type="submit"
            className="px-6 py-3 rounded-r-full font-bold text-white 
      bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 
      hover:from-blue-500 hover:via-purple-500 hover:to-pink-500
      transition-all duration-300 
      shadow-[0_0_15px_rgba(255,0,255,0.7),0_0_30px_rgba(0,255,255,0.5)]"
          >
            Submit
          </button>
        </form>
      </div>
      <footer className="bg-black text-gray-300 py-10 mt-20">
        {/* Top Navigation Links */}
        <div className="flex justify-center space-x-10 text-lg font-medium">
          {["About Us", "Services", "Industries", "Case Studies", "Contact"].map(
            (item, idx) => (
              <a
                key={idx}
                href="#"
                className="relative text-cyan-400 transition duration-300 hover:text-pink-400 
              after:content-[''] after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-[2px] 
              after:bg-gradient-to-r after:from-pink-500 after:to-cyan-400 
              after:transition-all after:duration-300 hover:after:w-full"
              >
                {item}
              </a>
            )
          )}
        </div>

        {/* Social Icons */}
        <div className="flex justify-center space-x-6 mt-6 text-2xl">
          <a
            href="#"
            className="text-cyan-400 hover:text-pink-400 transition duration-300 
          drop-shadow-[0_0_10px_#00f7ff]"
          >
            <FaTwitter />
          </a>
          <a
            href="#"
            className="text-cyan-400 hover:text-pink-400 transition duration-300 
          drop-shadow-[0_0_10px_#00f7ff]"
          >
            <FaLinkedin href="https://www.linkedin.com" />
          </a>
        </div>

        {/* Copyright */}
        <div className="text-center mt-6 text-sm text-gray-400">
          © 2024 <span className="text-cyan-400">Energy Solutions Inc.</span> All
          rights reserved.
        </div>
      </footer>

    </div>
  );
}

export default Home;
