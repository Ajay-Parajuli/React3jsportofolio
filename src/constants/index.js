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
    chatapp,
    getFit,
    figma,
    threejs,
  } from "../assets";
  
  export const navLinks = [
    {
      id: "education",
      title: "Education",
    },
    {
      id: "projects",
      title: "Projects",
    },
    {
      id: "about",
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
      description: "chat application that allows users to send and receive messages in real-time.",     
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
      image: chatapp,
      source_code_link: "https://github.com/Ajay-Parajuli/vanillachatapp",
      livedemo: "https://vanillachatapp.paparajuli.dk/",
    },
    {
      name: "GetFit App",
      description: "Post-Events app with user authentication allows to execute CRUD operations and more.",     
 tags: [
        {
          name: "Remix",
          color: "blue-text-gradient",
        },
        {
          name: "Mongoose",
          color: "green-text-gradient",
        },
        {
          name: "Tailwind",
          color: "pink-text-gradient",
        },
      ],
      image: getFit,
      source_code_link: "https://github.com/eaaa-dob-wu-e23a/awu-exam-Ajay-Parajuli",
      livedemo: "https://awu-exam-d7e2f4af0d3a.herokuapp.com/",
    },
  ];
  
  export {  technologies, experiences, projects };