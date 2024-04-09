import { Route, BrowserRouter as Router, Routes } from "react-router-dom"
import Navbar from "./components/Navbar"
import { Home, About, Projects, Contact } from './pages';
import DarkModeProvider from "./hooks/providers/DarkMode";
import MobileProvider from "./hooks/providers/Mobile";

const App = () => {
    return (
        <DarkModeProvider>
            <MobileProvider>
                <main className="bg-slate-300/20 min-h-[100vh] h-full dark:bg-slate-900">
                    <Router>
                        <Navbar />
                        <Routes>
                            <Route path="/" element={<Home />} />
                            <Route path="/about" element={<About />} />
                            <Route path="/projects" element={<Projects />} />
                            <Route path="/contact" element={<Contact />} />
                        </Routes>
                    </Router>
                </main>
            </MobileProvider>
        </DarkModeProvider>
    )
}

export default App