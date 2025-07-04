"use client";
import React, { useEffect, useState } from 'react';
import { useRouter, usePathname } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';


const Navbar = () => {
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [iconInView, setIconInView] = useState(false);
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    if (showMobileMenu) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [showMobileMenu]);

  // const toggleSearch = () => {
  //   setIsSearchOpen(!isSearchOpen);
  //   if (!isSearchOpen) {
  //     setTimeout(() => setIconInView(true), 150);
  //   } else {
  //     setIconInView(false);
  //   }
  // };

  const handleSectionNavigation = (sectionId) => {
    if (pathname !== '/') {
      router.push(`/#${sectionId}`);
    } else {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
  };

  useEffect(() => {
    if (typeof window !== 'undefined' && window.location.hash) {
      const hash = window.location.hash.substring(1);
      setTimeout(() => {
        const element = document.getElementById(hash);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, 500);
    }
  }, [pathname]);

  return (
    <div className='absolute top-5 left-0 w-full z-10'>
      <div className='container mx-auto flex justify-between items-center py-4 px-6 md:px-20 lg:px-32 bg-transparent'>
        <Link href="/" className="cursor-pointer">
          
          <Image
            src="/assets/bb_logo.png"
            alt="Logo"
            width={160}
            height={40}
            priority
            
          />
          
        </Link>
        
        <ul className='hidden md:flex gap-7 text-white'>
          <button
            onClick={() => handleSectionNavigation('Header')}
            className='cursor-pointer bg-transparent border-none text-white'
            style={{
              transition: 'color 0.3s',
            }}
            onMouseEnter={(e) => (e.target.style.color = '#fc9908')}
            onMouseLeave={(e) => (e.target.style.color = '')}
          >
            Home
          </button>
          <button
            onClick={() => handleSectionNavigation('About')}
            className='cursor-pointer bg-transparent border-none text-white'
            style={{
              transition: 'color 0.3s',
            }}
            onMouseEnter={(e) => (e.target.style.color = '#fc9908')}
            onMouseLeave={(e) => (e.target.style.color = '')}
          >
            About
          </button>
          
          <button
            onClick={() => handleSectionNavigation('Sectors1')}
            className='cursor-pointer bg-transparent border-none text-white flex items-center'
            style={{
              transition: 'color 0.3s',
            }}
            onMouseEnter={(e) => (e.target.style.color = '#fc9908')}
            onMouseLeave={(e) => (e.target.style.color = '')}
          >
            Sectors
          </button>

          <button
            onClick={() => handleSectionNavigation('Contact')}
            className='cursor-pointer bg-transparent border-none text-white'
            style={{
              transition: 'color 0.3s',
            }}
            onMouseEnter={(e) => (e.target.style.color = '#fc9908')}
            onMouseLeave={(e) => (e.target.style.color = '')}
          >
            Contact Us
          </button>
        </ul>

        {/* Search and Language Section */}
        {/* <div className="hidden md:flex items-center space-x-4">
          <div className="relative flex items-center">
            {!isSearchOpen && (
              <button
                onClick={toggleSearch}
                className="text-white hover:text-[#fc9908] transition-colors focus:outline-none"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <circle cx="11" cy="11" r="8" />
                  <line x1="21" y1="21" x2="16.65" y2="16.65" />
                </svg>
              </button>
            )}
            <div
              className={`overflow-hidden relative transition-all duration-300 ease-in-out ml-2 ${
                isSearchOpen ? 'w-32' : 'w-0'
              }`}
            >
              <input
                type="text"
                autoFocus={isSearchOpen}
                placeholder=""
                className="w-full h-8 bg-transparent rounded-xl border border-gray-300 outline-none pl-4 pr-10 text-white placeholder-gray-300"
              />
              {isSearchOpen && (
                <button
                  onClick={toggleSearch}
                  className={`absolute right-2 top-1/2 transform -translate-y-1/2 transition-transform duration-300 ease-in-out ${
                    iconInView ? 'translate-x-0' : 'translate-x-8'
                  }`}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    className="text-white"
                  >
                    <circle cx="11" cy="11" r="8" />
                    <line x1="21" y1="21" x2="16.65" y2="16.65" />
                  </svg>
                </button>
              )}
            </div>
          </div>
          <div className="text-white flex items-center cursor-pointer hover:text-[#fc9908] transition-colors">
            <span className="mr-1">English</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <polyline points="6 9 12 15 18 9" />
            </svg>
          </div>
        </div> */}

        <img
          onClick={() => setShowMobileMenu(true)}
          src="/menu_icon.svg"
          className='md:hidden w-7 cursor-pointer'
          alt="Menu"
          width={28}
          height={28}
        />
      </div>
      
      {/* -------------------mobile-menu------------ */}
      <div className={`md:hidden ${showMobileMenu ? 'fixed w-full' : 'h-0 w-0'} fixed w-full right-0 top-0 bottom-0 overflow-hidden bg-white transition-all`}>
        <div className='flex justify-end p-6 cursor-pointer'>
          <img
            onClick={() => setShowMobileMenu(false)}
            src="/cross_icon.svg"
            className='w-6'
            alt="Close"
            width={24}
            height={24}
          />
        </div>
        <ul className='flex flex-col items-center gap-2 mt-5 px-5 text-lg font-medium'>
          <button
            onClick={() => {
              setShowMobileMenu(false);
              handleSectionNavigation('Header');
            }}
            className='px-4 py-2 rounded-full inline-block bg-transparent border-none'
          >
            Home
          </button>
          <button
            onClick={() => {
              setShowMobileMenu(false);
              handleSectionNavigation('About');
            }}
            className='px-4 py-2 rounded-full inline-block bg-transparent border-none'
          >
            About Us
          </button>
          
          {/* Mobile Sectors NavLink - Sub-links removed */}
          <button
            onClick={() => {
              setShowMobileMenu(false);
              handleSectionNavigation('Sectors1');
            }}
            className='px-4 py-2 rounded-full inline-block bg-transparent border-none font-semibold'
          >
            Sectors
          </button>

          <button
            onClick={() => {
              setShowMobileMenu(false);
              handleSectionNavigation('Contact');
            }}
            className='px-4 py-2 rounded-full inline-block bg-transparent border-none'
          >
            Contact Us
          </button>
        </ul>
      </div>
    </div>
  )
}

export default Navbar;