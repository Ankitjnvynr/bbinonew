"use client"
import React from 'react';
import { motion } from 'framer-motion';
import  Link from 'next/link'

const Herobanner7 = () => {
  return (
    <motion.section
    initial={{opacity: 0, x:-200}}
    transition={{duration: 1}}
    whileInView={{opacity: 1, x:0}}
    viewport={{once: true}}
     className="bg-white px-4 py-12">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-blue-800 text-center mb-4">
        HVAC INDUSTRY
        </h2>
        <div className="flex justify-center mb-6">
          <div className="w-16 h-1 bg-orange-500 rounded-sm"></div>
        </div>

        <div className="flex flex-col md:flex-row items-center gap-8">
          {/* Left Text Section */}
          <div className="md:w-1/2 text-gray-800">
            <p className="mb-4">
            The company is a leader in HVAC products. It is involved in different Engineering & HVAC applications like Air Filters, Synthetic Rubber Adhesive & Pre Insulated Duct etc. Since our inception, our growth has developed on the fundamental cornerstone of a deeply embedded quality culture, a motivated work force with high expectancy of achievement, and latest manufacturing technology.With incredible expertise in design and selection of air management system, the company is serving the customes according to the application with innovative technology, high quality and cost effective solutions.Over the years, we have introduced several unique products of accuracy and durability. Thoroughly new technologies have enabled us to bring design quality, productivity and cost improvements to our customers. The company is continuously meeting the demands of the changing and challenging market environment around the country.Today our products have become the clear choice of the most prestigious and demanding industries across the country like HVAC, Pharmaceuticals, Automobiles & Hospitals etc.As we focus ahead, we resolve to deliver better products that meet the demands of today’s and tomorrow’s.
            </p><br />

            <button className="bg-orange-500 hover:bg-orange-600 text-white font-semibold py-2 px-6 rounded transition duration-200">
              Read More
            </button>
          </div>

          {/* Right Image Section */}
          <div className="md:w-1/2 w-full">
            <img
              src="assets/sectors7.jpeg "
              alt="Power Plant"
              className="rounded-lg shadow-lg w-full object-cover"
            />
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Herobanner7;
