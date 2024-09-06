import React, { useState ,useEffect} from 'react';
import { Link,useLocation } from 'react-router-dom';

const Navbar = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <nav className="fixed top-0 z-10 w-full p-4 text-white bg-gray-800" style={{ cursor: 'default' }}>
      <div className="flex justify-between w-5/6 mx-auto text-center">
        
        <div className="items-center hidden space-x-4 text-sm sm:flex">
          <Link to='/' className=' hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-amber-200'>Home</Link>
          <Link to='/about'  className=' hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-amber-200'>About</Link>
        </div>
        <div className="text-3xl font-extrabold sm:text-2xl">
          <a href="/">Bhuwan Bhashkar</a>
        </div>
        <div className="items-center hidden space-x-4 text-sm sm:flex">
          <Link to='/projects'  className=' hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-amber-200'>Projects</Link>
          <Link to='/contact'  className=' hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-amber-200'>Contact</Link>
        </div>

        <div className="sm:hidden">
          <button onClick={toggleMobileMenu} className="text-xl focus:outline-none">
            {isMobileMenuOpen ? '✕' : '☰'}
          </button>
        </div>
        <div className={`sm:hidden fixed top-0 left-0 w-full h-full bg-gray-800 text-center ${isMobileMenuOpen ? 'flex flex-col items-center justify-center' : 'hidden'}`}>
          <button onClick={closeMobileMenu} className="absolute text-xl top-4 right-4 focus:outline-none">
            ✕
          </button>
          <ul className="space-y-4 text-2xl font-medium">
            <li><Link to='/' onClick={closeMobileMenu}>Home</Link></li>
            <li><Link to='/about' onClick={closeMobileMenu}>About</Link></li>
            <li><Link to='/projects' onClick={closeMobileMenu}>Projects</Link></li>
            <li><Link to='/experience' onClick={closeMobileMenu}>Experince</Link></li>
            <li><Link to='/contact' onClick={closeMobileMenu}>Contact</Link></li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
