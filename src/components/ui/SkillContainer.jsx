import useMobile from "../../hooks/useMobile";
import { Carousel } from 'flowbite-react';

const SkillContainer = ({ children }) => {
  const { isMobile } = useMobile();

  if (isMobile) {
    return <div className='py-[30px]'>
      {children}
    </div>
  }
  return <div className='md:h-[330px] h-[600px] mt-12'>
    <Carousel theme={{
      indicators: {
        active: {
          off: 'bg-slate-300/50 hover:bg-slate-400 dark:bg-gray-600/50 dark:hover:bg-gray-600',
          on: 'bg-slate-400 dark:bg-gray-400',
        },
        base: 'h-3 w-3 rounded-full',
        wrapper: 'absolute bottom-5 left-1/2 flex -translate-x-1/2 space-x-3',
      },
      control: {
        base: 'inline-flex h-8 w-8 items-center justify-center rounded-full bg-slate-100/30 group-hover:bg-slate-200/50 group-focus:outline-none group-focus:ring-4 group-focus:ring-slate-100 dark:bg-gray-800/30 dark:group-hover:bg-gray-800/60 dark:group-focus:ring-gray-800/70 sm:h-10 sm:w-10',
        icon: 'h-5 w-5 text-black dark:text-white sm:h-6 sm:w-6',
      },
    }} slideInterval={5000}>
      {children}
    </Carousel>
  </div>
}

export default SkillContainer;