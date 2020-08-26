import routesImg from './img/routes.jpg'
import budasImg from './img/buddhas.jpg'
import cvFile from './files/cv.pdf'


const studies = [
  {
    years: "2018 - 2019",
    title: "Computer Science, Core Studies Bsc",
    place: "Ben-Gurion University",
  },
  {
    years: "2019",
    title: "Full-Stack Development",
    place: "Coding Academy​",
  },
  {
    years: "2009 - 2013",
    title: "Mechanical Engineering Bsc​",
    place: "Ben-Gurion University​",
  },
];

const experiences = [
  {
    years: "2019 - 2020",
    title: "Web Developer",
    place: "MisterBit",
  },
  {
    years: "2012 - 2018",
    title: "Mechanical Engineer",
    place: "Bromine Compounds​",
  },
];

export const projects = [
  {
    url: routesImg,
    category: 'Front-End Development',
    title: 'Route Finder',
  },
  {
    url: budasImg,
    category: 'Front-End Development',
    title: 'Sorting Visualizer',
  },
];

export const resumeSections = [
  { 
    name: "Studies",
    content: studies, 
    delay: "100",
  }, 
  { 
    name: "Experience",
    content: experiences, 
    delay: "400",
  }
];

export const contacts = [
  {
    name: "Linkedin",
    link: "https://www.linkedin.com/in/alon-tal-52a07a40/",
  },
  {
    name: "@Mail",
    link: "mailto:alontal23@gmail.com",
  },
  {
    name: "CV",
    link: cvFile,
  },
];
