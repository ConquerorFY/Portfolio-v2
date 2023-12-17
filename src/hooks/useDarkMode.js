import { useContext, createContext } from "react";

export const DarkModeContext = createContext();

const useDarkModeContext = () => {
    return useContext(DarkModeContext);
};

export default useDarkModeContext;
