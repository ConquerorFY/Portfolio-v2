import { useContext, createContext } from "react";

export const MobileContext = createContext();

const useMobileContext = () => {
    return useContext(MobileContext);
};

export default useMobileContext;
