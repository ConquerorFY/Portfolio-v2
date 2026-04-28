import { arrow } from '@/assets/icons';
import { Link } from 'react-router-dom';
import useDarkMode from '@/hooks/useDarkMode';

export const SoftwareProjectCard = ({
  name,
  company,
  theme,
  description,
  iconUrl,
  link,
}) => {
  const { isDarkMode } = useDarkMode();

  return (
    <div className='lg:w-[400px] w-full' key={name}>
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
        <p className='mt-2 text-slate-500 dark:text-slate-200'>{description}</p>
        <div className='mt-5 flex items-center gap-2 font-poppins'>
          <Link
            to={link}
            target='_blank'
            rel='noopener noreferrer'
            className='font-semibold text-blue-600'
          >
            Check it out
          </Link>
          <img src={arrow} alt='arrow' className='w-4 h-4 object-contain' />
        </div>
      </div>
    </div>
  );
};

export const NetworkProjectCard = ({ name, link, imgUrl, description }) => {
  const { isDarkMode } = useDarkMode();

  return (
    <div className='w-full flex flex-col md:flex-row gap-5 my-5' key={name}>
      <div className='md:w-1/3 w-full flex justify-center items-center'>
        <Link
          to={link}
          target='_blank'
          rel='noopener noreferrer'
          className='w-full group'
        >
          <div
            className={`flex justify-center items-center p-6 rounded-3xl transition-all duration-300 ${
              isDarkMode
                ? 'bg-white border-2 border-white/10 shadow-2xl group-hover:shadow-[0_0_40px_rgba(255,255,255,0.1)]'
                : 'bg-white border-2 border-slate-100 shadow-xl group-hover:shadow-2xl'
            }`}
          >
            <img
              src={imgUrl}
              alt={name}
              className='w-full h-auto object-contain max-h-[180px] group-hover:scale-105 transition-transform duration-300'
            />
          </div>
        </Link>
      </div>

      <div className='md:w-2/3 w-full flex flex-col'>
        <h4 className='text-2xl font-poppins font-semibold dark:text-white'>
          {name}
        </h4>

        <ul className='my-5 list-disc ml-5 space-y-2'>
          {description.map((point, index) => (
            <li
              key={`description-point-${index}`}
              className='text-slate-500 dark:text-slate-200 font-normal pl-1 text-sm leading-relaxed'
            >
              {point}
            </li>
          ))}
        </ul>

        <div className='mt-auto flex items-center gap-2 font-poppins'>
          <Link
            to={link}
            target='_blank'
            rel='noopener noreferrer'
            className='font-semibold text-blue-600 hover:underline'
          >
            Visit Website
          </Link>
          <img src={arrow} alt='arrow' className='w-4 h-4 object-contain' />
        </div>
      </div>
    </div>
  );
};
