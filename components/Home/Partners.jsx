
"use client"

import React from "react";

import { motion } from 'framer-motion'


const partnerLogos = [
  'assets/GieoGita-logo.png',
  'assets/resdac.jpg',
  'assets/indiefluence-logo.png',
  'assets/genesis.jpeg',
  'assets/pratham.jpeg',
  'assets/royal.jpeg',
  'assets/akira.jpeg',
  'assets/saimed.jpg',
  'assets/studypedia.jpeg',
  // 'assets/altruist.jpg',
  // 'assets/aquasoft.jpg',
  // 'assets/infotech.jpg',
  // 'assets/mechmaarklogo.jpg',
];


const scrollingLogos = [...partnerLogos, ...partnerLogos];

const Partners = () => {
  return (
    <div className='container mx-auto py-10 lg:px-32 w-full overflow-hidden' id="Partners">
       <motion.h1
       initial={{opacity: 0, x:-200}}
       transition={{duration: 1}}
       whileInView={{opacity: 1, x:0}}
       viewport={{once: true}}
      className='text-2xl sm:text-4xl font-bold mb-2 text-center'>Our <span className='underline underline-offset-4 decoration-1 under font-light decoration-gray-900 text-[#fc9908]'>Partners</span></motion.h1>
      <motion.p
      initial={{opacity: 0, x:-200}}
      transition={{duration: 1}}
      whileInView={{opacity: 1, x:0}}
      viewport={{once: true}}
      className='text-center text-gray-500 mb-12 max-w-80 mx-auto'>Empowering Success Through Strong Partnerships</motion.p>

      {/* Scrolling logos container */}
      <div className="relative overflow-hidden">
        <div className="flex w-max animate-scroll-logo gap-16">
          {scrollingLogos.map((logo, index) => (
            <div key={index} className="w-[200px] flex justify-center items-center">
              <img src={logo} alt={`Partner ${index}`} className="h-16 object-contain" />
            </div>
          ))}
        </div>
      </div>

      {/* Scroll animation */}
      <style>{`
        @keyframes scroll-logo {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }

        .animate-scroll-logo {
          animation: scroll-logo 25s linear infinite;
        }
      `}</style>
    </div>
  );
};

export default Partners;
