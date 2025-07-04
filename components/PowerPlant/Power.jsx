"use client";

import React from "react";
import { motion } from "framer-motion";

const Power = () => {
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
            src="/assets/Power_Plant2.jpg" // Replace with actual path
            alt="Vision"
            className="rounded-2xl shadow-2xl w-full object-cover"
            style={{ height: "400px" }}
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
            PowerTech{" "}
            <span className="underline underline-offset-4 decoration-2 font-light decoration-gray-900 text-orange-400">
              Solutions
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-md leading-relaxed mb-6"
          >
            Powering industries with reliable, efficient, and sustainable energy solutions, we enable businesses to drive growth while minimizing environmental impact. Our focus is on transforming energy systems to support industries of all sizes, using advanced technology and innovation to meet the challenges of today and tomorrow.
          </motion.p>

          {/* Replace motion.p with motion.div for the list */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="text-md leading-relaxed mb-6"
          >
            <ul className="list-disc list-inside space-y-1">
              <li>Provides complete EPC services for biomass and coal-fired power plants.</li>
              <li>Specializes in high-efficiency steam generation for industrial applications.</li>
              <li>Offers a “Steam at Cost” model—no capital investment from clients.</li>
              <li>Designs plants with multi-fuel capability: rice husk, bagasse, petcoke, coal, wood chips, and more.</li>
              <li>Integrates advanced air pollution control systems for environmental compliance.</li>
              <li>Delivers ongoing operation and maintenance services for reliability.</li>
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Power;
