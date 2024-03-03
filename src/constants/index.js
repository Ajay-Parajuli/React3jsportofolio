import {
    javascript,
    typescript,
    html,
    css,
    reactjs,
    tailwind,
    nodejs,
    mongodb,
    school,
    knowit,
    git,
    figma,
    threejs,
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  

  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "TypeScript",
      icon: typescript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "figma",
      icon: figma,
    },
  ];
  
  const experiences = [
    {
      title: "Multimedia Designer",
      company_name: "Erhvervsakademi Aarhus (EAAA)",
      icon: school,
      iconBg: "#383E56",
      date: "Janaury 2021 - Janaury 2023",
      points: [
        "Working on UX/UI design for web and mobile application.",
        "Creating and editing videos for social media and website.",
        "Developing websites using Javascript and React (Frontend).",
      ],
    },
    {
      title: "Frontend Developer Intern",
      company_name: "Know-it Experience A/S",
      icon: knowit,
      iconBg: "#E6DEDD",
      date: "August 2022 - December 2022",
      points: [
        "Developed new website for Aarhus Vand using Stencil JS and tailwind CSS in storybook.",
        "Learned about web accessibility and how to make website accessible.",
        "Worked on a team with other developers and designers.",
      ],
    },
    {
      title: "Web Development",
      company_name: "Erhvervsakademi Aarhus (EAAA)",
      icon: school,
      iconBg: "#E6DEDD",
      date: "August 2023 - January 2025",
      points: [
       "Gathered backend knowledge of using PHP and MySQL",
       "Gathered backend knowledge of using Remix and MongoDB/Mongoose",
       "Gathered backend knowledge of using Node JS, express and MongoDB",
      ],
    },
  ];
  

  const projects = [
    {
      name: "ChatApp",
      description: "chat application that allows users to send and receive messages in real-time",     
 tags: [
        {
          name: "php",
          color: "blue-text-gradient",
        },
        {
          name: "mysql",
          color: "green-text-gradient",
        },
        {
          name: "js",
          color: "pink-text-gradient",
        },
      ],
      image: "",
      source_code_link: "https://github.com/",
    },
    {
      name: "Remix contact app",
      description:"Contact app that allows users to add, delete, and update contacts. It also has a search feature to search for contacts by name.", 
           tags: [
        {
          name: "remix",
          color: "blue-text-gradient",
        },
        {
          name: "Tailwind",
          color: "green-text-gradient",
        },
        {
          name: "mongodb/mongoose",
          color: "pink-text-gradient",
        },
      ],
      image: "",
      source_code_link: "https://github.com/",
    },
    {
      name: "",
      description: "",
      tags: [
        {
          name: "nextjs",
          color: "blue-text-gradient",
        },
        {
          name: "supabase",
          color: "green-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
      ],
      image: "",
      source_code_link: "https://github.com/",
    },
  ];
  
  export {  technologies, experiences, projects };