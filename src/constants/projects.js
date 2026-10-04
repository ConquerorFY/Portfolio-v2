import {
  socialmedia,
  game,
  extension,
  player,
  hr,
} from '@/assets/icons';
import { jtc, nus, psa } from '@/assets/images';

export const networkProjects = [
  {
    imgUrl: psa,
    name: 'The Port of Singapore Authority (PSA) International',
    link: 'https://www.singaporepsa.com/',
    role: 'Enterprise Network & SDN Engineer',
    description: [
      'Delivered campus network migration projects across Distribution and Access layers by transitioning legacy Cisco infrastructure to modern Huawei enterprise equipment.',
      'Implemented Huawei iMaster NCE Campus SDN solution for centralized automated provisioning and policy management.',
      'Delivered data center network migration from traditional three-tier architecture to high-capacity BGP-EVPN VXLAN Fabric orchestrated via Huawei iMaster NCE Fabric SDN solution.',
    ],
  },
  {
    imgUrl: nus,
    name: 'National University of Singapore (NUS)',
    link: 'https://nus.edu.sg/',
    role: 'Enterprise WLAN & Campus Infrastructure',
    description: [
      'Delivered WLAN network new-build projects for student hostels and guest hotels, provisioning resilient network infrastructure for university services.',
      'Delivered high-speed, high-bandwidth WiFi connectivity with low latency and comprehensive physical coverage.',
      'Implemented Huawei iMaster NCE Campus SDN solution to configure, monitor, and provision all campus enterprise hardware.',
    ],
  },
  {
    imgUrl: jtc,
    name: 'Jurong Town Corporation (JTC)',
    link: 'https://www.jtc.gov.sg/',
    role: 'Digital District Campus Network',
    description: [
      'Delivered large-scale campus network new-build project for the client’s state-of-the-art newly developed digital district site.',
      'Provisioned new enterprise network infrastructure designed to support diverse mission-critical digital services.',
      'Delivered high-speed WiFi network with extensive coverage, high bandwidth, and seamless roaming, powered by Huawei iMaster NCE Campus SDN management.',
    ],
  },
];

export const softwareProjects = [
  {
    iconUrl: player,
    theme: 'btn-back-pink',
    name: 'ConX Agency Management System',
    company: {
      name: 'ConX Agency',
      link: 'https://conx-group.webflow.io/',
    },
    description:
      'Architected and delivered full-stack internal admin management system utilizing Next.js, NestJS, and PostgreSQL. Provisioned cloud infrastructure (Supabase DB, Railway host) and automated CI/CD deployment pipelines.',
    link: 'https://conx-group.webflow.io/',
  },
  {
    iconUrl: game,
    theme: 'btn-back-green',
    name: 'Unilah Overseas Campus (UOC) Platform',
    company: {
      name: 'UniLah Sdn Bhd',
      link: 'https://myunilah.com/',
    },
    description:
      'Engineered core user interfaces utilizing React, TypeScript, and Tailwind CSS. Facilitated seamless client-server communication via comprehensive REST API integration with a NestJS and PostgreSQL backend.',
    link: 'https://uoc.myunilah.com/',
  },
  {
    iconUrl: socialmedia,
    theme: 'btn-back-red',
    company: {
      name: 'Acodes Technology Sdn Bhd',
      link: 'https://acodes.com.my/home/',
    },
    name: 'Moosan Durian Club',
    description:
      'Developed high-performance frontend interfaces using Next.js and Tailwind CSS. Orchestrated efficient backend data synchronization through robust API integration with React Query and Redux.',
    link: 'https://moosan.club/',
  },
  {
    iconUrl: extension,
    theme: 'btn-back-blue',
    name: 'OnLine Academy',
    company: {
      name: 'Line Pilates Asia',
      link: 'https://linepilates.asia/',
    },
    description:
      'Enhanced platform user experience by implementing frontend features and maintaining UI integrity. Optimized data visualization for information retrieved from a .NET backend.',
    link: 'https://on-lineacademy.com/main/index.asp',
  },
  {
    iconUrl: socialmedia,
    theme: 'btn-back-orange',
    name: 'Hotel Sentral Property Management System (PMS)',
    company: {
      name: 'Studio20',
      link: 'https://studio20.my/',
    },
    description:
      'Contributed to the full-stack development of an enterprise Property Management System. Utilized React and NestJS to engineer new features and resolve critical technical issues across the platform.',
    link: 'https://www.hotelsentral.com.my/',
  },
  {
    iconUrl: hr,
    theme: 'btn-back-yellow',
    name: 'AsiaPacTalents Admin Dashboard',
    company: {
      name: 'AsiaPacTalents',
      link: 'https://www.asiapactalents.com/',
    },
    description:
      'Designed and deployed automated WhatsApp chatbot solutions, leveraging third-party APIs such as Click4Wasap and PlanifyX. Oversaw system maintenance and performance optimization.',
    link: 'https://admin.mynew.jobs',
  },
];
