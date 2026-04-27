import {
  VerticalTimeline,
  VerticalTimelineElement,
} from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { useEffect, useState } from 'react';
import { skills, experiences } from '../constants';
import { Carousel } from 'flowbite-react';
import { CTA } from '../components';
import { Tooltip } from 'flowbite-react';
import { resume } from '../assets/icons';
import SkillContainer from '../components/ui/SkillContainer';
import SkillCard from '../components/ui/SkillCard';
import useDarkMode from '../hooks/useDarkMode';
import useMobile from '../hooks/useMobile';

const About = () => {
  const [showcaseSkills, setShowcaseSkills] = useState(skills.reduce((mapping, skill) => {
    if (typeof skill.type === 'string') {
      skill.type = [skill.type];
    }
    for (let skillType of skill.type) {
      if (skillType in mapping) {
        mapping[skillType].push(skill);
      } else {
        mapping[skillType] = [skill];
      }
    }
    return mapping;
  }, {}));
  const { isDarkMode } = useDarkMode();
  const { isMobile } = useMobile();

  return (
    <section className='max-container'>
      <h1 className='head-text dark:text-white'>
        Hi there, I'm{' '}
        <span className='blue-gradient_text font-semibold drop-shadow'>
          Ryan Lim Fang Yung
        </span>
      </h1>

      <div className='mt-5 flex felx-col gap-3 text-slate-500 dark:text-slate-200'>
        <p>
          A dedicated software & network engineer that is driven by a passion
          for innovating, problem-solving, and continuous learning.
        </p>
      </div>
      <div
        className='mt-[15px] mb-[40px] download-btn'
        onClick={() => window.open(`${location.origin}/files/ryan-cv.pdf`, "Ryan's CV")}
        title='Click to view CV'
      >
        <img src={resume} alt='resume' className='w-[20px] mr-[10px]' />
        <span>My CV</span>
      </div>

      <div className='py-10 pb-5 flex flex-col'>
        <h3 className='subhead-text dark:text-white'>My Skills</h3>
        <SkillContainer>
          <SkillCard skillTitle='Frontend Development' skillList={showcaseSkills.Frontend} />
          <SkillCard skillTitle='Backend Development' skillList={showcaseSkills.Backend} />
          <SkillCard skillTitle='Application Development' skillList={showcaseSkills.Application} />
          <SkillCard skillTitle='Database' skillList={showcaseSkills.Database} />
          <SkillCard skillTitle='Platforms' skillList={showcaseSkills.Platform} />
          <SkillCard skillTitle='Version Control' skillList={showcaseSkills['Version Control']} />
          <SkillCard skillTitle='Infrastructure' skillList={showcaseSkills.Infrastructure} />
          <SkillCard skillTitle='Automation' skillList={showcaseSkills.Automation} />
          <SkillCard skillTitle='AI Tools' skillList={showcaseSkills.AI} />
          <SkillCard skillTitle='Operating Systems' skillList={showcaseSkills.OS} />
          <SkillCard skillTitle='Datacommunications' skillList={showcaseSkills.Network} />
        </SkillContainer>
      </div>

      <div className='py-16'>
        <h3 className='subhead-text dark:text-white'>Work Experience</h3>
        <div className='mt-5 flex felx-col gap-3 text-slate-500 dark:text-slate-200'>
          <p>
            I've worked with different individuals and companies these past
            few years. Here's the rundown:
          </p>
        </div>

        <div className='mt-12 flex dark:text-white'>
          <VerticalTimeline animate={!isMobile}>
            {experiences.map((experience) => (
              <VerticalTimelineElement
                key={experience.company_name}
                date={experience.date}
                icon={
                  <div className='flex justify-center items-center w-full h-full'>
                    <img
                      src={experience.icon}
                      alt={experience.company_name}
                      className='w-[60%] h-[60%] object-contain'
                    />
                  </div>
                }
                contentStyle={{
                  borderBottom: '8px',
                  borderStyle: 'solid',
                  borderBottomColor: experience.iconBg,
                  boxShadow: 'none',
                }}
                iconStyle={{
                  background: experience.iconBg,
                }}
              >
                <div>
                  <h3 className='text-black text-xl font-poppins font-semibold'>
                    {experience.title}
                  </h3>
                  <p
                    className='text-black-500 font-medium font-base'
                    style={{ margin: 0 }}
                  >
                    {experience.company_name}
                  </p>
                </div>

                <ul className='my-5 list-disc ml-5 space-y-2'>
                  {experience.points.map((point, index) => (
                    <li
                      key={`experience-point-${index}`}
                      className='text-black-500/50 font-normal pl-1 text-sm'
                    >
                      {point}
                    </li>
                  ))}
                </ul>
              </VerticalTimelineElement>
            ))}
          </VerticalTimeline>
        </div>
      </div>

      <hr className='border-slate-200' />
      <CTA />
    </section>
  );
};

export default About;
