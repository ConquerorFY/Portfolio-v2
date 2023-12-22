import React from "react";
import { projects, socialLinks } from "../constants";
import { Link } from "react-router-dom";
import { arrow } from "../assets/icons";
import CTA from "../components/CTA";
import useDarkModeContext from "../hooks/useDarkMode";

const Projects = () => {
    const { isDarkMode } = useDarkModeContext();

    return (
        <section className="max-container">
            <h1 className="head-text dark:text-white">
                My <span className="blue-gradient_text font-semibold drop-shadow">Projects</span>
            </h1>

            <div className="mt-5 flex flex-col gap-3 text-slate-500 dark:text-slate-200">
                <p>
                    I have undertaken various projects throughout the years of studying and working as a software engineer.
                    Most of them are open-source and available at my GitHub repository. Here are some of my projects:
                </p>
            </div>

            <div className="flex flex-wrap my-20 gap-16">
                {projects.map((project) => (
                    <div className="lg:w-[400px] w-full" key={project.name}>
                        <div className="block-container w-12 h-12">
                            <div className={`${isDarkMode ? 'btn-back-project-dark' : 'btn-back'} rounded-xl ${project.theme}`} />
                            <div className="btn-front rounded-xl flex justify-center items-center">
                                <img src={project.iconUrl} alt="Project Icon" className="w-1/2 h-1/2 object-contain" />
                            </div>
                        </div>

                        <div className="mt-5 flex flex-col">
                            <h4 className="text-2xl font-poppins font-semibold dark:text-white">
                                {project.name}
                            </h4>
                            <p className="mt-2 text-slate-500 dark:text-slate-200">
                                {project.description}
                            </p>
                            <div className="mt-5 flex items-center gap-2 font-poppins">
                                <Link to={project.link} target="_blank" rel="noopener noreferrer" className="font-semibold text-blue-600">
                                    Check it out
                                </Link>
                                <img src={arrow} alt="arrow" className="w-4 h-4 object-contain" />
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            <div className="mb-20 flex flex-col gap-3 text-slate-500 dark:text-slate-200 sm:w-max">
                <p>
                    ... and many more!
                </p>
                <p>
                    Follow my Github & LinkedIn account for more!
                </p>
                <div className="flex flex-row justify-evenly mt-3">
                    {
                        socialLinks.map((link, index) => (
                            <Link to={link.link} key={index} target="_blank" rel="noopener noreferrer">
                                <div className="block-container w-14 h-14">
                                    <div className={`${isDarkMode ? 'btn-back-dark' : 'btn-back'} rounded-xl`} />
                                    <div className={`${isDarkMode ? 'btn-front-dark' : 'btn-front'} rounded-xl flex justify-center items-center`}>
                                        <img src={link.iconUrl} alt={link.name} className="w-1/2 h-1/2 object-contain" />
                                    </div>
                                </div>
                            </Link>
                        ))
                    }
                </div>
            </div>

            <hr className="border-slate-200" />

            <CTA />
        </section >
    )
}

export default Projects;