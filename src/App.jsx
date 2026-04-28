import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import { Navbar } from '@/components';
import { Home, About, Projects, Contact } from '@/pages';
import DarkModeProvider from '@/context/DarkMode';
import MobileProvider from '@/context/Mobile';

const App = () => {
  return (
    <DarkModeProvider>
      <MobileProvider>
        <main className='min-h-[100vh] h-full'>
          <Router>
            <Navbar />
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/about' element={<About />} />
              <Route path='/projects' element={<Projects />} />
              <Route path='/contact' element={<Contact />} />
            </Routes>
          </Router>
        </main>
      </MobileProvider>
    </DarkModeProvider>
  );
};

export default App;
