"use client"


import React from 'react';
import { motion } from 'framer-motion'
import  Link from 'next/link'

const Herobanner = () => {
  return (
    <motion.section
    initial={{opacity: 0, x:-200}}
    transition={{duration: 1}}
    whileInView={{opacity: 1, x:0}}
    viewport={{once: true}}
     className="bg-white px-4 py-12">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-blue-800 text-center mb-4">
          POWER PLANTS/STEAM BOILERS
        </h2>
        <div className="flex justify-center mb-6">
          <div className="w-16 h-1 bg-orange-500 rounded-sm"></div>
        </div>

        <div className="flex flex-col md:flex-row items-center gap-8">
          {/* Left Text Section */}
          <div className="md:w-1/2 text-gray-800">
            <p className="mb-4">
              The power plant company is involved in manufacturing of steam boilers and supplying power generation
              plants on EPC (Engineering, Procurement, Construction) basis. We provide end to end solution from
              designing to final execution and commissioning of the project and also provide training for running the plant.
              We make boilers that can be fuelled from coal, biomass, oil or gas. We have got a very strong team in this
              company and the power generation projects can be very successful where power is a problem like African
              countries and Asian countries.
            </p>

            <p className="mb-2">
              <strong>Combustion system:</strong> Combustion, Grates, Pyrolysis Burner Combustion System
            </p>

            <p className="mb-2">
              <strong>Power Plants:</strong> (Consultant & EPC) DPR, SPECS, BOQ, Vendor Selection, Utility Design /
              Engineering Construction Drawings
            </p>

            <p className="mb-2">
              <strong>Steam Boiler/Steam Turbine/Steam Generator/Retro Fittings & Refurbishing:</strong>
            </p>

            <p className="mb-4">
              <strong>Air Pollution Control Devices:</strong> FGD’s, ESP, Bag Filters
            </p>

            <button className="bg-orange-500 hover:bg-orange-600 text-white font-semibold py-2 px-6 rounded transition duration-200">
            <Link href="sectors/power-plant">Read More</Link>
            </button>
          </div>

          {/* Right Image Section */}
          <div className="md:w-1/2 w-full">
            <img
              src="assets/powerplant.jpg "
              alt="Power Plant"
              className="rounded-lg shadow-lg w-full object-cover"
            />
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Herobanner;
