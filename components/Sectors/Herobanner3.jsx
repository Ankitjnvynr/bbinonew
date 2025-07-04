

"use client"

import React from 'react';
import { motion } from 'framer-motion'
import  Link from 'next/link'
const Herobanner3 = () => {
  return (
    <motion.section
    initial={{opacity: 0, x:-200}}
    transition={{duration: 1}}
    whileInView={{opacity: 1, x:0}}
    viewport={{once: true}}
     className="bg-white px-4 py-12">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-blue-800 text-center mb-4">
        TELECOM
        </h2>
        <div className="flex justify-center mb-6">
          <div className="w-16 h-1 bg-orange-500 rounded-sm"></div>
        </div>

        <div className="flex flex-col md:flex-row items-center gap-8">
          {/* Left Text Section */}
          <div className="md:w-1/2 text-gray-800">
            <p className="mb-4">
            The company is one of the leaders in providing telecom solutions in over 50 countries, covering over 100+ telecom carriers in Asia, Africa, Middle-East & Europe. Altruist Group is one of the largest and the most successful group with 12 companies and over 10,000+ strong team spread across various counties.
            </p><br />

            <button className="bg-orange-500 hover:bg-orange-600 text-white font-semibold py-2 px-6 rounded transition duration-200">
            <Link href="sectors/telecom">Read More</Link>
            </button>
          </div>

          {/* Right Image Section */}
          <div className="md:w-1/2 w-full">
            <img
              src="assets/sectors3.jpg "
              alt="Power Plant"
              className="rounded-lg shadow-lg w-full object-cover"
            />
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Herobanner3;
