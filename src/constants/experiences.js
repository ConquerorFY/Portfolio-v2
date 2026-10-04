import {
  acodes,
  blue,
  hilti,
  huawei,
  magik,
  sunway,
  unilah,
} from '../assets/images';

export const experiences = [
  {
    title: 'Network Engineer',
    company_name: 'Huawei International Pte Ltd',
    icon: huawei,
    iconBg: '#ffddaa',
    date: 'May 2024 - May 2026',
    points: [
      'Delivered enterprise post-sales engineering, staging tests, and Low-Level Network Design (LLD).',
      'Modernized data center networks to BGP-EVPN VXLAN fabrics orchestrated via Huawei iMaster NCE Fabric.',
      'Automated campus provisioning, access control, and telemetry using iMaster NCE Campus SDN controllers.',
      'Led critical vendor cutovers and migrations from legacy Cisco platforms to modern Huawei architectures.',
    ],
  },
  {
    title: 'Software Engineer',
    company_name: 'UniLah The Student App',
    icon: unilah,
    iconBg: '#088899',
    date: 'Nov 2023 - Jun 2024',
    points: [
      'Developed scalable backend REST APIs using NestJS, TypeScript, and PostgreSQL.',
      'Built core Overseas Campus platform and admin portal modules with React and Tailwind CSS.',
      'Enhanced mobile client features via React Native and conducted User Acceptance Testing (UAT).',
    ],
  },
  {
    title: 'Frontend Web Developer',
    company_name: 'Acodes Technology Sdn Bhd',
    icon: acodes,
    iconBg: '#a2efa2',
    date: 'Aug 2023 - Feb 2024',
    points: [
      'Built performant, responsive web interfaces with React, Next.js, and Tailwind CSS.',
      'Implemented efficient client-side caching and data synchronization using React Query.',
      'Managed complex application state across user workflows using Redux.',
    ],
  },
  {
    title: 'IT Intern',
    company_name: 'HILTI Asia IT Services Sdn Bhd',
    icon: hilti,
    iconBg: '#a2d2ff',
    date: 'Oct 2022 - Jan 2023',
    points: [
      'Developed automated API test suites using Java Spring Boot and Cucumber.',
      'Executed end-to-end integration and regression testing for internal enterprise services.',
      'Configured and monitored automated CI/CD testing pipelines on GitLab.',
    ],
  },
  {
    title: 'Software Engineer',
    company_name: 'Magik Tech Sdn Bhd',
    icon: magik,
    iconBg: '#ffaaee',
    date: 'Jul 2021 - Dec 2021',
    points: [
      'Developed responsive web applications with the Vue.js framework and PHP.',
      'Designed RESTful APIs to ensure robust data communication across system layers.',
      'Managed system deployments and resolved cross-browser compatibility issues.',
    ],
  },
  {
    title: 'Software Engineer Intern',
    company_name: 'Blue Ocean IT Sdn Bhd',
    icon: blue,
    iconBg: '#fbc3bc',
    date: 'May 2021 - Jul 2021',
    points: [
      'Built and enhanced modular frontend features using AngularJS.',
      'Developed and optimized backend RESTful APIs utilizing Python and Django.',
      'Administered and maintained relational databases using Microsoft SQL Server.',
    ],
  },
  {
    title: 'Lab Assistant',
    company_name: 'Sunway iLab',
    icon: sunway,
    iconBg: '#accbe1',
    date: 'March 2019 - April 2019',
    points: [
      'Provided technical support to students for laboratory projects and assignments.',
      'Guided students in the proper operation of specialized engineering laboratory equipment.',
      'Maintained lab hardware and workstations to ensure operational reliability.',
    ],
  },
];
