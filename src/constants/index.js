import { cafe, docketrun, meta, shopify, starbucks, tesla } from "../assets/images";
import {
  car,
  contact,
  css,
  estate,
  express,
  git,
  github,
  html,
  javascript,
  fair,
  linkedin,
  mongodb,
  motion,
  mui,
  nextjs,
  nodejs,
  pricewise,
  react,
  redux,
  sass,
  snapgram,
  summiz,
  tailwindcss,
  threads,
  typescript,
  db,
  rupee,
  relapse,
} from "../assets/icons";

export const skills = [
  {
    imageUrl: css,
    name: "CSS",
    type: "Frontend",
  },
  {
    imageUrl: express,
    name: "Express",
    type: "Backend",
  },
  {
    imageUrl: git,
    name: "Git",
    type: "Version Control",
  },
  {
    imageUrl: github,
    name: "GitHub",
    type: "Version Control",
  },
  {
    imageUrl: html,
    name: "HTML",
    type: "Frontend",
  },
  {
    imageUrl: javascript,
    name: "JavaScript",
    type: "Frontend",
  },
  {
    imageUrl: mongodb,
    name: "MongoDB",
    type: "Database",
  },
  {
    imageUrl: motion,
    name: "Motion",
    type: "Animation",
  },
  
  {
    imageUrl: nextjs,
    name: "Next.js",
    type: "Frontend",
  },
  {
    imageUrl: nodejs,
    name: "Node.js",
    type: "Backend",
  },
  {
    imageUrl: react,
    name: "React",
    type: "Frontend",
  },
  
  {
    imageUrl: sass,
    name: "Sass",
    type: "Frontend",
  },
  {
    imageUrl: tailwindcss,
    name: "Tailwind CSS",
    type: "Frontend",
  },
  {
    imageUrl: typescript,
    name: "TypeScript",
    type: "Frontend",
  },
];

export const experiences = [
  {
    title: "Machine Learning Intern",
    company_name: "Docketrun",
    icon: docketrun,
    iconBg: "#accbe1",
    date: "September 2023 - Present",
    points: [
      "Working on material detection in Conveyor belt for steel industry using Python, Machine Learning, Tensorflow and the YOLO Algorithm",
      "Integrated custom object detection model into conveyor belt systems, ensuring accurate identification of steel industry materials and foreign objects.",
      "Designed and built a user-friendly web dashboard for remote monitoring, enabling efficient visualization of material detection results",
    ],
  },
  {
    title: "Rico Cafe Owner",
    company_name: "Rico",
    icon: cafe,
    iconBg: "#b7e4c7",
    date: "Oct 2022 - Present",
    points: [
      "Established and currently operate a European-styled cafe",
      "Assume responsibility for overseeing the entire management and daily operations of the cafe",
      "Implemented a staff attendance system through a personalised facial recognition solution using TensorFlow and an R-CNN model, coupled with Next.js",
    ],
  },
  
 
];

export const socialLinks = [
  {
    name: "Contact",
    iconUrl: contact,
    link: "/contact",
  },
  {
    name: "GitHub",
    iconUrl: github,
    link: "https://github.com/Ramita13",
  },
  {
    name: "LinkedIn",
    iconUrl: linkedin,
    link: "https://www.linkedin.com/in/ramita-commi-335394213/",
  },
];

export const projects = [
 
  {
    iconUrl: fair,
    theme: "btn-back-green",
    name: "Fair Coexistence Of LTE-U And WiFi In Unlicensed Spectrum",
    description:
      "Designed, implemented and tested a power-efficient Dynamic Frame Selection algorithm with Q-learning and Dyna Q+ reinforcement learning techniques.",
  },
  {
    iconUrl: db,
    theme: "btn-back-blue",
    name: "Informatica-Powered Art Gallery Management Solution",
    description:
      "Performed integration of various data formats into a structured relational model and applied advanced data transformations to ensure precise information retrieval.",
  },
  {
    iconUrl: rupee,
    theme: "btn-back-pink",
    name: "Ethereum Blockchain-backed Rupee Digital Token",
    description:
      "Implemented a contract adhering to the ERC-20 standard to deploy a fungible token representing fiat currency. Additionally, created a web interface using web3.js that interfaces with a local Geth node.",
  },
  {
    iconUrl: relapse,
    theme: "btn-back-black",
    name: "Data Analysis Of Alcohol Relapsed Patients",
    description:
      "Conducted real-time data preprocessing on information sourced from local Alcohol Rehabilitation Centers. Employed techniques such as Dummy Encoding, One-Hot Encoding, Binning, and Data Normalization. Subsequently, executed Data Analysis utilizing visualization methods including Heat Map, Linear Regression Plot, and KNN Classifier.",
  },
  
];
