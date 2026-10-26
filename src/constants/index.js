import {
  mobile, backend, creator, web, javascript, typescript, html, css, reactjs,
  redux, tailwind, nodejs, mongodb, git, figma, docker, meta, starbucks,
  tesla, shopify, carrent, jobit, tripguide, threejs,
} from "../assets";

export const navLinks = [
  { id: "about", title: "About" },
  { id: "work", title: "Projects" },
  { id: "contact", title: "Contact" },
];

const services = [
  { title: "Web Development", icon: web },
  { title: "UI/UX Design", icon: creator },
  { title: "AI App Development", icon: backend },
  { title: "Debugging & Code Review", icon: mobile },
];

const technologies = [
  { name: "HTML 5", icon: html }, { name: "CSS 3", icon: css },
  { name: "JavaScript", icon: javascript }, { name: "TypeScript", icon: typescript },
  { name: "React JS", icon: reactjs }, { name: "Redux Toolkit", icon: redux },
  { name: "Tailwind CSS", icon: tailwind }, { name: "Node JS", icon: nodejs },
  { name: "MongoDB", icon: mongodb }, { name: "Three JS", icon: threejs },
  { name: "Git", icon: git }, { name: "Figma", icon: figma },
  { name: "Docker", icon: docker },
];

// Project-based learning and independent builds; these are not presented as employment history.
const experiences = [
  {
    title: "AI-powered Web Apps",
    company_name: "Aivora AI and AI prototypes",
    icon: meta, iconBg: "#383E56", date: "Ongoing",
    points: [
      "Exploring practical AI features and integrating them into browser-based products.",
      "Prioritizing real functionality, clear interfaces, and honest handling of API limitations.",
      "Iterating on product ideas through implementation, debugging, and testing."
    ],
  },
  {
    title: "Educational Interactive Experiences",
    company_name: "ORBITA LAB",
    icon: tesla, iconBg: "#E6DEDD", date: "Project work",
    points: [
      "Designing an Uzbek-language physics learning experience with interactive simulations.",
      "Focusing on projector-friendly layouts, understandable explanations, and useful practice tasks."
    ],
  },
  {
    title: "Web Development",
    company_name: "School and chemistry projects",
    icon: shopify, iconBg: "#383E56", date: "Project work",
    points: [
      "Building practical websites and learning to handle real project constraints.",
      "Improving responsive layouts, maintainability, and the overall user experience."
    ],
  },
];

const testimonials = [
  {
    testimonial: "Build the real feature first. Avoid fake buttons, fabricated results, and claims that cannot be verified.",
    name: "Principle 01", designation: "Product mindset", company: "Functionality",
    image: "https://api.dicebear.com/7.x/shapes/svg?seed=functionality",
  },
  {
    testimonial: "Keep interfaces clear, responsive, and accessible instead of adding visual effects that get in the user's way.",
    name: "Principle 02", designation: "Design mindset", company: "Usability",
    image: "https://api.dicebear.com/7.x/shapes/svg?seed=usability",
  },
  {
    testimonial: "Test, debug, and improve in small steps. Be transparent about what is complete and what still needs work.",
    name: "Principle 03", designation: "Engineering mindset", company: "Reliability",
    image: "https://api.dicebear.com/7.x/shapes/svg?seed=reliability",
  },
];

const projects = [
  {
    name: "Aivora AI",
    description: "An evolving AI web-app concept exploring chat, creative tools, translation, and a polished dark interface. Features depend on configured providers and APIs.",
    tags: [{ name: "react", color: "blue-text-gradient" }, { name: "AI tools", color: "green-text-gradient" }, { name: "web app", color: "pink-text-gradient" }],
    image: carrent, source_code_link: "https://github.com/karimjonovshuhratjon9-pixel/SuperAi.update.git",
  },
  {
    name: "ORBITA LAB",
    description: "An Uzbek-language interactive physics lesson concept with space-lab styling, simulations, formulas, and practice activities for classroom use.",
    tags: [{ name: "education", color: "blue-text-gradient" }, { name: "interactive", color: "green-text-gradient" }, { name: "UI/UX", color: "pink-text-gradient" }],
    image: jobit, source_code_link: "https://fizika-smoky-phi.vercel.app/",
  },
  {
    name: "Virtual Kimyo",
    description: "A virtual chemistry laboratory project concept focused on visual learning and exploring scientific topics through a web interface.",
    tags: [{ name: "web development", color: "blue-text-gradient" }, { name: "science", color: "green-text-gradient" }, { name: "3D", color: "pink-text-gradient" }],
    image: tripguide, source_code_link: "https://virtual-kimyo.vercel.app/",
  },
];

export { services, technologies, experiences, testimonials, projects };
