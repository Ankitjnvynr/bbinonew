"use client"


import React from 'react';
import { motion } from 'framer-motion';
import  Link from 'next/link'

const Herobanner5 = () => {
  return (
    <motion.section
    initial={{opacity: 0, x:-200}}
    transition={{duration: 1}}
    whileInView={{opacity: 1, x:0}}
    viewport={{once: true}}
     className="bg-white px-4 py-12">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-blue-800 text-center mb-4">
        HEALTH CARE
        </h2>
        <div className="flex justify-center mb-6">
          <div className="w-16 h-1 bg-orange-500 rounded-sm"></div>
        </div>

        <div className="flex flex-col md:flex-row items-center gap-8">
          {/* Left Text Section */}
          <div className="md:w-1/2 text-gray-800">
            <p className="mb-4">
            The company is growing fast and is providing end-to-end solutions from research to product launch with multiple manufacturing facilities based in Himachal Pradesh and Maharashtra, India. The company is highly diversified and is catering to a variety of broad segments like Pharmaceuticals, Nutraceuticals, Ayurveda, veterinary and a niche segment like Sports Nutrition.
            </p>

            <p className="mb-2">
            Majority of our formulations are researched in-house and we manufacture medicines for private labels majorly. We have our own research team which make formulations on special demand basis also.
            </p>

            <p className="mb-2">
            Having been a principal contract manufacturing company, it has expanded, operated and successfully marked its presence across the following industry verticals.
            </p>

            <p className="mb-2">
            The manufacturing facilities have been built in accordance with the WHO GMP guidelines and these have separate quality control units and quality assurance functions to monitor the manufacturing quality of our products.
            </p><br />

            <button className="bg-orange-500 hover:bg-orange-600 text-white font-semibold py-2 px-6 rounded transition duration-200">
            <Link href="sectors/health">Read More</Link>
            </button>
          </div>

          {/* Right Image Section */}
          <div className="md:w-1/2 w-full">
            <img
              src="assets/sectors5.jpg "
              alt="Power Plant"
              className="rounded-lg shadow-lg w-full object-cover"
            />
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Herobanner5;
