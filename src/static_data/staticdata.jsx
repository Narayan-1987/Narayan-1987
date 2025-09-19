import { FaCloud, FaLaptop, FaLightbulb } from "react-icons/fa";
import { IoSettings } from "react-icons/io5";
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
const services=[
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
const industries=[
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
const commercialrealestate = "/commericialrealstate.jpeg";
const casestudydata = [
  {
    title: "Project One",
    description: "This is the description for project one.",
    src: "/commericialrealstate.jpeg"
  },
  {
    title: "Project Two",
    description: "This is the description for project two.",
    src: "/manufacturing.jpg"
  },
  {
    title: "Project Three",
    description: "This is the description for project three.",
    src: "/healthcare.jpg"
  }
];
const ClientLogos=[
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

export { data, services, industries, commercialrealestate, casestudydata, ClientLogos };