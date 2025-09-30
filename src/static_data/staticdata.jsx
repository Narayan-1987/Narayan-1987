import { FaCloud, FaLaptop, FaLightbulb } from "react-icons/fa";
import { IoSettings } from "react-icons/io5";
import { Sun, PanelsTopLeft, Wind, Lightbulb } from "lucide-react";

const data = [
    {
        icon: <FaLightbulb color="yellow" />,
        title: "Inovation",
        description: "Build responsive and modern mobile applications for Android and iOS."
    },
    {
        icon: <FaLaptop color="gray" />,
        title: "Efficiency",
        description: "Create scalable and fast web applications using the latest technologies."
    },
    {
        icon: <FaCloud color="orange" />,
        title: "Sustainability",
        description: "Deploy and manage your apps securely with cloud-based infrastructure."
    }


];
const services = [
    {
        icon: <IoSettings color="blue" />,
        title: "Energy Audits",
        description: "Comprehensive energy audits to identify savings opportunities."
    },
    {
        icon: "⚡",
        title: "Implementation",
        description: "Ongoing energy management services to optimize usage."
    },
    {
        icon: "🌱",
        title: "Monitoring & Optimization",
        description: "Expert advice on sustainability initiatives and practices."
    }
];
const industries = [
    {
        icon: "🏭",
        title: "Commercial Real Estate",
        description: "Solutions tailored for the manufacturing sector."
    },
    {
        icon: "🏢",
        title: "Manufacturing",
        description: "Energy strategies for commercial buildings."
    },
    {
        icon: "🏡",
        title: "Healthcare",
        description: "Home energy efficiency and management."
    }
];
const commercialrealestate = "";
const casestudydata = [
    {
        title: "",
        description: "",
        src: "/1,1.png"
    },
    {
        title: "",
        description: "",
        src: "/1,2.png"
    },
    {
        title: "",
        description: "",
        src: "/1,3.png"
    },
    {
        title: "",
        description: "",
        src: "/1,4.png"
    },
    {
        title: "",
        description: "",
        src: "/1,5.png"
    },
];
const ClientLogos = [
    {
        icon: "🔍",
        title: "Client Testimonial 1",
        description: "Comprehensive energy audits to identify savings opportunities."
    },
    {
        icon: "⚡",
        title: "Client Testimonial 2",
        description: "Ongoing energy management services to optimize usage."
    },
    {
        icon: "🌱",
        title: "Client Testimonial 3",
        description: "Expert advice on sustainability initiatives and practices."
    }
];
const logos = [
    { src: "/1,1.png", alt: "Retro Design" },
    { src: "/1,2.png", alt: "Financial Advisors" },
    { src: "/1,3.png", alt: "Business Design" },
    { src: "/1,4.png", alt: "Partner" },
    { src: "/1,5.png", alt: "Best Finance" },
    { src: "/1,6.png", alt: "Business Service" },
];

const images = [
    "man1.jpg",
    "man2.jpg",
    "man3.jpg",
    "solar1.jpeg",
];



const features = [
    {
        number: "01",
        title: "Energy Solutions",
        description:
            "Turpis egestas pretium aenean pharetra magna ac placerat amet. Sit amet luctus",
    },
    {
        number: "02",
        title: "Global Expertise",
        description:
            "Venenatis lectus magna fringilla urna quis blandit turpis cursus diam vitae turpis.",
    },
    {
        number: "03",
        title: "For Commercial",
        description:
            "Turpis egestas pretium aenean pharetra magna ac placerat amet. Sit amet luctus",
    },
    {
        number: "04",
        title: "Energy Solutions",
        description:
            "Venenatis lectus magna fringilla urna quis blandit turpis cursus diam vitae turpis.",
    },
];

const orange = [
    {
        category: "ENERGY",
        title: "Technical Services",
        icon: <Sun size={50} />,
        image: "/man1.jpg",
    },
    {
        category: "ELECTRICITY",
        title: "Energy panels",
        icon: <PanelsTopLeft size={50} />,
        image: "/man2.jpg",
    },
    {
        category: "SOLAR PANNELS",
        title: "Wind Generators",
        icon: <Wind size={50} />,
        image: "/man3.jpg",
    },
    {
        category: "ELECTRICITY",
        title: "Solar As A Service",
        icon: <Lightbulb size={50} />,
        image: "/solar1.jpeg",
    },
];

const steps = [
{ number: "01", title: "We Design & Ship" },
{ number: "02", title: "Contract Or Install" },
{ number: "03", title: "Power Your Home" },
{ number: "04", title: "Save Your Money" },
];


const specialities = [
"Duis aut irure in velit esse",
"Excepteur sint occaecat cupida",
"Lorem ipsum dolor consectetur",
];


const hlast = [
  {
    id: 1,
    img: "family.jpeg",
    date: "09 JUN, 2019",
    category: "SOLAR PANELS",
    title: "Growth of Clean Energy Part of Solution",
    link: "#",
  },
  {
    id: 2,
    img: "man2.jpg",
    date: "23 JAN, 2019",
    category: "ELECTRICITY",
    title: "Metal Roofing: The Best for Solar Panels",
    link: "#",
  },
  {
    id: 3,
    img: "man1.jpg",
    date: "22 JAN, 2019",
    category: "WIND MILL",
    title: "Bill Gates Launches Energy Investment Fund",
    link: "#",
  },
];
export { data, services, industries, commercialrealestate, casestudydata, ClientLogos, logos, images, features, orange, steps, specialities,hlast };