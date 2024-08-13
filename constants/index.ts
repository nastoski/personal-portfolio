import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";

import bvdAdvocaten from "@/public/bvd.png";
import affinityGlow from "@/public/affinityglow.png";
import dutchBlower from "@/public/dutchblower.png";
import johannus from "@/public/johannus.png";
import pipeiros from "@/public/pipeiros.png";
import quadwinkel from "@/public/quadwinkel.png";
import steamz from "@/public/steamz.png";
import steets from "@/public/steets.png";
import wemetalProject from "@/public/wemetalProject.png";
import medicare from "@/public/medicare.png";
import devspace from "@/public/devspace.png";
import djeventsproject from "@/public/djeventsproject.png";
import electrosim from "@/public/electrosim.png";
import nastoskiecommerce from "@/public/nastoskiecommerce.png";
import youtubeclone from "@/public/youtubeclone.png";

// Navigation links
export const LINKS = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

// External links
export const EXTRA_LINKS = {
  linkedin: "https://www.linkedin.com/in/nastoski/",
  github: "https://github.com/nastoski",
  resume: "/resume.pdf",
  email: "nastoskih@gmail.com",
} as const;

// Data for work experience
export const EXPERIENCES_DATA = [
  {
    title: "Freelance | Web Developer (Frontend Focus)",
    location: "Upwork Inc.",
    description:
      "Successfully contributed to various projects on Upwork specializing in frontend development.",
    icon: React.createElement(FaReact),
    date: "2020-2022",
  },
  {
    title: "Front-End Developer",
    location: "Steets Inc.",
    description:
      "Developed and optimized dynamic, user-friendly features, integrated SEO strategies, and ensured cross-browser compatibility using Statamic CMS, showcasing the final product to clients.",
    icon: React.createElement(FaReact),
    date: "2022-2023",
  },
  {
    title: "Freelance | UI Developer",
    location: "Upwork Inc.",
    description:
      "Specialized in styling and enhancing UI components, ensuring consistent and responsive design across various platforms by working closely with designers to refine visual elements.",
    icon: React.createElement(FaReact),
    date: "2023 - present",
  },
] as const;

// Data for projects
export const PROJECTS_DATA = [
  {
    title: "Dutch Blower | Website",
    description:
      "Contributed as a frontend developer for Dutch Blower website, a global leader in the air handling and climate control industry, renowned for excellence in craftsmanship and customer satisfaction.",
    tags: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Statamic CMS", "GraphQL"],
    imageUrl: dutchBlower,
    projectUrl: "https://www.dutch-blower.com/",
  },
  {
    title: "Johannus | Organ Products Website",
    description:
      "Contributed as a frontend developer for Johannus website, showcasing their range of organ products and enabling users to experience authentic pipe organ sounds.",
    tags: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Statamic CMS", "GraphQL"],
    imageUrl: johannus,
    projectUrl: "https://www.johannus.com/",
  },
  {
    title: "Digital Agency Website",
    description:
      "Contributed as a frontend developer at Steets, enhancing the digital agency's online presence and services.",
    tags: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Statamic CMS", "GraphQL"],
    imageUrl: steets,
    projectUrl: "https://www.steets.nl/",
  },
  {
    title: "Monte dos Pipeiros Website",
    description:
      "Contributed to frontend development for the Pipeiros Villa website, enabling users to explore room details and schedule bookings online.",
    tags: ["Antlers", "Alpine.js", "Tailwind CSS", "Statamic CMS", "Google Maps"],
    imageUrl: pipeiros,
    projectUrl: "https://www.pipeiros.com/en",
  },
  {
    title: "Quadwinkel Store Website",
    description:
      "I contributed to the frontend development of Quadwinkel, an eCommerce platform dedicated to selling and promoting products and parts for quad bikes.",
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "Stripe", "Statamic CMS", "GraphQL"],
    imageUrl: quadwinkel,
    projectUrl: "https://www.quadwinkel.nl/",
  },
  {
    title: "BVD Advocaten",
    description:
      "Contributed to the frontend development and utilized Statamic CMS to create the BVD Advocaten website, a platform providing legal services and information.",
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "Statamic CMS", "GraphQL"],
    imageUrl: bvdAdvocaten,
    projectUrl: "https://www.bvd-advocaten.nl/",
  },
  {
    title: "WE Metal Website",
    description:
      "Contributed to frontend development for the WE Metal website, showcasing their metalworking services and products.",
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "Statamic CMS", "GraphQL"],
    imageUrl: wemetalProject,
    projectUrl: "https://www.we-metal.com/",
  },
  {
    title: "Steamz | Recruitment Agency Website",
    description:
      "Developed the frontend components and UI for Steamz.nl, a recruitment agency website aimed at connecting job seekers with employers, offering intuitive navigation and informative content to facilitate the hiring process.",
    tags: ["Antlers", "Alpine.js", "Tailwind CSS", "Statamic CMS"],
    imageUrl: steamz,
    projectUrl: "https://www.steamz.nl/",
  },
  {
    title: "Electro-Sim | Electrician Services Website",
    description:
      "Developed a static website for Electro-Sim, an electrician friend's company, providing detailed information about their electrical services.",
    tags: ["HTML5", "CSS", "JavaScript", "jQuery", "Bootstrap"],
    imageUrl: electrosim,
    projectUrl: "https://electro-sim.com/",
  },
  {
    title: "AffinityGlow | Blog",
    description:
      "I developed affiliate marketing blog focused of promoting specialized digital products.",
    tags: ["Antlers", "Alpine.js", "Tailwind CSS", "Statamic CMS", "VPS Deployed"],
    imageUrl: affinityGlow,
    projectUrl: "https://www.affinityglow.blog/",
  },
  {
    title: "Personal Project MediCare",
    description:
      "A healthcare patient management application that allows patients to easily register, book, and manage their appointments with doctors, featuring administrative tools for scheduling, confirming, and canceling appointments, along with SMS notifications, all built using Next.js.",
    tags: ["Next.js", "TypeScript", "Appwrite", "TailwindCSS", "ShadCN", "Twilio"],
    imageUrl: medicare,
    projectUrl: "https://healthcare-medicare.vercel.app/",
  },
  {
    title: "Personal Project DevSpace Blog 2021",
    description:
      "Static Blog App built with Next.js(Incremental Static Regeneration), Semantic UI, blog posts using MDX.",
    tags: ["Next.js", "Semantic UI", "MDX"],
    imageUrl: devspace,
    projectUrl: "https://nextjs-blog-jade-five.vercel.app/",
  },
  {
    title: "Personal Project DJ Events App 2021",
    description:
      "Dj Events App using Next.js SSR, Custom CSS, User Auth, Strapi Backend",
    tags: ["Next.js", "Bearer Token", "Node.js", "Strapi"],
    imageUrl: djeventsproject,
    projectUrl: "https://dj-events-nastoski.vercel.app/",
  },
  {
    title: "Personal Project Youtube Clone 2021",
    description:
      "Youtube Clone Application using React.js, Redux, JWT, Node.js, MongoDB, Firebase and Firebase Storage(Video Uploading Functionality).",
    tags: ["React", "Redux", "JWT", "Node.js", "MongoDB", "Firebase", "Firebase Storage"],
    imageUrl: youtubeclone,
    projectUrl: "https://youtube-clone-tau-kohl.vercel.app/signin",
  },
  {
    title: "Personal Project E-Commerce Application 2021",
    description:
      "E-commerce Application built with Next.js, Bootstrap and Mongodb. Features are User and Admin Authorization, Users Info CRUD, Shopping Cart, Payment with Paypal, Filtering, Pagination, Sorting, Search, Image Uploading to Cloudinary",
    tags: ["Next.js", "Redux Toolkit", "JWT", "Bootstrap", "Cloudinary", "Stripe"],
    imageUrl: nastoskiecommerce,
    projectUrl: "https://ecommerce-nastoski.vercel.app/",
  },
] as const;

// Data for skills
export const SKILLS_DATA = [
  "HTML",
  "CSS",
  "JavaScript",
  "jQuery",
  "Gulp",
  "SCSS",
  "TypeScript",
  "React.js",
  "Next.js",
  "Stripe",
  "Node.js",
  "Git",
  "Tailwind CSS",
  "Shadcn UI",
  "Framer Motion",
  "Redux.js",
  "Express.js",
  "GraphQL",
  "Strapi.io",
  "VPS Setup",
  "Linux OS / Server",
  "Docker",
] as const;

// Owner name
export const OWNER_NAME = "Hristijan Nastoski";
