"use client";

import React, { useEffect, useState } from 'react';
import { useRouter, usePathname } from 'next/navigation';
import Link from 'next/link';

import { FiMenu, FiX } from 'react-icons/fi';

const Navbar = () => {
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    document.body.style.overflow = showMobileMenu ? 'hidden' : 'auto';
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [showMobileMenu]);

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
    <div className='absolute top-5 left-0 w-full z-[9999]'>
      <div className='container mx-auto flex justify-between items-center py-4 px-6 md:px-20 lg:px-32 bg-[rgba(233,233,233,0.8)] rounded-lg'>
        <Link href="/" className="cursor-pointer">
          <img
            src="/bigbyte-logo.png"
            alt="Logo"
            width={160}
            height={40}
            priority
          />
        </Link>

        <ul className='hidden md:flex gap-7'>
          {['Home', 'About', 'Sectors', 'Contact Us'].map((item, index) => {
            const sectionId = item === 'Home' ? 'Header' : item === 'About' ? 'About' : item === 'Sectors' ? 'Sectors1' : 'Contact';
            return (
              <button
                key={index}
                onClick={() => handleSectionNavigation(sectionId)}
                className='cursor-pointer bg-transparent border-none txt-black'
                style={{ transition: 'color 0.3s' }}
                onMouseEnter={(e) => (e.target.style.color = '#fc9908')}
                onMouseLeave={(e) => (e.target.style.color = '')}
              >
                {item}
              </button>
            );
          })}
        </ul>

        {/* Mobile Menu Icon */}
        <div className="md:hidden">
          <FiMenu size={28} className="cursor-pointer" onClick={() => setShowMobileMenu(true)} />
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden ${showMobileMenu ? 'fixed w-full' : 'h-0 w-0'} fixed w-full right-0 top-0 bottom-0 overflow-hidden bg-white transition-all z-[9999]`}>
        <div className='flex justify-end p-6 cursor-pointer'>
          <FiX size={24} onClick={() => setShowMobileMenu(false)} />
        </div>
        <ul className='flex flex-col items-center gap-4 mt-5 px-5 text-lg font-medium'>
          {['Home', 'About Us', 'Sectors', 'Contact Us'].map((item, index) => {
            const sectionId = item === 'Home' ? 'Header' : item === 'About Us' ? 'About' : item === 'Sectors' ? 'Sectors1' : 'Contact';
            return (
              <button
                key={index}
                onClick={() => {
                  setShowMobileMenu(false);
                  handleSectionNavigation(sectionId);
                }}
                className='px-4 py-2 rounded-full inline-block bg-transparent border-none'
              >
                {item}
              </button>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
