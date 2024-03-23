import { acodes, blue, freelance, hilti, magik, sunway } from "../assets/images";
import {
    css,
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
    react,
    tailwindcss,
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
    nestjs,
    firebase,
    expo,
    django,
    flask,
    tensorflow,
    opencv,
    numpy,
    spring,
    socialmedia,
    game,
    player,
    extension,
    consultation,
    face,
    bootstrap,
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
        imageUrl: bootstrap,
        name: "Bootstrap",
        type: "Frontend",
    },
    {
        imageUrl: nextjs,
        name: "Next.js",
        type: ["Frontend", "Backend"],
    },
    {
        imageUrl: nestjs,
        name: "Nest.js",
        type: "Backend",
    },
    {
        imageUrl: firebase,
        name: "Firebase",
        type: ["Backend", "Database"]
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
        imageUrl: django,
        name: "Django",
        type: "Backend"
    },
    {
        imageUrl: flask,
        name: "Flask",
        type: "Backend"
    },
    {
        imageUrl: java,
        name: "Java",
        type: ["Backend", "Application"]
    },
    {
        imageUrl: spring,
        name: "Spring",
        type: "Backend",
    },
    {
        imageUrl: flutter,
        name: "Flutter",
        type: "Application"
    },
    {
        imageUrl: expo,
        name: "Expo",
        type: "Application"
    },
    {
        imageUrl: react,
        name: "React Native",
        type: "Application"
    },
    {
        imageUrl: mysql,
        name: "MySQL",
        type: "Database",
    },
    {
        imageUrl: tensorflow,
        name: "Tensorflow",
        type: "AI",
    },
    {
        imageUrl: opencv,
        name: "OpenCV",
        type: "AI"
    },
    {
        imageUrl: numpy,
        name: "Numpy",
        type: "AI"
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
        title: "Software Engineer (Internship)",
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
        title: "Software Engineer",
        company_name: "Magik Tech Sdn Bhd",
        icon: magik,
        iconBg: "#ffaaee",
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
        title: "Frontend Web Developer",
        company_name: "Acodes Technology Sdn Bhd",
        icon: acodes,
        iconBg: "#a2efa2",
        date: "Aug 2023 - Feb 2024",
        points: [
            "Worked on designing new web pages using React Next.js framework and Tailwind CSS",
            "Worked on integrating APIs using React Query",
            "Worked on handling data state management using Redux",
            "Helped in designing solution architecture for web systems"
        ],
    },
    {
        title: "Full Stack Developer (Freelance)",
        company_name: "Remote",
        icon: freelance,
        iconBg: "#ccffff",
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
        iconUrl: socialmedia,
        theme: 'btn-back-red',
        name: 'eTaman Application',
        description: 'A community-based social media application that is built using Flutter and Python Django frameworks.',
        link: 'https://github.com/ConquerorFY/APU-Final-Year-Project',
    },
    {
        iconUrl: game,
        theme: 'btn-back-green',
        name: 'Secret Santa Christmas Game',
        description: 'A simple web browser game that is developed in HTML, CSS and React.js framework.',
        link: 'https://github.com/ConquerorFY/Secret-Santa-Christmas-Game',
    },
    {
        iconUrl: extension,
        theme: 'btn-back-blue',
        name: 'ClassInsight Pro',
        description: "A browser extension that utilizes Azure's OpenAI API to provide real-time summary and notes regarding lecture videos on Microsoft Stream.",
        link: 'https://github.com/Diskordlit/ClassInsight',
    },
    {
        iconUrl: player,
        theme: 'btn-back-pink',
        name: 'Window ASCII Video Player',
        description: 'A video streamer that streams your computer window and displays them in ASCII-esque format.',
        link: 'https://github.com/ConquerorFY/Window-ASCII-Video-Player',
    },
    {
        iconUrl: consultation,
        theme: 'btn-back-black',
        name: 'HereForYou Consultation',
        description: 'A full-stack university consultation web system that is buit using HTML, CSS, JavaScript and PHP.',
        link: 'https://github.com/ConquerorFY/HereForYou-Consultation',
    },
    {
        iconUrl: face,
        theme: 'btn-back-yellow',
        name: 'Face Swapper',
        description: 'A web application that harnesses the power of computer vision to detect faces in photos and allows users to swap faces between different images.',
        link: 'https://github.com/ConquerorFY/Face-Swapper',
    }
];