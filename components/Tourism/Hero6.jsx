"use client";

import React from 'react';
import { motion } from 'framer-motion';
// import sectorsBg from '../../assets/power_plant.jpg'; // ✅ Import the sectors image

const Herobanner1 = () => {
  return (
    <div
      className='min-h-screen mb-0 bg-cover bg-center flex items-center w-full overflow-hidden'
    //   style={{ backgroundImage: `url(${sectorsBg})`}}
    style={{ backgroundImage: 'url("/assets/Tourism.jpg")' }} 
      id='header'      
    >    
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        transition={{ duration: 1.5 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className='container text-center mx-auto py-4 px-6 md:px-20 lg:px-32 text-white'
      >
        <h2 className='text-4xl sm:text-6xl md:text-[70px] inline-block max-w-3xl font-semibold pt-20'>
        Where Every Journey Becomes a Story.<br />    
        </h2>
            {/* <div className='space-x-6 mt-16'>
            
            <a
                href="#Contact"
                className='px-8 py-3 rounded'
                style={{ backgroundColor: '#fc9908' }}  
            >
                Sectors
            </a>
            </div> */}
      </motion.div>             
    </div>     
  );
};

export default Herobanner1;     