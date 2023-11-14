import {
    mobile,
    backend,
    creator,
    unityDev,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    docker,
    meta,
    starbucks,
    tesla,
    shopify,
    jobme,
    ncit,
    school,
    unity2,
    carrent,
    jobit,
    tripguide,
    threejs,
    photoshop,
    jobmesite,
    recommendhostel
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
  
  const services = [
    {
      title: "Frontend Developer",
      icon: web,
    },
    {
      title: "React Native Developer",
      icon: mobile,
    },
    // {
    //   title: "Backend Developer",
    //   icon: backend,
    // },
    // {
    //   title: "Content Creator",
    //   icon: creator,
    // },
    {
      title:"Unity Developer",
      icon:unityDev,
    }
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
      name: "Git",
      icon: git,
    },
    {
      name:"Photoshop",
      icon:photoshop,
    }
  ];
  
  const experiences = [
    {
      title: "React.js Developer",
      company_name: "",
      icon: jobme,
      iconBg: "#383E56",
      date: "June 2023 - September 2023",
      points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Understanding of modern javascript, ES6 ",
        "Knowledge of UI libraries like Material UI, Ant design etc",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
    {
      title:"Unity Developer",
      company_name:"",
      icon: unity2,
      iconBg:"#b4c5d9",
      date:"March 2022-April 2022",
      points:[
        "Designing, developing, and maintaining immersive gaming experiences using Unity3D and related technologies.",
        "Implementing responsive and scalable game mechanics while ensuring optimal performance across different platforms.",
        "Proficient in C# programming language and applying modern programming principles to game development.",
        "Familiarity with 3D mathematics, physics, and graphics to create realistic and visually appealing game environments.",
      ]
    },
    {
      title:"Capital College and Research Center",
      company_name:"",
      icon:school,
      iconBg:"#75c4b8",
      date:"2014-2016",
      points:[
        "+2 Science Stream (Biology and Math)"
      ],
    },
    {
      title:"Nepal College of Information Technology",
      company_name:"",
      icon:ncit,
      iconBg:"#383E56",
      date:"2018-2023",
      points:[
        "Bachelor in Computer Engineering"
      ],
    },
  ];
  
  const testimonials = [
    {
      testimonial:
        "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
      name: "Sara Lee",
      designation: "CFO",
      company: "Acme Co",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
        "I've never met a web developer who truly cares about their clients' success like Rick does.",
      name: "Chris Brown",
      designation: "COO",
      company: "DEF Corp",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
      name: "Lisa Wang",
      designation: "CTO",
      company: "456 Enterprises",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ];
  
  const projects = [
    {
      name: "JobMe",
      description:
        "MERN stack web app simplifying hiring household service providers, like carpenters, plumbers, and electricians, for enhanced user convenience.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "mongodb",
          color: "green-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
      ],
      image: jobmesite,
      source_code_link: "https://github.com/Yash-Yadav-0/Job_Me",
    },
    {
      name: "Hostel Finder",
      description:
        "MERN stack app streamlining hostel search with a user-friendly interface for effortless booking and accommodation discovery.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "mongodb",
          color: "green-text-gradient",
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
      ],
      image: jobit,
      source_code_link: "https://github.com/",
    },
    {
      name: "Hostel Recommendation System",
      description:
        "The Hostel Finder web app's Python-based recommendation system intelligently suggests hostels by considering factors such as proximity to selected hostels, price range, ratings, and available facilities for an enhanced user experience.",
      tags: [
        {
          name: "python",
          color: "blue-text-gradient",
        },
        {
          name: "machine learning",
          color: "green-text-gradient",
        },
      ],
      image: recommendhostel,
      source_code_link: "https://github.com/Yash-Yadav-0/Recommendation-Hostel",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };
  