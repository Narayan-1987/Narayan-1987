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
  "https://plus.unsplash.com/premium_photo-1663089781621-65b8476dbcbd?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1559302504-64aae6ca6b6d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDMwfHx8ZW58MHx8fHx8",
  "https://plus.unsplash.com/premium_photo-1664302342178-564b28c68d33?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "/solar1.jpeg",
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
    img: "https://plus.unsplash.com/premium_photo-1663089781621-65b8476dbcbd?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    date: "Sept 20, 2025",
    category: "Renewable Energy",
    title: "How Solar Power is Transforming Urban Living",
    link: "#",
  },
  {
    img: "https://plus.unsplash.com/premium_photo-1663089743898-aefbe7863763?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1pbi1zYW1lLXNlcmllc3wxfHx8ZW58MHx8fHx8",
    date: "Sept 15, 2025",
    category: "Sustainability",
    title: "Top 5 Ways to Reduce Your Carbon Footprint",
    link: "#",
  },
  {
    img: "https://images.unsplash.com/photo-1660330589505-9a433a742a7b?q=80&w=1332&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    date: "Sept 10, 2025",
    category: "Technology",
    title: "AI in Renewable Energy: Future of Smart Grids",
    link: "#",
  },
];
