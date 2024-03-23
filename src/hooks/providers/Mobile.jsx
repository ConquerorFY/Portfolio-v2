import { useState, useEffect } from "react";
import { MobileContext } from "../useMobile";

const MobileProvider = ({ children }) => {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const mediaQueryList = window.matchMedia('(max-width: 500px)');
        setIsMobile(mediaQueryList.matches);
    }, []);

    return (
        <MobileContext.Provider value={{ isMobile }}>
            {children}
        </MobileContext.Provider>
    );
}

export default MobileProvider;