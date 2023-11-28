import React, { useState, useEffect, useRef } from 'react';
import { FaWhatsapp } from 'react-icons/fa6';
import logo from '../Assets/logo.png'

function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const menuRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsMobileMenuOpen(false);
      }
    }

    if (isMobileMenuOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isMobileMenuOpen]);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  

  return (
    <nav ref={menuRef} className="bg-gradient-to-r from-orange-300 to-red-500 fixed w-full z-20 top-0 left-0 font-nav">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <a href="/" className="flex items-center">
          <img src={logo} className="h-12 mr-3 w-48" alt="Logo" />
        </a>
        <div className="flex md:order-2">
          <a href="https://wa.me/+18475304842" className="pt-1" target="_blank" rel="noreferrer">
            <button type="button" className="text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-lg px-4 py-2 text-center mr-3 md:mr-0">
              <FaWhatsapp />
            </button>
          </a>
          <button onClick={toggleMobileMenu} type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200" aria-controls="navbar-sticky" aria-expanded={isMobileMenuOpen}>
            <span className="sr-only">Open main menu</span>
            <div className={`ml-2.5 block w-5 left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 transition-transform duration-300`}>
              <span aria-hidden="true" className={`block absolute h-0.5 w-5 bg-current transform transition-transform duration-300 ease-in-out ${isMobileMenuOpen ? 'rotate-45 ' : '-translate-y-1.5'}`}></span>
              <span aria-hidden="true" className={`block absolute h-0.5 w-5 bg-current transform transition-transform duration-300 ease-in-out ${isMobileMenuOpen ? 'opacity-0' : ''}`}></span>
              <span aria-hidden="true" className={`block absolute h-0.5 w-5 bg-current transform transition-transform duration-300 ease-in-out ${isMobileMenuOpen ? '-rotate-45 ' : 'translate-y-1.5'}`}></span>
            </div>
          </button>
        </div>
        <div className={`items-center justify-between w-full md:flex md:w-auto md:order-1 ${isMobileMenuOpen ? 'block' : 'hidden'}`} id="navbar-sticky">
          <ul  className="flex flex-col p-4 md:p-0 mt-4 font-medium border rounded-lg md:flex-row md:space-x-8 md:mt-0 md:border-0">
            <li>
              <a href="/" className="block py-2 pl-3 pr-4 text-gray-900 text-lg rounded md:hover:bg-transparent hover-bg-gray-100 md:p-0 md:hover:text-green-700" aria-current="page">
                Home
              </a>
            </li>
            <li>
              <a href="/about" className="block font-HP Simplified py-2 pl-3 pr-4 text-lg text-gray-900 rounded hover-bg-gray-100 md:hover-bg-transparent md:hover-text-green-700 md:p-0">
                About Us
              </a>
            </li>
            <li>
              <a href="/products" className="block py-2 pl-3 pr-4 text-lg text-gray-900 rounded hover-bg-gray-100 md:hover-bg-transparent md:hover-text-green-700 md:p-0">
                Products
              </a>
            </li>
            <li>
              <a href="/contact" className="block py-2 pl-3 pr-4 text-lg text-gray-900 rounded hover-bg-gray-100 md:hover-bg-transparent md:hover-text-green-700 md:p-0">
                Contact Us
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
