/* eslint-disable no-unused-vars */
// Skills Section Logo's
import htmlLogo from "./assets/tech_logo/html.png";
import cssLogo from "./assets/tech_logo/css.png";
import sassLogo from "./assets/tech_logo/sass.png";
import javascriptLogo from "./assets/tech_logo/javascript.png";
import reactjsLogo from "./assets/tech_logo/reactjs.png";
import angularLogo from "./assets/tech_logo/angular.png";
import reduxLogo from "./assets/tech_logo/redux.png";
import nextjsLogo from "./assets/tech_logo/nextjs.png";
import tailwindcssLogo from "./assets/tech_logo/tailwindcss.png";
import gsapLogo from "./assets/tech_logo/gsap.png";
import materialuiLogo from "./assets/tech_logo/materialui.png";
import bootstrapLogo from "./assets/tech_logo/bootstrap.png";
import springbootLogo from "./assets/tech_logo/springboot.png";
import nodejsLogo from "./assets/tech_logo/nodejs.png";
import expressjsLogo from "./assets/tech_logo/express.png";
import mysqlLogo from "./assets/tech_logo/mysql.png";
import mongodbLogo from "./assets/tech_logo/mongodb.png";
import firebaseLogo from "./assets/tech_logo/firebase.png";
import cLogo from "./assets/tech_logo/c.png";
import cppLogo from "./assets/tech_logo/cpp.png";
import javaLogo from "./assets/tech_logo/java.png";
import pythonLogo from "./assets/tech_logo/python.png";
import typescriptLogo from "./assets/tech_logo/typescript.png";
import gitLogo from "./assets/tech_logo/git.png";
import githubLogo from "./assets/tech_logo/github.png";
import vscodeLogo from "./assets/tech_logo/vscode.png";
import postmanLogo from "./assets/tech_logo/postman.png";
import mcLogo from "./assets/tech_logo/mc.png";
import figmaLogo from "./assets/tech_logo/figma.png";
import netlifyLogo from "./assets/tech_logo/netlify.png";
import vercelLogo from "./assets/tech_logo/vercel.png";
import postgreLogo from "./assets/tech_logo/postgre.png";
import csharpLogo from "./assets/tech_logo/csharp.png";

// Experience Section Logo's
import webverseLogo from "./assets/company_logo/webverse_logo.png";
import agcLogo from "./assets/company_logo/agc_logo.png";
import newtonschoolLogo from "./assets/company_logo/newtonschool_logo.png";

// Education Section Logo's
import amritLogo from "./assets/education_logo/amritlogo.png";
import hsmLogo from "./assets/education_logo/hsmlogo.png";
import arssLogo from "./assets/education_logo/arsslogo.png";

// Project Section Logo's
import fooddelLogo from "./assets/work_logo/fooddel.png";
import mernauthLogo from "./assets/work_logo/mernauth.png";
import clothdelLogo from "./assets/work_logo/clothestore.png"
import jobSeekLogo from "./assets/work_logo/jobportal.png"

export const SkillsInfo = [
  {
    title: "Frontend",
    skills: [
      { name: "HTML", logo: htmlLogo },
      { name: "CSS", logo: cssLogo },
      // { name: 'SASS', logo: sassLogo },
      { name: "JavaScript", logo: javascriptLogo },
      { name: "React JS", logo: reactjsLogo },
      // { name: 'Angular', logo: angularLogo },
      // { name: 'Redux', logo: reduxLogo },
      { name: "Next JS", logo: nextjsLogo },
      { name: "Tailwind CSS", logo: tailwindcssLogo },
      // { name: 'GSAP', logo: gsapLogo },
      { name: "Material UI", logo: materialuiLogo },
      { name: "Bootstrap", logo: bootstrapLogo },
    ],
  },
  {
    title: "Backend",
    skills: [
      // { name: 'Springboot', logo: springbootLogo },
      { name: "Node JS", logo: nodejsLogo },
      { name: "Express JS", logo: expressjsLogo },
      { name: "MySQL", logo: mysqlLogo },
      { name: "MongoDB", logo: mongodbLogo },
      // { name: 'Firebase', logo: firebaseLogo },
      { name: "PostgreSQL", logo: postgreLogo },
    ],
  },
  {
    title: "Languages",
    skills: [
      { name: "C", logo: cLogo },
      { name: "C++", logo: cppLogo },
      // { name: 'Java', logo: javaLogo },
      // { name: 'Python', logo: pythonLogo },
      { name: "C-Sharp", logo: csharpLogo },
      { name: "JavaScript", logo: javascriptLogo },
      // { name: 'TypeScript', logo: typescriptLogo },
    ],
  },
  {
    title: "Tools",
    skills: [
      { name: "Git", logo: gitLogo },
      { name: "GitHub", logo: githubLogo },
      { name: "VS Code", logo: vscodeLogo },
      { name: "Postman", logo: postmanLogo },
      // { name: 'Compass', logo: mcLogo },
      { name: "Vercel", logo: vercelLogo },
      // { name: 'Netlify', logo: netlifyLogo },
      { name: "Figma", logo: figmaLogo },
    ],
  },
];

export const experiences = [
  {
    id: 0,
    img: webverseLogo,
    role: "Fullstack Developer",
    company: "Webverse Digital",
    date: "April 2024 - Present",
    desc: "Developed dynamic and scalable web applications using the MERN stack, handling both frontend and backend development. Collaborated with cross-functional teams to build responsive UI, implement RESTful APIs, and optimize application performance in an agile environment.",
    skills: [
      "HTML",
      "CSS",
      "JavaScript",
      "React JS",
      "TypeScript",
      "Node JS",
      "Tailwind CSS",
      "MongoDb",
      "Redux",
      " Next Js",
    ],
  },
  {
    id: 1,
    img: agcLogo,
    role: "Fullstack Engineer",
    company: "Agumentik Group of Companies",
    date: "July 2023 - March 2024",
    desc: "Contributed to innovative projects as a Fullstack Engineer, leading both frontend and backend development using technologies such as HTML, CSS, JavaScript, PHP, SQL, Bootstrap, and ReactJS. Worked closely with the team to deliver responsive, high-performance web applications and improve user experience through seamless integration of various technologies.",
    skills: [
      "ReactJS",
      "Redux",
      "JavaScript",
      "Tailwind CSS",
      "HTML",
      "CSS",
      "SQL",
    ],
  },
  {
    id: 2,
    img: newtonschoolLogo,
    role: "Frontend Intern",
    company: "Newton School",
    date: "September 2021 - August 2022",
    desc: "Worked as a Frontend Developer Intern, designing and implementing scalable UI components and responsive websites using HTML, CSS, JavaScript, Bootstrap, and Material UI. Collaborated with the design team to translate wireframes and prototypes from Figma into interactive, user-friendly web pages.",
    skills: ["HTML", "CSS", "Javascript", "Bootstrap", "Figma", "Material UI"],
  },
];

export const education = [
  {
    id: 0,
    img: amritLogo,
    school: "Amrit Campus(ASCOL)",
    date: "May 2022 - running",
    grade: "84%",
    desc: "I am currently pursuing my Bachelor’s degree (B.Sc. CSIT) at Amrit Campus, affiliated with Tribhuvan University. Throughout my academic journey, I have developed a strong foundation in programming, software development, and core computer science concepts. Key courses I have studied include Data Structures and Algorithms, Object-Oriented Programming, Database Management Systems, Web Technology, Software Engineering, and Computer Networks.",
    degree: "B.Sc.CSIT",
  },
  {
    id: 1,
    img: hsmLogo,
    school: "Hetauda School of Management",
    date: "August 2019 - Sept 2021",
    grade: "3.64 GPA",
    desc: "I completed my +2 in Science from Hetauda School of Management (HSM), where I built a strong foundation in core subjects like Mathematics, Physics, and Computer Fundamentals. This early exposure to problem-solving and logical reasoning sparked my interest in technology.",
    degree: "I.Sc",
  },
  {
    id: 2,
    img: arssLogo,
    school: "Shree Aadhunik Rastriya Secondary School",
    date: "Apr 2016 - March 2019",
    grade: "3.75 GPA",
    desc: "I completed my class 10 education from Shree Aadhunik Rastriya Secondary School, Hetauda, under the NEB board",
    degree: "SEE",
  },
];

export const projects = [
  {
    id: 0,
    title: "JobSeek - A job portal website",
    description:
      "JobSeek is a modern job-hunting platform designed to bridge the gap between ambitious job seekers and forward-thinking employers. Whether you're a fresh graduate stepping into the workforce or a seasoned professional looking for your next big opportunity, JobSeek helps you discover, apply, and land your dream job with ease.",
    image: jobSeekLogo,
    tags: ["React JS", "NodeJS", "HTML", "CSS", "JavaScript", "ExpressJS","Shadcn UI",],
    github: "https://github.com/sujitbarnawal/JobPortal",
    webapp: "https://jobportal-frontend-p4dr.onrender.com/",
  },
  {
    id: 1,
    title: "MithoMitho - Food delivery Site",
    description:
      "MithoMitho, a food delivery application designed to connect users with delicious foods. MithoMitho aims to provide a user-friendly, efficient, and secure platform for customers to browse menus, place orders, and track deliveries seamlessly.",
    image: fooddelLogo,
    tags: [
      "HTML",
      "TailwindCSS",
      "JavaScript",
      "React JS",
      "Express JS",
      "Node JS",
    ],
    github: "https://github.com/sujitbarnawal/Food-Delivery",
    webapp: "https://mithomitho-frontend.onrender.com",
  },
  {
    id: 2,
    title: "Mern Authentication App",
    description:
      "Mern Authentication is a simple implementation of login,signup,forgot password and reset password using mern stack",
    image: mernauthLogo,
    tags: ["React JS", "NodeJS", "HTML", "CSS", "JavaScript", "ExpressJS"],
    github: "https://github.com/sujitbarnawal/MernAuthenticationApp",
    webapp: "https://mernauthenticationapp-frontend.onrender.com/",
  },
  {
    id: 3,
    title: "Fashion Nepal - Online Clothing Store",
    description:
      "FashionNepal, an online clothing delivery application designed to connect users with trending clothes. It aims to provide a user-friendly, efficient, and secure platform for customers to browse options, place orders, and track deliveries seamlessly.",
    image: clothdelLogo,
    tags: ["React JS", "NodeJS", "HTML", "CSS", "JavaScript", "ExpressJS"],
    github: "https://github.com/sujitbarnawal/FashionNepal",
    webapp: "https://fashionnepal-frontend.onrender.com/",
  },
];
