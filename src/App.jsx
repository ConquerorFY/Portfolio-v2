import { Route, BrowserRouter as Router, Routes } from "react-router-dom"
import Navbar from "./components/Navbar"
import { Home, About, Projects, Contact } from './pages';
import { useState } from "react";
import DarkModeProvider from "./hooks/providers/DarkMode";

const App = () => {
    const [isLoaded, setIsLoaded] = useState(false);

    return (
        <DarkModeProvider>
            <main className="bg-slate-300/20 h-full dark:bg-slate-900">
                <Router>
                    <Navbar />
                    <Routes>
                        <Route path="/" element={<Home isLoaded={isLoaded} setIsLoaded={setIsLoaded} />} />
                        <Route path="/about" element={<About />} />
                        <Route path="/projects" element={<Projects />} />
                        <Route path="/contact" element={<Contact />} />
                    </Routes>
                </Router>
            </main>
        </DarkModeProvider>
    )
}

export default App