import React, { useState, useEffect } from 'react';
import logo from '../assets/img/logo1.png';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

 
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };    

  return (
    <div>
        <nav
            className={`
                fixed w-full z-50 transition-all duration-300 ease-in-out
                ${isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'}
            `}
        >
            <div className="max-w-6xl mx-auto  px-4 py-4 flex gap-52 md:gap-60 items-center">
                 <a href='#home' 
                    className={`
                        text-sm md:text-2xl font-bold flex items-center gap-1
                        ${isScrolled ? 'text-green-800' : 'text-green-950'}
                    `}
                    >
                        <img src={logo} className="w-8 md:w-8" alt="logo" draggable="false" /> Bali Organic
                </a>
                <div className="hidden md:flex space-x-8">
                    <a  href="#about" 
                    className={`
                        transition mt-2
                        ${isScrolled 
                        ? 'text-green-900 hover:text-shadow-green-800' 
                        : 'text-green-800 hover:text-shadow-green-800'}
                    `}>
                        About
                    </a>
                    <a  href="#menu" 
                    className={`
                        transition mt-2
                        ${isScrolled 
                        ? 'text-green-900 hover:text-shadow-green-800' 
                        : 'text-green-800 hover:text-shadow-green-800'}
                    `}>
                        Menu
                    </a>
                    <a  href="#menu" 
                    className={`
                        transition mt-2
                        ${isScrolled 
                        ? 'text-green-900 hover:text-shadow-green-800' 
                        : 'text-green-800 hover:text-shadow-green-800'}
                    `}>
                        Testimonials
                    </a>
                    <a  href="#menu" 
                    className={`
                        transition mt-2
                        ${isScrolled 
                        ? 'text-green-900 hover:text-shadow-green-800' 
                        : 'text-green-800 hover:text-shadow-green-800'}
                    `}>
                        Contact Us
                    </a>
                </div>
                <div className="md:hidden">
                <button 
                    onClick={toggleMenu} 
                    className={`burger
                        ${isScrolled ? 'text-green-800' : 'text-green-800'}
                    `}
                    >
                    {isMenuOpen ? 
                    (
                        <>
                            <span></span>
                            <span></span>
                            <span></span>
                        </>
                    

                    ) : 
                    (
                        <>
                            <span></span>
                            <span></span>
                            <span></span>
                        </>
                    )
                    }
                </button>
          </div>
            </div>

            { isMenuOpen && (
                <div className="md:hidden absolute top-full left-0 w-full bg-emerald-100 shadow-lg">
                     <div className="flex flex-col items-center py-4 space-y-4">
                        <a href="#about" className="text-emerald-800 hover:text-green-700">About</a>
                        <a href="#product"  className="text-emerald-800 hover:text-green-700">Menu</a>
                        <a href="#client" className="text-emerald-800 hover:text-green-700">Testimonials</a>
                        <a href="#contact"className="text-emerald-800 hover:text-green-700">Contact</a>
                    
                     </div>
                </div>
            )

            }
        </nav>
    </div>
  )
}

export default Navbar