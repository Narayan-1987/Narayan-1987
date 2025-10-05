// src/static_data/staticdata.js
import { FaLeaf, FaBolt, FaIndustry, FaHome } from "react-icons/fa";

// ================= Logo Section Data =================
export const logos = [
  { src: "1,1.png", alt: "Client Logo 1" },
  { src: "1,2.png", alt: "Client Logo 2" },
  { src: "1,3.png", alt: "Client Logo 3" },
  { src: "1,4.png", alt: "Client Logo 4" },
  { src: "1,5.png", alt: "Client Logo 5" },
  { src: "1,6.png", alt: "Client Logo 6" },
];

// ================= Hero Slider Images =================
export const images = [
  "eman1.jpg",
  "eman2.jpg",
  "eman3.jpg",
  "solar1.jpg",
];

// ================= Features Section =================
export const features = [
  {
    number: "10+",
    title: "Years of Experience",
    description: "Providing clean and sustainable energy solutions since last decade.",
  },
  {
    number: "500+",
    title: "Projects Completed",
    description: "Trusted by industries, businesses, and households worldwide.",
  },
  {
    number: "100%",
    title: "Client Satisfaction",
    description: "We ensure quality, reliability, and sustainability in every project.",
  },
  {
    number: "50MW",
    title: "Energy Installed",
    description: "Large scale solar and renewable installations across industries.",
  },
];

// ================= Orange Section (Services) =================
export const orange = [
  { icon: <FaLeaf className="text-5xl" />, title: "Green Energy" },
  { icon: <FaBolt className="text-5xl" />, title: "Energy Efficiency" },
  { icon: <FaIndustry className="text-5xl" />, title: "Industrial Solutions" },
  { icon: <FaHome className="text-5xl" />, title: "Residential Solar" },
];

// ================= Steps Section =================
export const steps = [
  { number: "01", title: "Consultation & Planning" },
  { number: "02", title: "Design & Engineering" },
  { number: "03", title: "Installation & Support" },
];

// ================= Blog Section =================
export const hlast = [
  {
    img: "eman6.jpg",
    date: "Sept 20, 2025",
    category: "Renewable Energy",
    title: "How Solar Power is Transforming Urban Living",
    link: "#",
  },
  {
    img: "eman9.jpg",
    date: "Sept 15, 2025",
    category: "Sustainability",
    title: "Top 5 Ways to Reduce Your Carbon Footprint",
    link: "#",
  },
  {
    img: "eman10.jpg",
    date: "Sept 10, 2025",
    category: "Technology",
    title: "AI in Renewable Energy: Future of Smart Grids",
    link: "#",
  },
];
