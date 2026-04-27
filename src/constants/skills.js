import {
  css,
  express,
  git,
  github,
  html,
  javascript,
  mongodb,
  mui,
  nextjs,
  nodejs,
  react,
  tailwindcss,
  typescript,
  angular,
  vue,
  python,
  java,
  flutter,
  mysql,
  ubuntu,
  debian,
  kali,
  windows,
  gitlab,
  nestjs,
  firebase,
  expo,
  flask,
  bootstrap,
  androidstudio,
  euleros,
  postgresql,
  supabase,
  fastapi,
  sqlite,
  digitalocean,
  vercel,
  redis,
  docker,
  gemini,
  chatgpt,
  copilot,
  ollama,
  portainer,
  nginx,
  ansible,
  terraform,
} from '../assets/icons';
import { huawei } from '../assets/images';

export const skills = [
  // --- Networking ---
  {
    imageUrl: huawei,
    name: 'Switches (S & CE Series), AP, AC',
    type: 'Network',
  },

  // --- Frontend ---
  {
    imageUrl: react,
    name: 'React',
    type: 'Frontend',
  },
  {
    imageUrl: nextjs,
    name: 'Next.js',
    type: ['Frontend', 'Backend'],
  },
  {
    imageUrl: typescript,
    name: 'TypeScript',
    type: 'Frontend',
  },
  {
    imageUrl: javascript,
    name: 'JavaScript',
    type: 'Frontend',
  },
  {
    imageUrl: tailwindcss,
    name: 'Tailwind CSS',
    type: 'Frontend',
  },
  {
    imageUrl: html,
    name: 'HTML',
    type: 'Frontend',
  },
  {
    imageUrl: css,
    name: 'CSS',
    type: 'Frontend',
  },
  {
    imageUrl: angular,
    name: 'Angular',
    type: 'Frontend',
  },
  {
    imageUrl: vue,
    name: 'Vue',
    type: 'Frontend',
  },
  {
    imageUrl: mui,
    name: 'Material-UI',
    type: 'Frontend',
  },
  {
    imageUrl: bootstrap,
    name: 'Bootstrap',
    type: 'Frontend',
  },

  // --- Backend ---
  {
    imageUrl: nodejs,
    name: 'Node.js',
    type: 'Backend',
  },
  {
    imageUrl: nestjs,
    name: 'Nest.js',
    type: 'Backend',
  },
  {
    imageUrl: python,
    name: 'Python',
    type: ['Backend', 'Automation'],
  },
  {
    imageUrl: express,
    name: 'Express',
    type: 'Backend',
  },
  {
    imageUrl: fastapi,
    name: 'FastAPI',
    type: 'Backend',
  },
  {
    imageUrl: flask,
    name: 'Flask',
    type: 'Backend',
  },

  // --- Database ---
  {
    imageUrl: postgresql,
    name: 'PostgreSQL',
    type: 'Database',
  },
  {
    imageUrl: mysql,
    name: 'MySQL',
    type: 'Database',
  },
  {
    imageUrl: mongodb,
    name: 'MongoDB',
    type: 'Database',
  },
  {
    imageUrl: redis,
    name: 'Redis',
    type: 'Database',
  },
  {
    imageUrl: sqlite,
    name: 'SQLite',
    type: 'Database',
  },

  // --- Platforms & Services ---
  {
    imageUrl: vercel,
    name: 'Vercel',
    type: 'Platform',
  },
  {
    imageUrl: digitalocean,
    name: 'Digital Ocean',
    type: 'Platform',
  },
  {
    imageUrl: supabase,
    name: 'Supabase',
    type: 'Platform',
  },
  {
    imageUrl: firebase,
    name: 'Firebase',
    type: 'Platform',
  },
  {
    imageUrl: github,
    name: 'GitHub',
    type: 'Platform',
  },
  {
    imageUrl: gitlab,
    name: 'GitLab',
    type: 'Platform',
  },
  {
    imageUrl: docker,
    name: 'Docker Hub',
    type: 'Platform',
  },

  // --- Infrastructure ---
  {
    imageUrl: docker,
    name: 'Docker',
    type: 'Infrastructure',
  },
  {
    imageUrl: nginx,
    name: 'Nginx',
    type: 'Infrastructure',
  },
  {
    imageUrl: portainer,
    name: 'Portainer',
    type: 'Infrastructure',
  },

  // --- Automation ---
  {
    imageUrl: ansible,
    name: 'Ansible',
    type: 'Automation',
  },
  {
    imageUrl: terraform,
    name: 'Terraform',
    type: 'Automation',
  },

  // --- Artificial Intelligence ---
  {
    imageUrl: gemini,
    name: 'Gemini',
    type: 'AI',
  },
  {
    imageUrl: chatgpt,
    name: 'ChatGPT',
    type: 'AI',
  },
  {
    imageUrl: copilot,
    name: 'GitHub Copilot',
    type: 'AI',
  },
  {
    imageUrl: ollama,
    name: 'Ollama',
    type: 'AI',
  },

  // --- Application Development ---
  {
    imageUrl: react,
    name: 'React Native',
    type: 'Application',
  },
  {
    imageUrl: flutter,
    name: 'Flutter',
    type: 'Application',
  },
  {
    imageUrl: expo,
    name: 'Expo',
    type: 'Application',
  },
  {
    imageUrl: androidstudio,
    name: 'Android Studio',
    type: 'Application',
  },
  {
    imageUrl: java,
    name: 'Java',
    type: 'Application',
  },

  // --- OS ---
  {
    imageUrl: ubuntu,
    name: 'Ubuntu Linux',
    type: 'OS',
  },
  {
    imageUrl: debian,
    name: 'Debian Linux',
    type: 'OS',
  },
  {
    imageUrl: kali,
    name: 'Kali Linux',
    type: 'OS',
  },
  {
    imageUrl: euleros,
    name: 'Euler OS',
    type: 'OS',
  },
  {
    imageUrl: windows,
    name: 'Microsoft Windows',
    type: 'OS',
  },

  // --- Version Control ---
  {
    imageUrl: git,
    name: 'Git',
    type: 'Version Control',
  },
];
