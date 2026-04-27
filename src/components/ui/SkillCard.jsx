import useMobile from "../../hooks/useMobile";
import useDarkMode from "../../hooks/useDarkMode";
import { Tooltip } from 'flowbite-react';

const SkillCard = ({ skillTitle, skillList }) => {
  const { isMobile } = useMobile();
  const { isDarkMode } = useDarkMode();

  if (isMobile) {
    return <div className='flex flex-col h-full items-start justify-start px-5 mb-[50px]'>
      <h3 className='sub-subhead-text dark:text-white'>{skillTitle}</h3>
      <div className='mt-8 flex flex-wrap gap-12'>
        {skillList.map((skill, index) => (
          <Tooltip content={skill.name} key={index}>
            <div className='block-container w-20 h-20'>
              <div
                className={`${isDarkMode ? 'btn-back-dark' : 'btn-back'} rounded-xl`}
              />
              <div
                className={`${isDarkMode ? 'btn-front-dark' : 'btn-front'} rounded-xl flex justify-center items-center`}
              >
                <img
                  src={skill.imageUrl}
                  alt={skill.name}
                  className='w-1/2 h-1/2 object-contain'
                />
              </div>
            </div>
          </Tooltip>
        ))}
      </div>
    </div>
  }
  return <div className='flex flex-col h-full items-start justify-start px-5'>
    <h3 className='sub-subhead-text dark:text-white'>
      {skillTitle}
    </h3>
    <div className='mt-8 flex flex-wrap gap-12'>
      {skillList.map((skill, index) => (
        <Tooltip content={skill.name} key={index}>
          <div className='block-container w-20 h-20'>
            <div
              className={`${isDarkMode ? 'btn-back-dark' : 'btn-back'} rounded-xl`}
            />
            <div
              className={`${isDarkMode ? 'btn-front-dark' : 'btn-front'} rounded-xl flex justify-center items-center`}
            >
              <img
                src={skill.imageUrl}
                alt={skill.name}
                className='w-1/2 h-1/2 object-contain'
              />
            </div>
          </div>
        </Tooltip>
      ))}
    </div>
  </div>
}

export default SkillCard;