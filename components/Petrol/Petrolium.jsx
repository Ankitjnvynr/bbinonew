"use client";

import React from "react";
import { motion } from "framer-motion";

const Petrolium = () => {
  return (
    <section className="bg-white py-24 px-6 md:px-20 text-black">
      <div className="max-w-7xl mx-auto flex flex-col-reverse md:flex-row items-center gap-16 mt-10">

        {/* Image Left */}
        <motion.div
          className="flex-1"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <img
            src="/assets/petrol2.jpg" // Replace with actual path
            alt="Vision"
            className="rounded-2xl shadow-2xl w-full object-cover"
            style={{ height: "350px" }}
          />
        </motion.div>

        {/* Text Right */}
        <div className="flex-1">
          <motion.h2
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-4xl font-extrabold text-black mb-6 text-center md:text-left"
          >
            Petrolium{" "}
            <span className="underline underline-offset-4 decoration-2 font-light decoration-gray-900 text-orange-400">
              Technologies
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-md leading-relaxed mb-6"
          >
            At <strong>BigByte Innovations</strong>, we understand the different projects in the petroleum industry that give you a vast variety of opportunities to turn your vision into reality.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="text-md leading-relaxed mb-6"
          >
            {/* You can include an optional heading here if needed */}
            {/* <p className="mb-2">
              <strong>Oil Extraction Plants:</strong> <br />
            </p> */}
            <ul className="list-disc list-inside space-y-1">
              <li>Power Generation Areas of Expertise</li>
              <li>Refining and Petrochemicals Areas of Expertise</li>
              <li>Iron and Steel Areas of Expertise</li>
              <li>Project and General Financing</li>
              <li>Crude Oil and Petroleum Products</li>
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Petrolium;