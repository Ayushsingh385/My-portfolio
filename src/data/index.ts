/**
 * Portfolio Website Data
 * This file contains all the sample content for the portfolio.
 * Customize these values with your own information.
 */

import {
  Github,
  Linkedin,
  Mail,
  Palette,
  Database,
  Cloud,
  Figma,
} from 'lucide-react';

// Personal Information
export const personalInfo = {
  name: 'Ayush Kumar Singh',
  title: 'Aspiring Software Engineer',
  tagline: 'Crafting Digital Experiences with Code & Creativity',
  email: 'ayushkumarskb1005@gmail.com',
  phone: '+91 80101 66979',
  location: 'Ballarpur, Maharashtra, India',
  bio: `I am Ayush Kumar Singh, a recent Computer Science graduate with a strong foundation in programming and web development. I have hands-on experience in cloud migration, AI applications, and building web-based solutions.
  
My projects, including a cloud-based file storage application and an AI-powered legal management system, reflect my ability to deliver practical and innovative technology solutions. I am passionate about tackling complex challenges and constantly learning new technologies to build impactful digital experiences.`,
  resumeUrl: '/resume.pdf',
  avatar: '/avatar.jpg',
};

// Social Media Links
export const socialLinks = [
  {
    name: 'GitHub',
    url: 'https://github.com/Ayushsingh385',
    icon: Github,
    ariaLabel: 'Visit GitHub profile',
  },
  {
    name: 'LinkedIn',
    url: 'https://linkedin.com/in/ayush-kumar-1singh',
    icon: Linkedin,
    ariaLabel: 'Visit LinkedIn profile',
  },
  {
    name: 'Email',
    url: `mailto:${personalInfo.email}`,
    icon: Mail,
    ariaLabel: 'Send email',
  },
];

// Skills Data
export const skillsData = {
  categories: [
    {
      name: 'Languages',
      icon: Palette,
      skills: [
        { name: 'C / C++', level: 90 },
        { name: 'Python', level: 85 },
        { name: 'JavaScript', level: 88 },
        { name: 'Rust', level: 75 },
      ],
    },
    {
      name: 'Web Technologies',
      icon: Database,
      skills: [
        { name: 'React / HTML / CSS', level: 92 },
        { name: 'Node.js', level: 85 },
        { name: 'MySQL / SQLite', level: 80 },
        { name: 'GraphQL', level: 78 },
      ],
    },
    {
      name: 'Tools & Others',
      icon: Cloud,
      skills: [
        { name: 'Git / GitHub', level: 90 },
        { name: 'VS Code', level: 95 },
        { name: 'Apache', level: 70 },
        { name: 'Antigravity', level: 85 },
      ],
    },
  ],
  technologies: [
    { name: 'C', icon: '💻' },
    { name: 'C++', icon: '⚙️' },
    { name: 'Python', icon: '🐍' },
    { name: 'JavaScript', icon: '💛' },
    { name: 'HTML', icon: '📄' },
    { name: 'CSS', icon: '🎨' },
    { name: 'React', icon: '⚛️' },
    { name: 'Node.js', icon: '🟢' },
    { name: 'MySQL', icon: '🐬' },
    { name: 'SQLite', icon: '🗄️' },
    { name: 'Rust', icon: '🦀' },
    { name: 'GraphQL', icon: '◈' },
    { name: 'Apache', icon: '☁️' },
    { name: 'Git', icon: '🌿' },
    { name: 'GitHub', icon: '🐙' },
    { name: 'Antigravity', icon: '🚀' },
  ],
};

// Projects Data
export const projectsData = [
  {
    id: 1,
    title: 'Operating System Migration to the Cloud',
    description: 'Led the migration of an on-premise operating system to AWS using Docker containers and EC2 instances.',
    longDescription: 'Implemented a cloud-native architecture to enhance scalability and fault tolerance. Managed the transition of legacy systems to modern cloud infrastructure using AWS services, Dockerization, and automated deployment pipelines.',
    image: '/projects/cloud-migration.jpg',
    technologies: ['AWS', 'Docker', 'EC2', 'Cloud-native'],
    category: 'Cloud',
    liveUrl: '#',
    githubUrl: 'https://github.com/Ayushsingh385',
    featured: true,
  },
  {
    id: 2,
    title: 'AI-Powered Legal Case & Govt Management',
    description: 'Python-based NLP pipeline and AI chatbot for legal document summarization and real-time querying.',
    longDescription: 'Built a sophisticated NLP pipeline leveraging transformer models to automate the processing of complex legal documents. Integrated a conversational AI chatbot that allows officers to query key legal points and summaries in real time.',
    image: '/projects/legal-ai.jpg',
    technologies: ['Python', 'NLP', 'Transformers', 'PyTorch', 'FastAPI'],
    category: 'AI',
    liveUrl: '#',
    githubUrl: 'https://github.com/Ayushsingh385',
    featured: true,
  },
  {
    id: 3,
    title: 'Secure Cloud File Storage & Sharing',
    description: 'A secure web application for uploading, accessing, and sharing files online with high availability.',
    longDescription: 'Developed a full-stack cloud application that enables seamless file management. Focused on security, implementing encrypted storage and access controls to ensure user data remains private while allowing for easy sharing.',
    image: '/projects/file-cloud.jpg',
    technologies: ['React', 'Node.js', 'Cloud Storage', 'Secure API'],
    category: 'Web',
    liveUrl: '#',
    githubUrl: 'https://github.com/Ayushsingh385',
    featured: true,
  },
];

// Experience Data
export const experienceData = [
  {
    id: 1,
    type: 'education',
    title: 'Bachelor of Technology',
    company: 'Rajiv Gandhi College of Engineering, Research and Technology',
    location: 'Chandrapur, Maharashtra, India',
    startDate: '2022-11',
    endDate: '2026-07',
    description: 'Pursuing degree in Computer Science/Engineering with focus on software development and core engineering principles.',
    achievements: [],
    technologies: ['C', 'C++', 'Data Structures', 'Algorithms'],
  },
  {
    id: 2,
    type: 'education',
    title: 'Higher Secondary Education (XII, CBSE)',
    company: 'Bishop Januarius Memorial Carmel Academy',
    location: 'Chandrapur, Maharashtra, India',
    startDate: '2020-07',
    endDate: '2022-05',
    description: 'Completed XII grade with a focus on Physics, Chemistry, and Mathematics.',
    achievements: [],
    technologies: [],
  },
  {
    id: 3,
    type: 'education',
    title: 'Secondary Education (X, CBSE)',
    company: 'Montfort Hr. Sec. School',
    location: 'Bamni, Ballarpur, Maharashtra, India',
    startDate: '2013-04',
    endDate: '2020-03',
    description: 'Foundation schooling with consistent academic performance.',
    achievements: [],
    technologies: [],
  },
];

// Navigation Links
export const navLinks = [
  { name: 'Home', href: '#hero' },
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Projects', href: '#projects' },
  { name: 'Experience', href: '#experience' },
  { name: 'Contact', href: '#contact' },
];

// SEO Metadata
export const seoConfig = {
  title: 'Ayush Kumar Singh | Aspiring Software Engineer',
  description: 'Portfolio of Ayush Kumar Singh - Aspiring Software Engineer specializing in modern web technologies. Building beautiful, performant, and accessible web applications.',
  keywords: [
    'Full Stack Developer',
    'Web Developer',
    'React Developer',
    'Next.js',
    'TypeScript',
    'Node.js',
    'Portfolio',
    'Frontend Developer',
    'Backend Developer',
    'UI/UX Designer',
  ],
  author: personalInfo.name,
  siteUrl: 'https://ayushkumarsingh.dev',
  twitterHandle: '@ayush_kumar_singh',
  image: '/og-image.jpg',
};

// Filter options for projects
export const projectFilters = [
  { value: 'all', label: 'All Projects' },
  { value: 'Web', label: 'Web Development' },
  { value: 'AI', label: 'AI / ML' },
  { value: 'Mobile', label: 'Mobile Apps' },
  { value: 'IoT', label: 'IoT / Hardware' },
];