import {
  VerticalTimeline,
  VerticalTimelineElement,
} from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { useState } from 'react';
import { skills, experiences, certifications } from '../constants';
import { CTA } from '../components';
import { resume, arrow } from '../assets/icons';
import SkillContainer from '../components/ui/SkillContainer';
import SkillCard from '../components/ui/SkillCard';
import useDarkMode from '../hooks/useDarkMode';
import useMobile from '../hooks/useMobile';

const About = () => {
  const [showcaseSkills] = useState(
    skills.reduce((mapping, skill) => {
      const types = Array.isArray(skill.type) ? skill.type : [skill.type];
      for (const skillType of types) {
        if (skillType in mapping) {
          mapping[skillType].push(skill);
        } else {
          mapping[skillType] = [skill];
        }
      }
      return mapping;
    }, {})
  );
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

      <div className='mt-5 flex flex-col gap-3 text-slate-500 dark:text-slate-200 leading-relaxed text-base'>
        <p>
          I am a <strong>Cloud Network & DevOps Engineer</strong> with hands-on experience in enterprise networking, SDN automation (Huawei iMaster NCE Campus & Fabric), and modern cloud infrastructure (AWS, Terraform, Docker, Kubernetes, CI/CD). I have a proven track record delivering campus and data center migrations, complemented by strong full-stack software development capabilities.
        </p>
      </div>

      <div className='mt-6 mb-10 flex flex-wrap gap-4'>
        <a
          href='/files/Ryan-Lim-Resume-2026.pdf'
          target='_blank'
          rel='noopener noreferrer'
          className='download-btn'
          title='View & Download Resume'
        >
          <img src={resume} alt='resume' className='w-[20px] mr-[10px]' />
          <span>View Resume (PDF)</span>
        </a>
      </div>

      {/* --- Skills Section --- */}
      <div className='py-10 pb-5 flex flex-col'>
        <h3 className='subhead-text dark:text-white'>My Skills</h3>
        <p className='mt-3 text-slate-500 dark:text-slate-200'>
          Core technical expertise spanning enterprise networking, cloud platforms, DevOps automation,
          and full-stack software engineering:
        </p>
        <SkillContainer>
          <SkillCard
            skillTitle='Enterprise & DC Networking'
            skillList={showcaseSkills.Network || []}
          />
          <SkillCard
            skillTitle='Cloud, DevOps & Platform'
            skillList={showcaseSkills['Cloud, DevOps & Platform'] || []}
          />
          <SkillCard
            skillTitle='Infrastructure & Automation'
            skillList={showcaseSkills.Automation || []}
          />
          <SkillCard
            skillTitle='Operating Systems'
            skillList={showcaseSkills.OS || []}
          />
          <SkillCard
            skillTitle='Frontend Development'
            skillList={showcaseSkills.Frontend || []}
          />
          <SkillCard
            skillTitle='Backend Development'
            skillList={showcaseSkills.Backend || []}
          />
          <SkillCard
            skillTitle='Application Development'
            skillList={showcaseSkills.Application || []}
          />
          <SkillCard
            skillTitle='Database'
            skillList={showcaseSkills.Database || []}
          />
          <SkillCard
            skillTitle='Version Control'
            skillList={showcaseSkills['Version Control'] || []}
          />
          <SkillCard
            skillTitle='AI Tools'
            skillList={showcaseSkills.AI || []}
          />
        </SkillContainer>
      </div>

      {/* --- Work Experience Section --- */}
      <div className='py-12'>
        <h3 className='subhead-text dark:text-white'>Work Experience</h3>
        <div className='mt-3 text-slate-500 dark:text-slate-200'>
          <p>
            Demonstrated engineering experience across enterprise telecommunications, network infrastructure,
            and software solutions:
          </p>
        </div>

        <div className='mt-12 flex dark:text-white'>
          <VerticalTimeline animate={!isMobile}>
            {experiences.map((experience) => (
              <VerticalTimelineElement
                key={experience.company_name + experience.title}
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
                      className='text-black-500/70 font-normal pl-1 text-sm leading-relaxed'
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

      {/* --- Certifications Section (after Work Experience) --- */}
      <div className='py-12 flex flex-col'>
        <h3 className='subhead-text dark:text-white'>Certifications</h3>
        <div className='mt-3 text-slate-500 dark:text-slate-200'>
          <p>
            Recognized industry credentials validating cloud architecture,
            enterprise datacom, and network engineering:
          </p>
        </div>

        <div className='mt-8 grid grid-cols-1 md:grid-cols-2 gap-6'>
          {certifications.map((cert, index) => (
            <div
              key={index}
              className={`p-6 rounded-2xl border transition-all duration-300 flex flex-col justify-between ${
                isDarkMode
                  ? 'bg-slate-800/60 border-slate-700 shadow-lg'
                  : 'bg-white border-slate-200 shadow-md hover:shadow-lg'
              }`}
            >
              <div>
                <div className='flex justify-between items-start gap-4'>
                  <h4 className='text-lg font-poppins font-bold text-slate-900 dark:text-white'>
                    {cert.title}
                  </h4>
                  <span className='px-3 py-1 text-xs font-semibold rounded-full bg-blue-100 text-blue-800 dark:bg-blue-900/60 dark:text-blue-300 whitespace-nowrap'>
                    {cert.year}
                  </span>
                </div>
                <p className='mt-1 text-sm font-medium text-blue-600 dark:text-blue-400'>
                  {cert.issuer}
                </p>
                <p className='mt-3 text-sm text-slate-600 dark:text-slate-300 leading-relaxed'>
                  {cert.description}
                </p>
              </div>

              {cert.link && (
                <div className='mt-5 pt-3 border-t border-slate-100 dark:border-slate-700/60 flex items-center'>
                  <a
                    href={cert.link}
                    target='_blank'
                    rel='noopener noreferrer'
                    className='text-sm font-semibold text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300 flex items-center gap-1.5 transition-colors'
                  >
                    <span>{cert.linkText || 'Verify Credential'}</span>
                    <img src={arrow} alt='arrow' className='w-3.5 h-3.5 object-contain' />
                  </a>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      <hr className='border-slate-200 dark:border-slate-700' />
      <CTA />
    </section>
  );
};

export default About;
