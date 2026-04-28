import { arrow } from '../../assets/icons';
import { Link } from 'react-router-dom';
import useDarkMode from "../../hooks/useDarkMode";

const ProjectCard = ({ name, company, theme, description, iconUrl, link }) => {
  const { isDarkMode } = useDarkMode();

  return <div className='lg:w-[400px] w-full' key={name}>
    <div className='block-container w-12 h-12'>
      <div
        className={`${isDarkMode ? 'btn-back-project-dark' : 'btn-back'} rounded-xl ${theme}`}
      />
      <div className='btn-front rounded-xl flex justify-center items-center'>
        <img
          src={iconUrl}
          alt='Project Icon'
          className='w-1/2 h-1/2 object-contain'
        />
      </div>
    </div>

    <div className='mt-5 flex flex-col'>
      <h4 className='text-2xl font-poppins font-semibold dark:text-white'>
        {name}
      </h4>
      <Link to={company.link} target='_blank'>
        <h4 className='text-md font-poppins font-medium underline dark:text-white'>
          {company.name}
        </h4>
      </Link>
      <p className='mt-2 text-slate-500 dark:text-slate-200'>
        {description}
      </p>
      <div className='mt-5 flex items-center gap-2 font-poppins'>
        <Link
          to={link}
          target='_blank'
          rel='noopener noreferrer'
          className='font-semibold text-blue-600'
        >
          Check it out
        </Link>
        <img
          src={arrow}
          alt='arrow'
          className='w-4 h-4 object-contain'
        />
      </div>
    </div>
  </div>
}

export default ProjectCard;