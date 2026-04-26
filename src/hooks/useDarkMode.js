import { useContext, createContext } from 'react';

export const DarkModeContext = createContext();

const useDarkMode = () => {
  return useContext(DarkModeContext);
};

export default useDarkMode;
