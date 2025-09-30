//first Section============================================================================================
const bannerData = {
    id: "about-us-banner",
    title: "About Us",
    breadcrumb: ["Greenly", "About Us"],
    image: "solar1.jpeg",
    overlay: {
        enabled: true,
        color: "black",
        opacity: 0.4,
    },
};

//second Section============================================================================================
const secondsection = {
    id: "sustainable-future",
    title: "We are Building a Sustainable Future",
    subtitle: "What We Do",
    image: "man1.jpg",
    progress: [
        { title: "Solar Energy", value: 87 },
        { title: "Wind Energy", value: 71 },
        { title: "Hydropower", value: 70 },
    ],
};

//third section================================================================================================

const testimonialsData = {
    subtitle: "WHAT WE DO",
    title: "Clients Say About Solar",
    description:
        "It amet consectetur adipiscing elit duis tristique. Nulla aliquet enim tortor at. Eget nulla facilisi etiam sumitut est dignissim diam quis. Varius duis at consectetur lorem.",
    testimonials: [
        {
            id: 1,
            name: "Mahfuz Riad",
            role: "CEO of Bata",
            image: "man1.jpg",
            feedback:
                "Cut down on all your work by collaborating with our Launch Pad team to get the framework of your online business up and running in no time.",
            rating: 5,
        },
        {
            id: 2,
            name: "Victoria Porter",
            role: "World-Famous Magician",
            image: "man2.jpg",
            feedback:
                "Cut down on all your work by collaborating with our Launch Pad team to get the framework of your online business up and running in no time.",
            rating: 5,
        },
        {
            id: 3,
            name: "John Carter",
            role: "Tech Entrepreneur",
            image: "man3.jpg",
            feedback:
                "Working with this team was a game changer for my startup. They helped me scale quickly and efficiently.",
            rating: 4,
        },
    ],
};
// fifth Section============================================================================================
const teamMembers = [
    { id: 1, name: "pletus Perri", role: "CEO", img: "/team1.jpg" },
    { id: 2, name: "Sarah Smith", role: "CTO", img: "/team2.jpg" },
    { id: 3, name: "Robert Brown", role: "Manager", img: "/team3.jpg" },
    { id: 4, name: "William Lee", role: "Advisor", img: "/team4.jpg" },
];

export { bannerData, secondsection, testimonialsData, teamMembers };