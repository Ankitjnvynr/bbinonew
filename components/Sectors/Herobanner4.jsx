
"use client"

import React from 'react';
import { motion } from 'framer-motion';
import  Link from 'next/link';

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
        EDUCATION
        </h2>
        <div className="flex justify-center mb-6">
          <div className="w-16 h-1 bg-orange-500 rounded-sm"></div>
        </div>

        <div className="flex flex-col md:flex-row items-center gap-8">
        <div className="md:w-1/2 w-full">
            <img
              src="assets/sectors5.avif "
              alt="Power Plant"
              className="rounded-lg shadow-lg w-full object-cover"
            />
          </div>
          {/* Left Text Section */}
          <div className="md:w-1/2 text-gray-800">
            <p className="mb-4">
            The company specializes in delivering innovative and technology-driven solutions to educational institutions worldwide. We provide customized services to the institutions along-with digital interface. We are engaged in providing consultancy services for establishing private institutions starting from the feasibility study to providing complete knowhow, designing educational syllabi, getting tie-ups/affiliations done with premium institutions, recruitment and managing manpower (Senior management, teaching/non teaching, technical and non-technical), for establishing private educational institutions in and outside India.
            </p>

            <p className="mb-2">
            Our software solutions empower teachers and administrators to deliver high quality education. The platform is so flexible and economical that it is viable and suitable for one to one private tuitions to big institutions having strength of hundred thousand students. There is no upper limit for number of students that can be taught simultaneously in different classes. We understand the limitation of internet connectivity in rural areas, so we have designed the platform in such a way that it can run on 2G spectrum and it is probably the only online education platform that can do so successfully. In current pandemic situation our online education platform has helped education institutions to generate 30% more revenue.
            </p><br />

            <button className="bg-orange-500 hover:bg-orange-600 text-white font-semibold py-2 px-6 rounded transition duration-200">
            <Link href="sectors/education">Read More</Link>
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