import { NavLink } from "react-router-dom";
import useDarkModeContext from "../hooks/useDarkMode";
import { light, dark } from "../assets/icons";

const Navbar = () => {
    const { isDarkMode, toggleDarkMode } = useDarkModeContext();

    const textColor = isDarkMode ? 'text-white' : 'text-black';
    return (
        <header className="header">
            <NavLink to="/" className="w-10 h-10 rounded-lg bg-white items-center justify-center flex font-bold shadow-md">
                <p className="blue-gradient_text">RY</p>
            </NavLink>
            <nav className="flex text-lg gap-7 font-medium">
                <NavLink to="/about" className={({ isActive }) => isActive ? 'text-blue-500' : textColor}>
                    About
                </NavLink>
                <NavLink to="/projects" className={({ isActive }) => isActive ? 'text-blue-500' : textColor}>
                    Projects
                </NavLink>
                <img src={isDarkMode ? light : dark} onClick={toggleDarkMode} className={`w-[20px] cursor-pointer ${textColor}`} alt="light-mode" />
            </nav>
        </header>
    )
}

export default Navbar;