import Navbar from './components/Navbar/Navbar';
import Sidebar from './components/Navbar/Sidebar/Sidebar';
import Home from './pages/Home';
import About from './pages/About';
import Watchlist from './pages/Watchlist';
import NotFound from './pages/NotFound';
import Footer from './components/Footer/Footer';
import { Routes, Route } from 'react-router-dom';
import { useState } from 'react';

function App() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  }

  return (
    <>
      <Sidebar isOpen={isOpen} toggle={toggle}/>
      <Navbar toggle={toggle}/>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/watchlist' element={<Watchlist />} />
        <Route path="*" element={<NotFound/>} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
