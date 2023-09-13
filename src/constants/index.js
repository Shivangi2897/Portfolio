import {
  backend,
  css,
  docker,
  figma,
  frontend,
  git,
  html,
  java,
  javaText,
  javascript,
  javascriptText,
  komikult,
  leaderboard,
  math,
  movie,
  nodejs,
  nyeusi,
  prototyping,
  psvl,
  reactjs,
  sql,
  tw,
  typescript
} from '../assets';

export const navLinks = [
  {
    id: 'about',
    title: 'About',
  },
  {
    id: 'projects',
    title: 'Projects',
  },
  {
    id: 'contact',
    title: 'Contact',
  },
];

const services = [
  {
    title: 'Backend Developer',
    icon: backend,
  },
  {
    title: 'Frontend Developer',
    icon: frontend,
  },
  {
    title: 'Software Prototyping',
    icon: prototyping,
  },
];

const technologies = [
  {
    name: 'Java',
    icon: java,
    icon1: javaText,
  },
  {
    name: 'JavaScript',
    icon: javascript,
    icon1: javascriptText,
  },
  {
    name: 'TypeScript',
    icon: typescript,
    icon1: css,
  },
  {
    name: 'React JS',
    icon: reactjs,
    icon1: reactjs,
  },
  {
    name: 'Node JS',
    icon: nodejs,
    icon1: css,
  },
  {
    name: 'sql',
    icon: sql,
    icon1: sql,
  },
  {
    name: 'git',
    icon: git,
    icon1: git,
  },
  {
    name: 'figma',
    icon: figma,
    icon1: css,
  },

  {
    name: 'docker',
    icon: docker,
    icon1: docker,
  },
  {
    name: 'HTML 5',
    icon: html,
    icon1: html,
  },
  {
    name: 'CSS 3',
    icon: css,
    icon1: css,
  },
];

const experiences = [
  {
    title: 'Application Developer Consultant',
    company_name: 'Thoughtworks',
    icon: tw,
    iconBg: '#333333',
    date: 'June 2022 - Present',
  },
  {
    title: 'Software Engineer',
    company_name: 'Pratisthan Software Ventures Ltd (Startup)',
    icon: psvl,
    iconBg: '#333333',
    date: 'Aug 2021 - March 2022',
  },
];

const projects = [
  {
    id: 'project-1',
    name: 'SearchFilter',
    description: 'A filter based based functionality to search though inventory of available product',
    tags: [
      {
        name: 'react',
        color: 'blue-text-gradient',
      },
      {
        name: 'scss',
        color: 'green-text-gradient',
      },
      {
        name: 'mui',
        color: 'pink-text-gradient',
      },
    ],
    image: komikult,
    repo: 'https://github.com/Shivangip285/SearchFilter',
  },
  {
    id: 'project-2',
    name: 'Pizza Store',
    description:
      'A pizza store to with steps to prepare variety of pizza using decorator design pattern ',
    tags: [
      {
        name: 'Java',
        color: 'blue-text-gradient',
      },
      {
        name: 'restapi',
        color: 'green-text-gradient',
      }
    ],
    image: leaderboard,
    repo: 'https://github.com/Shivangip285/PizzaStore',
  },
  {
    id: 'project-3',
    name: 'Employee RoleCares',
    description: 'This is a employee targeted application to let employee avail all facility based on role like permanent, contractor and intern, using strategy design patttern ',
    tags: [
      {
        name: 'Java',
        color: 'blue-text-gradient',
      },
      {
        name: 'restapi',
        color: 'green-text-gradient',
      }
    ],
    image: math,
    repo: 'https://github.com/Shivangip285/EmployeeRole',
  },
  {
    id: 'project-4',
    name: 'Pub sub with GCP',
    description: `To make an event based pub sub application integrated with GCP`,
    tags: [
      {
        name: 'Java',
        color: 'blue-text-gradient',
      },
      {
        name: 'GCP',
        color: 'green-text-gradient',
      },
    ],
    image: movie,
    repo: 'https://github.com/Shivangip285/pubsub',
  },
  {
    id: 'project-5',
    name: 'Object counter',
    description:
      'A basic rest api application to follow all standard api pattern with TDD including unit, controller and integration test',
    tags: [
      {
        name: 'Java',
        color: 'blue-text-gradient',
      },
      {
        name: 'Mongo DB',
        color: 'green-text-gradient',
      },
    ],
    image: nyeusi,
    repo: 'https://github.com/Shivangip285/ObjectCounter',
  },
];

export { services, technologies, experiences, projects };
