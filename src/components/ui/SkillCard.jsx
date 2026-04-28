import { useRef, useEffect, useState } from 'react';
import { Tooltip } from 'flowbite-react';
import { arrowDown, arrowUp } from "@/assets/icons";
import useMobile from "../../hooks/useMobile";
import useDarkMode from "../../hooks/useDarkMode";

const SkillCard = ({ skillTitle, skillList }) => {
  const { isMobile } = useMobile();
  const { isDarkMode } = useDarkMode();
  const skillRef = useRef();
  const [isCollapse, setIsCollapse] = useState(false);

  useEffect(() => {
    if (isMobile && skillRef.current) {
      if (isCollapse)
        skillRef.current.style.display = 'none';
      else
        skillRef.current.style.display = '';
    }
  }, [isCollapse]);

  if (isMobile) {
    return <div className='flex flex-col h-full items-start justify-start px-5 mb-[50px]'>
      <div className="flex justify-between item-center cursor-pointer" onClick={() => setIsCollapse(!isCollapse)}>
        <h3 className='sub-subhead-text dark:text-white'>{skillTitle}</h3>
        {!isCollapse && <img src={arrowDown} alt='arrow-down' className="w-4 ml-2" />}
        {isCollapse && <img src={arrowUp} alt='arrow-up' className="w-4 ml-2" />}
      </div>
      <div ref={skillRef} className='mt-8 flex flex-wrap gap-12'>
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