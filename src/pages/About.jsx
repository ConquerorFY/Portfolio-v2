import {
    VerticalTimeline,
    VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import React, { useEffect, useState } from "react";
import { skills, experiences } from "../constants";
import { Carousel } from 'flowbite-react';
import CTA from "../components/CTA";
import { Tooltip } from "flowbite-react";

const customControlTheme = {
    "indicators": {
        "active": {
            "off": "bg-slate-300/50 hover:bg-slate-400 dark:bg-gray-600/50 dark:hover:bg-gray-600",
            "on": "bg-slate-400 dark:bg-gray-400"
        },
        "base": "h-3 w-3 rounded-full",
        "wrapper": "absolute bottom-5 left-1/2 flex -translate-x-1/2 space-x-3"
    },
    "control": {
        "base": "inline-flex h-8 w-8 items-center justify-center rounded-full bg-slate-100/30 group-hover:bg-slate-200/50 group-focus:outline-none group-focus:ring-4 group-focus:ring-slate-100 dark:bg-gray-800/30 dark:group-hover:bg-gray-800/60 dark:group-focus:ring-gray-800/70 sm:h-10 sm:w-10",
        "icon": "h-5 w-5 text-black dark:text-white sm:h-6 sm:w-6"
    }
}

const About = () => {
    const [showcaseSkills, setShowcaseSkills] = useState({});

    useEffect(() => {
        let skillsCategorization = {};
        skills.forEach((skill) => {
            let skillTypes = [];
            if (typeof skill.type === "string") {
                skillTypes = [skill.type];
            } else if (typeof skill.type === "object") {
                skillTypes = skill.type;
            }

            for (let skillType of skillTypes) {
                if (skillType in skillsCategorization) {
                    skillsCategorization = {
                        ...skillsCategorization,
                        [skillType]: [...skillsCategorization[skillType], skill]
                    };
                } else {
                    skillsCategorization = { ...skillsCategorization, [skillType]: [skill] };
                }
            }

            setShowcaseSkills(skillsCategorization);
        });
    }, [skills])

    if (Object.keys(showcaseSkills).length > 0) {
        return (
            <section className="max-container">
                <h1 className="head-text dark:text-white">
                    Hello, I'm <span className="blue-gradient_text font-semibold drop-shadow">Ryan Lim Fang Yung</span>
                </h1>

                <div className="mt-5 flex felx-col gap-3 text-slate-500 dark:text-slate-200">
                    <p>
                        A software engineer based in Malaysia with great passionate for coding, problem-solving and eager to learn new technologies.
                    </p>
                </div>

                <div className="py-10 pb-5 flex flex-col">
                    <h3 className="subhead-text dark:text-white">My Skills</h3>

                    <div className="md:h-[300px] sm:h-[500px] h-[700px] mt-16">
                        <Carousel theme={customControlTheme} slideInterval={5000}>
                            <div className="flex flex-col h-full items-start justify-start px-5">
                                <h3 className="sub-subhead-text dark:text-white">Frontend</h3>
                                <div className="mt-8 flex flex-wrap gap-12">
                                    {showcaseSkills.Frontend.map((skill, index) => (
                                        <Tooltip content={skill.name} key={index}>
                                            <div className="block-container w-20 h-20">
                                                <div className="btn-back rounded-xl" />
                                                <div className="btn-front rounded-xl flex justify-center items-center">
                                                    <img src={skill.imageUrl} alt={skill.name} className="w-1/2 h-1/2 object-contain" />
                                                </div>
                                            </div>
                                        </Tooltip>
                                    ))}
                                </div>
                            </div>

                            <div className="flex flex-col h-full items-start justify-start px-5">
                                <h3 className="sub-subhead-text dark:text-white">Backend</h3>
                                <div className="mt-8 flex flex-wrap gap-12">
                                    {showcaseSkills.Backend.map((skill, index) => (
                                        <Tooltip content={skill.name} key={index}>
                                            <div className="block-container w-20 h-20">
                                                <div className="btn-back rounded-xl" />
                                                <div className="btn-front rounded-xl flex justify-center items-center">
                                                    <img src={skill.imageUrl} alt={skill.name} className="w-1/2 h-1/2 object-contain" />
                                                </div>
                                            </div>
                                        </Tooltip>
                                    ))}
                                </div>
                            </div>

                            <div className="flex flex-col h-full items-start justify-start px-5">
                                <h3 className="sub-subhead-text dark:text-white">Database</h3>
                                <div className="mt-8 flex flex-wrap gap-12">
                                    {showcaseSkills.Database.map((skill, index) => (
                                        <Tooltip content={skill.name} key={index}>
                                            <div className="block-container w-20 h-20">
                                                <div className="btn-back rounded-xl" />
                                                <div className="btn-front rounded-xl flex justify-center items-center">
                                                    <img src={skill.imageUrl} alt={skill.name} className="w-1/2 h-1/2 object-contain" />
                                                </div>
                                            </div>
                                        </Tooltip>
                                    ))}
                                </div>
                            </div>

                            <div className="flex flex-col h-full items-start justify-start px-5">
                                <h3 className="sub-subhead-text dark:text-white">Version Control</h3>
                                <div className="mt-8 flex flex-wrap gap-12">
                                    {showcaseSkills['Version Control'].map((skill, index) => (
                                        <Tooltip content={skill.name} key={index}>
                                            <div className="block-container w-20 h-20">
                                                <div className="btn-back rounded-xl" />
                                                <div className="btn-front rounded-xl flex justify-center items-center">
                                                    <img src={skill.imageUrl} alt={skill.name} className="w-1/2 h-1/2 object-contain" />
                                                </div>
                                            </div>
                                        </Tooltip>
                                    ))}
                                </div>
                            </div>

                            <div className="flex flex-col h-full items-start justify-start px-5">
                                <h3 className="sub-subhead-text dark:text-white">Mobile Application</h3>
                                <div className="mt-8 flex flex-wrap gap-12">
                                    {showcaseSkills.Application.map((skill, index) => (
                                        <Tooltip content={skill.name} key={index}>
                                            <div className="block-container w-20 h-20">
                                                <div className="btn-back rounded-xl" />
                                                <div className="btn-front rounded-xl flex justify-center items-center">
                                                    <img src={skill.imageUrl} alt={skill.name} className="w-1/2 h-1/2 object-contain" />
                                                </div>
                                            </div>
                                        </Tooltip>
                                    ))}
                                </div>
                            </div>

                            <div className="flex flex-col h-full items-start justify-start px-5">
                                <h3 className="sub-subhead-text dark:text-white">Artificial Intelligence</h3>
                                <div className="mt-8 flex flex-wrap gap-12">
                                    {showcaseSkills.AI.map((skill, index) => (
                                        <Tooltip content={skill.name} key={index}>
                                            <div className="block-container w-20 h-20">
                                                <div className="btn-back rounded-xl" />
                                                <div className="btn-front rounded-xl flex justify-center items-center">
                                                    <img src={skill.imageUrl} alt={skill.name} className="w-1/2 h-1/2 object-contain" />
                                                </div>
                                            </div>
                                        </Tooltip>
                                    ))}
                                </div>
                            </div>

                            <div className="flex flex-col h-full items-start justify-start px-5">
                                <h3 className="sub-subhead-text dark:text-white">Operating Systems</h3>
                                <div className="mt-8 flex flex-wrap gap-12">
                                    {showcaseSkills.OS.map((skill, index) => (
                                        <Tooltip content={skill.name} key={index}>
                                            <div className="block-container w-20 h-20">
                                                <div className="btn-back rounded-xl" />
                                                <div className="btn-front rounded-xl flex justify-center items-center">
                                                    <img src={skill.imageUrl} alt={skill.name} className="w-1/2 h-1/2 object-contain" />
                                                </div>
                                            </div>
                                        </Tooltip>
                                    ))}
                                </div>
                            </div>
                        </Carousel>
                    </div>
                </div>

                <div className="py-16">
                    <h3 className="subhead-text dark:text-white">Work Experience</h3>
                    <div className="mt-5 flex felx-col gap-3 text-slate-500 dark:text-slate-200">
                        <p>
                            I've worked with different individuals and companies these past few years.
                            Here's the rundown:
                        </p>
                    </div>

                    <div className="mt-12 flex dark:text-white">
                        <VerticalTimeline>
                            {experiences.map((experience) => (
                                <VerticalTimelineElement
                                    key={experience.company_name}
                                    date={experience.date}
                                    icon={
                                        <div className="flex justify-center items-center w-full h-full">
                                            <img src={experience.icon} alt={experience.company_name} className="w-[60%] h-[60%] object-contain" />
                                        </div>}
                                    contentStyle={{
                                        borderBottom: '8px',
                                        borderStyle: 'solid',
                                        borderBottomColor: experience.iconBg,
                                        boxShadow: 'none'
                                    }}
                                    iconStyle={{
                                        background: experience.iconBg
                                    }}
                                >
                                    <div>
                                        <h3 className="text-black text-xl font-poppins font-semibold">
                                            {experience.title}
                                        </h3>
                                        <p className="text-black-500 font-medium font-base" style={{ margin: 0 }}>
                                            {experience.company_name}
                                        </p>
                                    </div>

                                    <ul className="my-5 list-disc ml-5 space-y-2">
                                        {experience.points.map((point, index) => (
                                            <li key={`experience-point-${index}`} className="text-black-500/50 font-normal pl-1 text-sm">
                                                {point}
                                            </li>
                                        ))}
                                    </ul>
                                </VerticalTimelineElement>
                            ))}
                        </VerticalTimeline>
                    </div>
                </div>

                <hr className="border-slate-200" />
                <CTA />
            </section>
        )
    }
}

export default About;