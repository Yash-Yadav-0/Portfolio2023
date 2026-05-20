import {
    mobile,
    unityDev,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    tailwind,
    nodejs,
    mongodb,
    git,
    jobme,
    ncit,
    school,
    unity2,
    photoshop,
    jobmesite,
    recommendhostel,
    dotnet,
    csharp,
    hostelfindersite,
    aloilogo,
    rabbitmqlogo,
    postmanlogo,
    redislogo,
    sasslogo,
    fintechlogo,
    cleanarch,
    nginx,
    postgre
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Skill",
    },
    {
      id:"projectsNav",
      title:"Project",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];

  
  
  const services = [
    {
      title: "Backend Developer",
      icon: dotnet,
    },
    {
      title: "Frontend Developer",
      icon: web,
    },
    {
      title: "React Developer",
      icon: mobile,
    },
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
      name:"SASS",
      icon:sasslogo,
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
    },
    {
      name:"C#",
      icon:csharp,
    },
    {
      name:"RabbitMQ",
      icon: rabbitmqlogo,
    },
    {
      name:"Postman",
      icon:postmanlogo,
    },
    {
      name:"Redis",
      icon: redislogo,
    },
    {
      name:"Nginx",
      icon: nginx,
    },
    {
      name:"Postgre",
      icon: postgre,
    }
  ];
  
  const experiences = [
    {
      title: ".NET Developer",
      company_name: "Fintech Solutions Pvt. Ltd.",
      icon: fintechlogo,
      iconBg: "#f0ffff",
      date: "Jun 2024 - Present",
      points: [
        "Designed and shipped scalable ASP.NET Core REST APIs with validation, pagination, and standardized HTTP response contracts.",
        "Applied Clean Architecture across Controller, Application, Domain, and Infrastructure layers, using CQRS and foundational DDD to keep fintech services maintainable.",
        "Built backend services for international payout and remittance workflows, implementing idempotency keys, retry/fallback logic, and webhook & API Gateway callbacks.",
        "Modeled and tuned PostgreSQL schemas, indexes, and stored procedures, writing performance-critical SQL alongside Entity Framework Core.",
        "Implemented centralized exception handling, custom middleware, structured logging, input sanitization, RBAC, encryption, and audit logging to harden reliability and security.",
        "Built event-driven components on AWS (Lambda, SQS/SNS, API Gateway) with background workers for asynchronous processing.",
        "Owned CI/CD with GitHub Actions and Docker, deployed services on AWS, and supported production issues end-to-end - unit/integration testing, defect resolution, and on-call fixes.",
      ],
    },
    {
      title: ".NET Developer Intern",
      company_name: "Aloi Global",
      icon: aloilogo,
      iconBg: "#f0ffff",
      date: "Feb 2024 - May 2024",
      points: [
        "Built RESTful APIs in ASP.NET Core covering HTTP verbs, validation, and efficient data retrieval patterns.",
        "Contributed across the full SDLC - requirement analysis, design, development, code reviews, and testing - within an Agile/Scrum team.",
        "Practiced Git-based version control for collaborative development and clean task hand-offs.",
        "Supported cloud deployment workflows on AWS and Azure, focusing on hosting and environment configuration.",
      ],
    },
    {
      title: "React.js Developer",
      company_name: "",
      icon: jobme,
      iconBg: "#383E56",
      date: "Jun 2023 - Sep 2023",
      points: [
        "Developed and maintained web applications with React.js and modern JavaScript (ES6+).",
        "Collaborated with designers, product managers, and engineers to ship user-facing features.",
        "Implemented responsive UIs with cross-browser compatibility, leveraging libraries such as Material UI and Ant Design.",
        "Participated in code reviews, providing and receiving constructive feedback to maintain code quality.",
      ],
    },
    {
      title: "Unity Developer",
      company_name: "",
      icon: unity2,
      iconBg: "#b4c5d9",
      date: "Mar 2022 - Apr 2022",
      points: [
        "Designed and built immersive gameplay experiences with Unity3D and C#, applying modern programming principles.",
        "Implemented scalable game mechanics tuned for performance across different target platforms.",
        "Worked with 3D mathematics, physics, and graphics to create realistic and visually appealing environments.",
      ],
    },
    {
      title: "Nepal College of Information Technology",
      company_name: "",
      icon: ncit,
      iconBg: "#383E56",
      date: "2018 - 2023",
      points: [
        "Bachelor of Engineering in Computer Engineering (NCIT, Batch 2018).",
      ],
    },
    {
      title: "Capital College and Research Center",
      company_name: "",
      icon: school,
      iconBg: "#75c4b8",
      date: "2014 - 2016",
      points: [
        "+2 Science Stream (Biology and Math).",
      ],
    },
  ];
  
  const testimonials = [
    {
      testimonial:
        "!!      !!",
      name: "waiting!!",
      designation: "",
      company: "testimonies",
      image: "image",
    },
    // {
    //   testimonial:
    //     "I've never met a web developer who truly cares about their clients' success like Rick does.",
    //   name: "Chris Brown",
    //   designation: "COO",
    //   company: "DEF Corp",
    //   image: "https://randomuser.me/api/portraits/men/5.jpg",
    // },
    // {
    //   testimonial:
    //     "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    //   name: "Lisa Wang",
    //   designation: "CTO",
    //   company: "456 Enterprises",
    //   image: "https://randomuser.me/api/portraits/women/6.jpg",
    // },
  ];
  
  const projects = [
    {
      name: "Clean Architecture Project",
      description:"This project follows Clean Architecture principles to ensure a modular, maintainable, and testable codebase, integrating distinct layers for application logic, domain entities, and infrastructure services. It provides a robust structure for scalable development with .NET.",
      tags:[
        {
          name:"asp.Net",
          color:"blue-text-gradient",
        },
        {
          name:"postgreSql",
          color:"green-text-gradient",
        },
        {
          name:"hangfire",
          color:"pink-text-gradient",
        },
        {
          name:"Serilog",
          color:"blue-text-gradient",
        },
        {
          name:"fluentValidation",
          color:"green-text-gradient",
        },
      ],
      image: cleanarch,
      source_code_link:"https://github.com/Yash-Yadav-0/CleanArchitecture",
    },
    {
      name: "BankingSystem",
      description:"This project aims to develop a compact yet efficient bank system, providing essential functionalities. Built using  ASP.NET, C# and React this application delivers a robust platform for banking operations.[FullStack]",
      tags:[
        {
          name:` C#`,
          color:"pink-text-gradient",
        },
        {
          name:"asp.Net",
          color:"blue-text-gradient",
        },
        {
          name:"postgreSql",
          color:"green-text-gradient",
        },
        {
          name:"react",
          color:"blue-text-gradient",
        },
        {
          name:"Scss",
          color:"pink-text-gradient",
        },
      ],
      image: "",
      source_code_link:"https://github.com/Yash-Yadav-0/BankingSystem-UI",
    },
    {
      name: "ChatApp_SignalR",
      description:"real-time applications by building a cutting-edge chat application using .NET SignalR and React.[FullStack]",
      tags:[
        {
          name:` C#`,
          color:"pink-text-gradient",
        },
        {
          name:"asp.Net",
          color:"blue-text-gradient",
        },
        {
          name:"signalR",
          color:"pink-text-gradient",
        },
        {
          name:"react",
          color:"blue-text-gradient",
        },
        {
          name:"bootstrap",
          color:"green-text-gradient",
        },
        {
          name:"antdesign",
          color:"green-text-gradient",
        },
        
      ],
      image: "",
      source_code_link:"https://github.com/Yash-Yadav-0/ChatApp_Signalr",
    },
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
      image: hostelfindersite,
      source_code_link: "https://github.com/SahashChaudhary/HostelFinder",
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
  