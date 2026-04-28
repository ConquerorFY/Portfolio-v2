import {
  socialmedia,
  game,
  extension,
  player,
  hr,
  // consultation,
  // face,
} from '@/assets/icons';
import { jtc, nus, psa } from '@/assets/images';

export const softwareProjects = [
  {
    iconUrl: socialmedia,
    theme: 'btn-back-red',
    company: {
      name: 'Acodes Technology Sdn Bhd',
      link: 'https://acodes.com.my/home/',
    },
    name: 'Moosan Durian Club',
    description:
      'Developed high-performance frontend interfaces using Next.js, HTML, and CSS. Orchestrated efficient backend data synchronization through robust API integration with React Query.',
    link: 'https://moosan.club/',
  },
  {
    iconUrl: game,
    theme: 'btn-back-green',
    name: 'Unilah Overseas Campus (UOC)',
    company: {
      name: 'UniLah Sdn Bhd',
      link: 'https://myunilah.com/',
    },
    description:
      'Engineered intuitive user interfaces utilizing React, HTML, and CSS. Facilitated seamless client-server communication via comprehensive API integration with a NestJS backend.',
    link: 'https://uoc.myunilah.com/',
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
      'Enhanced platform user experience by implementing sophisticated frontend features and maintaining UI integrity. Optimized data visualization for information retrieved from a .NET backend.',
    link: 'https://on-lineacademy.com/main/index.asp',
  },
  {
    iconUrl: player,
    theme: 'btn-back-pink',
    name: 'ConX Agency Management System',
    company: {
      name: 'ConX Agency',
      link: 'https://conx-group.webflow.io/',
    },
    description:
      'Served as Technical Lead, architecting and managing a scalable backend infrastructure using NestJS and Supabase. Spearheaded end-to-end integration of complex API endpoints with the frontend application.',
    link: 'https://conx-group.webflow.io/',
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
      'Designed and deployed automated WhatsApp chatbot solutions, leveraging third-party APIs such as Click4Wasap and PlanifyX. Oversaw system maintenance and performance optimization through rigorous bug resolution.',
    link: 'https://admin.mynew.jobs',
  },
];

export const networkProjects = [
  {
    imgUrl: psa,
    name: 'The Port of Singapore Authority (PSA) International',
    link: 'https://www.singaporepsa.com/',
    description: [
      'Spearheaded campus network migration initiatives across Distribution and Access layers, transitioning legacy Cisco infrastructure to high-performance Huawei equipment.',
      'Orchestrated the deployment of Huawei iMaster NCE Campus and Fabric SDN solutions to modernize data center architecture using BGP EVPN.',
    ],
  },
  {
    imgUrl: nus,
    name: 'National University of Singapore (NUS)',
    link: 'https://nus.edu.sg/',
    description: [
      'Managed end-to-end WLAN infrastructure projects for student and guest accommodations, delivering high-capacity, low-latency wireless connectivity.',
      'Leveraged Huawei iMaster NCE Campus SDN for centralized network management and automated provisioning of enterprise-grade hardware.',
    ],
  },
  {
    imgUrl: jtc,
    name: 'Jurong Town Corporation (JTC)',
    link: 'https://www.jtc.gov.sg/',
    description: [
      'Led large-scale campus network implementations for a state-of-the-art digital district, ensuring seamless roaming and high-bandwidth coverage.',
      'Integrated advanced SDN solutions to streamline network operations and service delivery across the campus ecosystem.',
    ],
  },
];
