
"use client"

import React from 'react';
import { motion } from 'framer-motion'
import  Link from 'next/link'
const Herobanner2 = () => {
  return (
    <motion.section
    initial={{opacity: 0, x:200}}
    transition={{duration: 1}}
    whileInView={{opacity: 1, x:0}}
    viewport={{once: true}}
     className="bg-white px-4 py-12">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-blue-800 text-center mb-4">
        AGRO TECHNOLOGIES
        </h2>
        <div className="flex justify-center mb-6">
          <div className="w-16 h-1 bg-orange-500 rounded-sm"></div>
        </div>

        <div className="flex flex-col md:flex-row items-center gap-8">

            {/* Right Image Section */}
        <div className="md:w-1/2 w-full">
            <img
              src="assets/sectors1.jpg "
              alt="Power Plant"
              className="rounded-lg shadow-lg w-full object-cover"
            />
          </div>
          {/* Right Text Section */}
          <div className="md:w-1/2 text-gray-800">
            <p className="mb-4">
            The company is engage into designing and manufacturing of machinery for agriculture produce. It has different verticals for different agricultural produce
            </p>

            <p className="mb-2">
              <strong>Oil Extraction Plants:</strong> <br /></p>
              <ul className="list-disc list-inside space-y-1">
                <li>Rice bran oil and other oil cakes extraction plants</li>
                <li>Rice Processing Machinery (plain and par boiled)</li>
                <li>Herbal and pharmaceutical plants</li>
              </ul><br />
            

              <p className="mb-2">
              <strong>Post Harvest Machinery : </strong> <br /></p>
              <ul className="list-disc list-inside space-y-1">
                <li>Cleaners, Graders, Seperators, De-Stoners, Blowers, Aspirators, Seed treaters, Mobile Plants</li>
                <li>Food Processing Machinery</li>
              </ul><br />

            <button className="bg-orange-500 hover:bg-orange-600 text-white font-semibold py-2 px-6 rounded transition duration-200">
            <Link href="sectors/agro">Read More</Link>
            </button>
          </div>

          {/* Right Image Section */}
          {/* <div className="md:w-1/2 w-full">
            <img
              src="assets/powerplant.jpg "
              alt="Power Plant"
              className="rounded-lg shadow-lg w-full object-cover"
            />
          </div> */}
        </div>
      </div>
    </motion.section>
  );
};

export default Herobanner2;