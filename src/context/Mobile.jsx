import { useState, useEffect } from 'react';
import { MobileContext } from '../hooks/useMobile';

const MobileProvider = ({ children }) => {
  const [isMobile, setIsMobile] = useState(window.matchMedia('(max-width: 500px)').matches);

  return (
    <MobileContext.Provider value={{ isMobile }}>
      {children}
    </MobileContext.Provider>
  );
};

export default MobileProvider;
