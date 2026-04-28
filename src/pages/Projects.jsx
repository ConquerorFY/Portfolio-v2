import React from 'react';
import { socialLinks, softwareProjects, networkProjects } from '@/constants';
import { Link } from 'react-router-dom';
import { CTA } from '@/components';
import useDarkMode from '@/hooks/useDarkMode';
import ProjectContainer from '@/components/ui/ProjectContainer';

const Projects = () => {
  const { isDarkMode } = useDarkMode();

  return (
    <section className='max-container'>
      <h1 className='head-text dark:text-white'>
        My{' '}
        <span className='blue-gradient_text font-semibold drop-shadow'>
          Projects
        </span>
      </h1>

      <div className='mt-5 flex flex-col gap-3 text-slate-500 dark:text-slate-200'>
        <p>
          Throughout the years, I have participated in various projects within
          both software and network engineering fields which I have learnt a lot
          from. Here are some of my projects:
        </p>
      </div>

      <ProjectContainer softwareProjects={softwareProjects} networkProjects={networkProjects} />

      <div className='mb-20 flex flex-col gap-3 text-slate-500 dark:text-slate-200 sm:w-max'>
        <p>... and many more!</p>
        <p>Follow my Github & LinkedIn account for more!</p>
        <div className='flex flex-row justify-evenly mt-3'>
          {socialLinks.map((link, index) => (
            <Link
              to={link.link}
              key={index}
              target='_blank'
              rel='noopener noreferrer'
            >
              <div className='block-container w-14 h-14'>
                <div
                  className={`${isDarkMode ? 'btn-back-dark' : 'btn-back'} rounded-xl`}
                />
                <div
                  className={`${isDarkMode ? 'btn-front-dark' : 'btn-front'} rounded-xl flex justify-center items-center`}
                >
                  <img
                    src={link.iconUrl}
                    alt={link.name}
                    className='w-1/2 h-1/2 object-contain'
                  />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>

      <hr className='border-slate-200' />

      <CTA />
    </section>
  );
};

export default Projects;
