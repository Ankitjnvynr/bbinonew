"use client";
import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';

const Herobanner8 = () => {
  return (
    <motion.section
      initial={{ opacity: 0, x: 200 }}
      transition={{ duration: 1 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      className="bg-white px-4 py-12"
    >
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-blue-800 text-center mb-4">
          PETROLEUM INDUSTRY / MODULAR REFINERY
        </h2>
        <div className="flex justify-center mb-6">
          <div className="w-16 h-1 bg-orange-500 rounded-sm"></div>
        </div>

        <div className="flex flex-col md:flex-row items-center gap-8">
          <div className="md:w-1/2 w-full">
            <img
              src="/assets/sectors8.webp"
              alt="Modular Refinery"
              className="rounded-lg shadow-lg w-full object-cover"
            />
          </div>
          {/* Left Text Section */}
          <div className="md:w-1/2 text-gray-800">
            <p className="mb-4">
              The company is dealing in all aspects of oil and gas production and conversion and has considerable experience in oil refining and EPC projects. Our specialists in system engineering bring many years of experience—from oil and gas production to finished products. We also have expertise in the custom design, manufacture, and supply of plants to the iron & steel industry. Our Modular Refinery project is highly economical compared to a full-fledged refinery, and we are ready to fund the project under specific terms for prospective partners. We proudly represent some of the world’s leading oil and gas process plant manufacturers based in North America. Our technical partners manufacture equipment to process crude oil into AGO, PMS, DPK, and a residual product of LPFO. A small amount of gas is recovered to power the process, making the plant self-sufficient. Although not a complete refining process, these units—known as Modular Refineries or Crude Topping Units—offer advantages in cost and speed of implementation.
            </p>
            <br />

            <button className="bg-orange-500 hover:bg-orange-600 text-white font-semibold py-2 px-6 rounded transition duration-200">
              <Link href="/sectors/petrol">Read More</Link>
            </button>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Herobanner8;
