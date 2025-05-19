import { FaHome, FaUser, FaFolderOpen, FaEnvelopeOpen } from 'react-icons/fa';
import { RiBriefcase4Fill, RiGraduationCapFill } from 'react-icons/ri';

import skillsImg1 from './assets/html-logo.svg';
import skillsImg2 from './assets/css-logo.svg';
import skillsImg3 from './assets/javascript-logo.svg';
import skillsImg4 from './assets/react-logo.svg';
import skillsImg5 from './assets/tailwind-css-logo.svg';

import skillsImg6 from './assets/python-logo.svg';
import skillsImg7 from './assets/java-logo.svg';
import skillsImg8 from './assets/mysql-logo.svg';
import skillsImg9 from './assets/node-js-logo.svg';
import skillsImg10 from './assets/github-logo.svg';

import projectImg1 from './assets/project-1.jpg';
import projectImg2 from './assets/project-2.jpg';
import projectImg3 from './assets/project-3.jpg';
import projectImg4 from './assets/project-4.jpg';
import projectImg5 from './assets/project-5.jpg';

import Theme1 from './assets/red.png';
import Theme2 from './assets/blueviolet.png';
import Theme3 from './assets/blue.png';
import Theme4 from './assets/magenta.png';
import Theme5 from './assets/yellowgreen.png';
import Theme6 from './assets/orange.png';
import Theme7 from './assets/yellow.png';


export const links = [
  {
    name: 'Home',
    icon: <FaHome className='nav-icon' />,
    path: '/',
  },

  {
    name: 'About',
    icon: <FaUser className='nav-icon' />,
    path: '/about',
  },

  {
    name: 'Portfolio',
    icon: <FaFolderOpen className='nav-icon' />,
    path: '/portfolio',
  },

  {
    name: 'Contact',
    icon: <FaEnvelopeOpen className='nav-icon' />,
    path: '/contact',
  },
];

export const personalInfo = [
  {
    title: 'First Name : ',
    description: 'Selvam',
  },

  {
    title: 'Last Name : ',
    description: 'Gopal',
  },

  {
    title: 'DOB : ',
    description: '10.02.2000',
  },

  {
    title: 'Age : ',
    description: '25 Years',
  },

  {
    title: 'Nationality : ',
    description: 'Indian',
  },

  {
    title: 'Address : ',
    description: 'Chennai',
  },

  {
    title: 'Phone : ',
    description: '+91 6383178946',
  },

  {
    title: 'Email : ',
    description: 'selvamgopal.1023@gmail.com',
  },

  {
    title: 'Instagram : ',
    description: 'selvam_gopal_',
  },

  {
    title: 'Langages : ',
    description: 'Tamil, English',
  },
];

export const skill = [
  {
    id: 1,
    img: skillsImg1,
    title: 'HTML',
    level: 'Intermediate',
    category: 'frontend',
  },

  {
    id: 2,
    img: skillsImg2,
    title: 'CSS',
    level: 'Advanced',
    category: 'frontend',
  },

  {
    id: 3,
    img: skillsImg3,
    title: 'JavaScript',
    level: 'Intermediate',
    category: 'frontend',
  },

  {
    id: 4,
    img: skillsImg4,
    title: 'React',
    level: 'Basic',
    category: 'frontend',
  },

  {
    id: 5,
    img: skillsImg5,
    title: 'Tailwind',
    level: 'Intermediate',
    category: 'frontend',
  },

  {
    id: 6,
    img: skillsImg6,
    title: 'Python',
    level: 'Advanced',
    category: 'backend',
  },

  {
    id: 7,
    img: skillsImg7,
    title: 'Java',
    level: 'Basic',
    category: 'backend',
  },

  {
    id: 8,
    img: skillsImg8,
    title: 'Mysql',
    level: 'Basic',
    category: 'backend',
  },

  {
    id: 9,
    img: skillsImg9,
    title: 'Node.js',
    level: 'Basic',
    category: 'backend',
  },

  {
    id: 10,
    img: skillsImg10,
    title: 'Github',
    level: 'Intermediate',
    category: 'backend',
  },
];

export const resume = [
  {
    id: 1,
    category: 'experience',
    icon: <RiBriefcase4Fill />,
    year: '2022 - 2024',
    title: 'Senior Process Executive <span> Cognizant </span>',
    desc: 'Worked as a Senior Process Executive handling end-to-end process operations with a focus on accuracy, efficiency, and SLA compliance.',
  },

  {
    id: 2,
    category: 'experience',
    icon: <RiGraduationCapFill />,
    year: '2025',
    title: 'Web Development Course <span> Fita Academy </span>',
    desc: 'Completed a comprehensive Java Full Stack Web Development course covering front-end (HTML, CSS, JavaScript, React) and back-end (Java, Spring Boot, MySQL) technologies.',
  },

  {
    id: 3,
    category: 'education',
    icon: <RiGraduationCapFill />,
    year: '2024',
    title: 'Master Degree <span> Madras University </span>',
    desc: 'Completed Master of Computer Application (MCA) in Madras University with specialization in software development, data structures, and system design.',
  },

  {
    id: 4,
    category: 'education',
    icon: <RiGraduationCapFill />,
    year: '2021',
    title: 'Bachelor Degree <span> Madras University </span>',
    desc: 'Completed Bachelor of Computer Applications (BCA) in St. Thomas College of Arts and Science with a strong foundation in programming, database management, and computer networks.',
  },
];

export const portfolio = [
  {
    id: 1,
    img: projectImg1,
    title: 'Coffee Website',
    description:
      'Short description of the project that was carried out in this portfolio.',
    skills: [skillsImg1, skillsImg2, skillsImg3],
    link: '',
  },

  {
    id: 2,
    img: projectImg2,
    title: 'PetShop Website',
    description:
      'Short description of the project that was carried out in this portfolio.',
    skills: [skillsImg1, skillsImg2, skillsImg3],
    link: '',
  },

  {
    id: 3,
    img: projectImg3,
    title: 'Food Product Design',
    description:
      'Short description of the project that was carried out in this portfolio.',
    skills: [skillsImg4, skillsImg5],
    link: '',
  },

  {
    id: 4,
    img: projectImg4,
    title: 'Restaurant Landing Page',
    description:
      'Short description of the project that was carried out in this portfolio.',
    skills: [skillsImg4, skillsImg5],
    link: '',
  },

  {
    id: 5,
    img: projectImg5,
    title: 'Construction Landing Page',
    description:
      'Short description of the project that was carried out in this portfolio.',
    skills: [skillsImg1, skillsImg2, skillsImg3],
    link: '',
  },
];

export const themes = [
  {
    img: Theme1,
    hue: '4',
  },

  {
    img: Theme2,
    hue: '271',
  },

  {
    img: Theme3,
    hue: '225',
  },

  {
    img: Theme4,
    hue: '339',
  },

  {
    img: Theme5,
    hue: '80',
  },

  {
    img: Theme6,
    hue: '19',
  },

  {
    img: Theme7,
    hue: '42',
  },
];

