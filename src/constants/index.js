import { blue, freelance, hilti, magik, sunway } from "../assets/images";
import {
    car,
    contact,
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
            "Worked on creating full stack web applications using Angular.js, Expree.js and MongoDB",
            "Worked on creating desktop applications using Java NetBeans",
            "Worked on creating systems using Bash",
            "Worked on creating Android applications using Android Studio and Flutter"
        ],
    },
];

export const socialLinks = [
    {
        name: 'Contact',
        iconUrl: contact,
        link: '/contact',
    },
    {
        name: 'GitHub',
        iconUrl: github,
        link: 'https://github.com/YourGitHubUsername',
    },
    {
        name: 'LinkedIn',
        iconUrl: linkedin,
        link: 'https://www.linkedin.com/in/YourLinkedInUsername',
    }
];

export const projects = [
    {
        iconUrl: pricewise,
        theme: 'btn-back-red',
        name: 'Amazon Price Tracker',
        description: 'Developed a web application that tracks and notifies users of price changes for products on Amazon, helping users find the best deals.',
        link: 'https://github.com/adrianhajdin/pricewise',
    },
    {
        iconUrl: threads,
        theme: 'btn-back-green',
        name: 'Full Stack Threads Clone',
        description: 'Created a full-stack replica of the popular discussion platform "Threads," enabling users to post and engage in threaded conversations.',
        link: 'https://github.com/adrianhajdin/threads',
    },
    {
        iconUrl: car,
        theme: 'btn-back-blue',
        name: 'Car Finding App',
        description: 'Designed and built a mobile app for finding and comparing cars on the market, streamlining the car-buying process.',
        link: 'https://github.com/adrianhajdin/project_next13_car_showcase',
    },
    {
        iconUrl: snapgram,
        theme: 'btn-back-pink',
        name: 'Full Stack Instagram Clone',
        description: 'Built a complete clone of Instagram, allowing users to share photos and connect with friends in a familiar social media environment.',
        link: 'https://github.com/adrianhajdin/social_media_app',
    },
    {
        iconUrl: estate,
        theme: 'btn-back-black',
        name: 'Real-Estate Application',
        description: 'Developed a web application for real estate listings, facilitating property searches and connecting buyers with sellers.',
        link: 'https://github.com/adrianhajdin/projects_realestate',
    },
    {
        iconUrl: summiz,
        theme: 'btn-back-yellow',
        name: 'AI Summarizer Application',
        description: 'App that leverages AI to automatically generate concise & informative summaries from lengthy text content, or blogs.',
        link: 'https://github.com/adrianhajdin/project_ai_summarizer',
    }
];