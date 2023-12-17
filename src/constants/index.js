import { blue, freelance, hilti, magik, sunway } from "../assets/images";
import {
    car,
    css,
    estate,
    express,
    git,
    github,
    html,
    javascript,
    linkedin,
    mongodb,
    mui,
    nextjs,
    nodejs,
    pricewise,
    react,
    snapgram,
    summiz,
    tailwindcss,
    threads,
    typescript,
    angular,
    vue,
    php,
    python,
    java,
    flutter,
    mysql,
    ubuntu,
    debian,
    kali,
    windows,
    gitlab,
} from "../assets/icons";

export const skills = [
    {
        imageUrl: css,
        name: "CSS",
        type: "Frontend",
    },
    {
        imageUrl: express,
        name: "Express",
        type: "Backend",
    },
    {
        imageUrl: git,
        name: "Git",
        type: "Version Control",
    },
    {
        imageUrl: github,
        name: "GitHub",
        type: "Version Control",
    },
    {
        imageUrl: gitlab,
        name: "GitLab",
        type: "Version Control",
    },
    {
        imageUrl: html,
        name: "HTML",
        type: "Frontend",
    },
    {
        imageUrl: javascript,
        name: "JavaScript",
        type: "Frontend",
    },
    {
        imageUrl: mongodb,
        name: "MongoDB",
        type: "Database",
    },
    {
        imageUrl: mui,
        name: "Material-UI",
        type: "Frontend",
    },
    {
        imageUrl: nextjs,
        name: "Next.js",
        type: "Frontend",
    },
    {
        imageUrl: nodejs,
        name: "Node.js",
        type: "Backend",
    },
    {
        imageUrl: react,
        name: "React",
        type: "Frontend",
    },
    {
        imageUrl: tailwindcss,
        name: "Tailwind CSS",
        type: "Frontend",
    },
    {
        imageUrl: typescript,
        name: "TypeScript",
        type: "Frontend",
    },
    {
        imageUrl: angular,
        name: "Angular",
        type: "Frontend"
    },
    {
        imageUrl: vue,
        name: "Vue",
        type: "Frontend"
    },
    {
        imageUrl: php,
        name: "PHP",
        type: "Backend"
    },
    {
        imageUrl: python,
        name: "Python",
        type: ["Backend", "AI"]
    },
    {
        imageUrl: java,
        name: "Java",
        type: ["Backend", "Application"]
    },
    {
        imageUrl: flutter,
        name: "Flutter",
        type: "Application"
    },
    {
        imageUrl: mysql,
        name: "MySQL",
        type: "Database",
    },
    {
        imageUrl: debian,
        name: "Debian Linux",
        type: "OS",
    },
    {
        imageUrl: ubuntu,
        name: "Ubuntu Linux",
        type: "OS",
    },
    {
        imageUrl: kali,
        name: "Kali Linux",
        type: "OS",
    },
    {
        imageUrl: windows,
        name: "Microsoft Windows",
        type: "OS",
    },
];

export const experiences = [
    {
        title: "Lab Assistant",
        company_name: "Sunway iLab",
        icon: sunway,
        iconBg: "#accbe1",
        date: "March 2019 - April 2019",
        points: [
            "Help out students in their lab projects",
            "Assist students in using the different lab equipments",
            "Clean up and arrange the lab environment"
        ],
    },
    {
        title: "Software Engineer Intern",
        company_name: "Blue Ocean IT Sdn Bhd",
        icon: blue,
        iconBg: "#fbc3bc",
        date: "May 2021 - Jul 2021",
        points: [
            "Fix UI issues on websites using Angular JS",
            "Implement new frontend features and functions based on different user requirements",
            "Create APIs for data communication between frontend and backend",
            "Modify backend server processing logic using Python Django framework",
            "Manage website database using SQL Server"
        ],
    },
    {
        title: "Software Developer",
        company_name: "Magik Tech Sdn Bhd",
        icon: magik,
        iconBg: "#ffffff",
        date: "Jul 2021 - Dec 2021",
        points: [
            "Create web pages for systems using Vue.js",
            "Fix responsive issues on websites for mobile devices and tablets",
            "Create API for data communication between frontend and backend",
            "Modify backend server processing logic using PHP",
            "Deploy web systems to production"
        ],
    },
    {
        title: "IT Intern",
        company_name: "HILTI Asia IT Services Sdn Bhd",
        icon: hilti,
        iconBg: "#a2d2ff",
        date: "Oct 2022 - Jan 2023",
        points: [
            "Perform different test operations on APIs developed by other team members",
            "Create an automated test suite for the development team using Java Spring Boot and Cucumber Framework",
            "Manage CI/CD operations on GitLab for the automated test suite"
        ],
    },
    {
        title: "Freelance Programmer / Software Developer",
        company_name: "Remote",
        icon: freelance,
        iconBg: "#b123af",
        date: "Mar 2022 - Now",
        points: [
            "Worked on creating web pages in React Next.js framework based on different wireframe designs",
            "Worked on creating full stack web applications using Angular.js, Express.js and MongoDB",
            "Worked on creating desktop applications using Java NetBeans",
            "Worked on creating systems using Bash",
            "Worked on creating Android applications using Android Studio and Flutter"
        ],
    },
];

// {
//     name: 'Contact',
//     iconUrl: contact,
//     link: '/contact',
// },

export const socialLinks = [
    {
        name: 'GitHub',
        iconUrl: github,
        link: 'https://github.com/ConquerorFY',
    },
    {
        name: 'LinkedIn',
        iconUrl: linkedin,
        link: 'https://www.linkedin.com/in/ryan-lim-207412207/',
    }
];

export const projects = [
    {
        iconUrl: pricewise,
        theme: 'btn-back-red',
        name: 'eTaman Application',
        description: 'A community-based social media application that is built using Flutter and Python Django frameworks.',
        link: 'https://github.com/ConquerorFY/APU-Final-Year-Project',
    },
    {
        iconUrl: threads,
        theme: 'btn-back-green',
        name: 'Secret Santa Christmas Game',
        description: 'A simple web browser game that is developed in HTML, CSS and React.js framework.',
        link: 'https://github.com/ConquerorFY/Secret-Santa-Christmas-Game',
    },
    {
        iconUrl: car,
        theme: 'btn-back-blue',
        name: 'ClassInsight Pro',
        description: "A browser extension that utilizes Azure's OpenAI API to provide real-time summary and notes regarding lecture videos on Microsoft Stream.",
        link: 'https://github.com/Diskordlit/ClassInsight',
    },
    {
        iconUrl: snapgram,
        theme: 'btn-back-pink',
        name: 'AHHASC Hostel Management System',
        description: 'A hostel management system that is built using Java NetBeans.',
        link: 'https://github.com/ConquerorFY/AHHASC',
    },
    {
        iconUrl: estate,
        theme: 'btn-back-black',
        name: 'HereForYou-Consultation',
        description: 'A full-stack university consultation web system that is buit using HTML, CSS, JavaScript and PHP',
        link: 'https://github.com/ConquerorFY/HereForYou-Consultation',
    },
    {
        iconUrl: summiz,
        theme: 'btn-back-yellow',
        name: 'Lab Management System',
        description: 'A lab management system that is built in Bash Shell Scripting language.',
        link: 'https://github.com/ConquerorFY/Lab-Management-System',
    }
];