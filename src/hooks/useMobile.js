import { useContext, createContext } from 'react';

export const MobileContext = createContext();

const useMobile = () => {
  return useContext(MobileContext);
};

export default useMobile;
