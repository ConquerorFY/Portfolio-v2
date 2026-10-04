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
  aws,
  kubernetes,
  wireshark,
  tcpdump,
  bash,
  argocd,
} from '../assets/icons';
import { huawei } from '../assets/images';

export const skills = [
  // ==========================================
  // --- Enterprise & DC Networking ---
  // ==========================================
  {
    imageUrl: huawei,
    name: 'Huawei S-Series & CE-Series Switches',
    type: 'Network',
  },
  {
    imageUrl: huawei,
    name: 'Huawei AirEngine AP & AC',
    type: 'Network',
  },
  {
    imageUrl: huawei,
    name: 'iMaster NCE',
    type: 'Network',
  },
  {
    imageUrl: wireshark,
    name: 'Wireshark',
    type: 'Network',
  },
  {
    imageUrl: tcpdump,
    name: 'tcpdump',
    type: 'Network',
  },

  // ==========================================
  // --- Cloud, DevOps & Platform ---
  // ==========================================
  {
    imageUrl: aws,
    name: 'AWS',
    type: 'Cloud, DevOps & Platform',
  },
  {
    imageUrl: terraform,
    name: 'Terraform',
    type: ['Cloud, DevOps & Platform', 'Automation'],
  },
  {
    imageUrl: docker,
    name: 'Docker',
    type: 'Cloud, DevOps & Platform',
  },
  {
    imageUrl: docker,
    name: 'Docker Hub',
    type: 'Cloud, DevOps & Platform',
  },
  {
    imageUrl: kubernetes,
    name: 'Kubernetes',
    type: 'Cloud, DevOps & Platform',
  },
  {
    imageUrl: argocd,
    name: 'ArgoCD',
    type: 'Cloud, DevOps & Platform',
  },
  {
    imageUrl: nginx,
    name: 'Nginx',
    type: 'Cloud, DevOps & Platform',
  },
  {
    imageUrl: portainer,
    name: 'Portainer',
    type: 'Cloud, DevOps & Platform',
  },
  {
    imageUrl: vercel,
    name: 'Vercel',
    type: 'Cloud, DevOps & Platform',
  },
  {
    imageUrl: digitalocean,
    name: 'Digital Ocean',
    type: 'Cloud, DevOps & Platform',
  },
  {
    imageUrl: supabase,
    name: 'Supabase',
    type: 'Cloud, DevOps & Platform',
  },
  {
    imageUrl: firebase,
    name: 'Firebase',
    type: 'Cloud, DevOps & Platform',
  },
  {
    imageUrl: github,
    name: 'GitHub',
    type: 'Cloud, DevOps & Platform',
  },
  {
    imageUrl: gitlab,
    name: 'GitLab',
    type: 'Cloud, DevOps & Platform',
  },

  // ==========================================
  // --- Automation ---
  // ==========================================
  {
    imageUrl: ansible,
    name: 'Ansible',
    type: 'Automation',
  },
  {
    imageUrl: bash,
    name: 'Bash',
    type: 'Automation',
  },
  {
    imageUrl: python,
    name: 'Python',
    type: ['Automation', 'Backend'],
  },

  // ==========================================
  // --- Operating Systems ---
  // ==========================================
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

  // ==========================================
  // --- Frontend (Original Content Kept) ---
  // ==========================================
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

  // ==========================================
  // --- Backend (Original Content Kept) ---
  // ==========================================
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

  // ==========================================
  // --- Database (Original Content Kept) ---
  // ==========================================
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

  // ==========================================
  // --- Version Control (Original Content Kept) ---
  // ==========================================
  {
    imageUrl: git,
    name: 'Git',
    type: 'Version Control',
  },

  // ==========================================
  // --- Artificial Intelligence (Original Content Kept) ---
  // ==========================================
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

  // ==========================================
  // --- Application Development (Original Content Kept) ---
  // ==========================================
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
];
