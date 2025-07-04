"use client"
import React from 'react';
import { motion } from 'framer-motion';
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
        IT AND SOFTWARE
        </h2>
        <div className="flex justify-center mb-6">
          <div className="w-16 h-1 bg-orange-500 rounded-sm"></div>
        </div>

        <div className="flex flex-col md:flex-row items-center gap-8">
        <div className="md:w-1/2 w-full">
            <img
              src="assets/sectors6.jpg "
              alt="Power Plant"
              className="rounded-lg shadow-lg w-full object-cover"
            />
          </div>
          {/* Left Text Section */}
          <div className="md:w-1/2 text-gray-800">
            <p className="mb-4">
              BigByte provides innovative IT services to help our clients reach their business goals. With deep knowledge and expertise in industry, we take a bigger picture of your business technology needs & goals and provide the services that will work for your business.
            </p>

            <p className="mb-2">
            IT is a very important part of any business which makes it utterly necessary to pick the right guys and nobody does it better than BigByte. Experience the effortlessness and key benefits of an expert in the field partner.
            </p>

            <ul className="list-disc list-inside space-y-1">
                <li>IT & Software</li>
                <li>Mobile Apps</li>
                <li>Online Marketing</li>
                <li>Web Design</li>
                <li>Social Media Promotion</li>
                <li>Animation & Designing</li>
              </ul><br />

            <button className="bg-orange-500 hover:bg-orange-600 text-white font-semibold py-2 px-6 rounded transition duration-200">
            <Link href="sectors/information-tech">Read More</Link>
            </button>
          </div> 
        </div>
      </div>
    </motion.section>
  );
};

export default Herobanner2;