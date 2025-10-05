import React, { useEffect, useState } from "react";
import { bannerData, secondsection, testimonialsData, teamMembers } from "../../static_data/aboutstaticdata";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { motion } from "framer-motion"; // ✅ Added

export default function AboutPage() {
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const section = document.getElementById("sustainable-future");
      if (section) {
        const rect = section.getBoundingClientRect();
        if (rect.top < window.innerHeight - 100) {
          setInView(true);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  //  Slider settings
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 2 } },
      { breakpoint: 768, settings: { slidesToShow: 1 } },
    ],
  };

  //team members slider settings
  const teamMembersSliderSettings = {
    dots: false,
    infinite: true,
    speed: 600,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 2 } },
      { breakpoint: 640, settings: { slidesToShow: 1 } },
    ],
  };

  // ✅ Framer Motion Variants
  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  return (
    <div>
      {/* ======================================================== Banner Section ======================================================= */}
      <section className="relative w-full h-[70vh] flex items-center justify-center bg-gray-900">
        <img
          src={bannerData.image}
          alt={bannerData.title}
          className="absolute inset-0 w-full h-full object-cover opacity-90"
        />
        {bannerData.overlay?.enabled && (
          <div
            className="absolute inset-0"
            style={{
              backgroundColor: bannerData.overlay.color,
              opacity: bannerData.overlay.opacity,
            }}
          />
        )}
        <motion.div
          className="relative z-10 text-center text-white px-4"
          initial="hidden"
          animate="visible"
          variants={fadeUp}
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

      {/* ============================================================ Second Section ============================================================= */}
      <section id="sustainable-future" className="w-full py-12 px-4 md:px-12 bg-white">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* Left Image */}
          <motion.div
            className="w-full"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
          >
            <img
              src={secondsection.image}
              alt="Engineer working on solar panels"
              className="w-full h-auto rounded-lg shadow-lg"
            />
          </motion.div>

          {/* Right Content */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
          >
            <p className="text-gray-500 uppercase tracking-widest mb-2 text-sm">
              {secondsection.subtitle}
            </p>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 leading-snug">
              {secondsection.title}
            </h2>

            {/* Progress Bars */}
            <div className="space-y-6">
              {secondsection.progress.map((item, idx) => (
                <div key={idx}>
                  <div className="flex justify-between mb-1 text-sm font-medium text-gray-700">
                    <span>{item.title}</span>
                    <span>{item.value}%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2 overflow-hidden">
                    <motion.div
                      className="bg-orange-500 h-2 rounded-full"
                      initial={{ width: "0%" }}
                      animate={{ width: inView ? `${item.value}%` : "0%" }}
                      transition={{ duration: 1.2, ease: "easeOut" }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* =========================================================== third Section ========================================================== */}
      <section className="py-16 px-6 bg-white">
        <motion.div
          className="max-w-7xl mx-auto text-center mb-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
        >
          <p className="text-gray-500 uppercase tracking-widest text-sm">
            {testimonialsData.subtitle}
          </p>
          <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-4">
            {testimonialsData.title}
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            {testimonialsData.description}
          </p>
        </motion.div>

        {/* Slider */}
        <motion.div
          className="max-w-6xl mx-auto"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
        >
          <Slider {...settings}>
            {testimonialsData.testimonials.map((item) => (
              <div key={item.id} className="px-4 h-full">
                <div className="bg-white border rounded-lg shadow-md p-6 relative h-[350px] flex flex-col justify-between">
                  <div>
                    <div className="flex items-center gap-4 mb-4">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-16 h-16 rounded-md object-cover"
                      />
                      <div className="text-left">
                        <h3 className="font-bold text-lg">{item.name}</h3>
                        <p className="text-gray-500 text-sm">{item.role}</p>
                      </div>
                      <span className="absolute top-6 right-6 text-orange-500 text-3xl font-bold">
                        ❝
                      </span>
                    </div>
                    <p className="text-gray-600 text-left line-clamp-4">
                      {item.feedback}
                    </p>
                  </div>
                  {/* Rating */}
                  <div className="flex mt-4">
                    {Array.from({ length: item.rating }).map((_, i) => (
                      <span key={i} className="text-yellow-500 text-lg">
                        ★
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </motion.div>
      </section>

      {/*==================================================fourth Section =========================================================*/}
      <section className="relative w-full bg-white flex justify-center">
        <motion.div
          className="relative w-full max-w-[1300px] h-[400px] md:h-[500px] overflow-hidden rounded-lg"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
        >
          {/* Background Image */}
          <img
            src="eman2.jpg"
            alt="Solar Engineer"
            className="w-full h-full object-cover"
          />

          {/* Overlay for better readability */}
          <div className="absolute inset-0 bg-black/40"></div>

          {/* Content Box - Positioned Over Image (LEFT SIDE) */}
          <div className="absolute top-1/2 left-6 md:left-16 transform -translate-y-1/2 bg-gray-900/90 text-white p-6 md:p-10 max-w-md shadow-lg rounded-lg backdrop-blur-sm">
            <p className="uppercase tracking-widest text-sm text-gray-400 mb-2">
              What We Do
            </p>
            <h2 className="text-2xl md:text-4xl font-bold mb-4 leading-snug">
              Fostering Growth <br /> of Solar Energy!
            </h2>
            <p className="text-gray-300 mb-6 text-sm md:text-base">
              It amet consectetur adipiscing elit duis tristique. Nulla aliquet enim
              tortor at. Eget nulla facilisi etiam sumitut est dignissim.
            </p>
            <button className="bg-orange-500 hover:bg-orange-600 text-white px-5 py-3 rounded font-semibold transition duration-300">
              View All
            </button>
          </div>
        </motion.div>
      </section>


      {/*==================================================fifth Section =========================================================*/}
      <section className="py-16 bg-white">
        <motion.div
          className="text-center mb-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
        >
          <p className="text-gray-500 uppercase tracking-widest text-sm">
            What We Do
          </p>
          <h2 className="text-3xl md:text-4xl font-bold mt-2">
            Meet Leadership Team
          </h2>
        </motion.div>

        {/* Slider */}
        <motion.div
          className="max-w-7xl mx-auto px-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
        >
          <Slider {...teamMembersSliderSettings}>
            {teamMembers.map((member) => (
              <div key={member.id} className="px-4">
                <div className="relative overflow-hidden rounded-lg shadow-md group">
                  <img
                    src={member.img}
                    alt={member.name}
                    className="w-full h-[350px] object-cover"
                  />
                  {/* Orange + icon */}
                  <div className="absolute top-4 right-4 bg-orange-500 w-8 h-8 flex items-center justify-center text-white font-bold rounded cursor-pointer transition group-hover:scale-110">
                    +
                  </div>
                </div>
                <div className="text-center mt-4">
                  <h3 className="font-semibold text-lg">{member.name}</h3>
                  <p className="text-gray-500 text-sm">{member.role}</p>
                </div>
              </div>
            ))}
          </Slider>
        </motion.div>
      </section>

      {/* ============================================================ last Section ============================================================= */}
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
