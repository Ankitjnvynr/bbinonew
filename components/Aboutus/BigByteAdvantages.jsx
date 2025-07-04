"use client";
import React from "react";
import { motion } from "framer-motion";

const advantages = [
  "Established credentials of promoters in export markets, as in their formative years they have been selling various engineering products in more than 50 countries.",
  "Good networking all over the world in various industries for product sourcing.",
  "In house team of engineers to ensure that products are made as per the approved design and all quality parameters are followed as per export guidelines.",
  "Proactive team who understands the importance of time and responds to problems raised by the customers promptly. The team ensures to meet the timelines as committed in the contract.",
  "Single point responsibility, takes full ownership of the successful erection and commissioning of the project.",
  "Manpower support/supply in case of turnkey projects. BIPL ensures to give maximum benefit to the customers and offers expert and experienced manpower to run the projects efficiently ensuring sure shot success of the project. "
];

const BigByteAdvantages = () => {
  return (
    <section className="bg-white py-20 px-6 md:px-20 text-gray-800">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-3xl sm:text-4xl font-bold text-center mb-14"
        >
          Big Byte{" "}
          <span className="text-orange-500 underline decoration-2 underline-offset-4 font-light decoration-black">
            Advantages
          </span>
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {advantages.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white border border-gray-200 shadow-md hover:shadow-xl transition-shadow p-6 rounded-2xl"
            >
              <p className="text-base leading-relaxed text-gray-700">
                {item}
              </p>
            </motion.div>  
          ))}
        </div>
      </div>
    </section>
  );
};

export default BigByteAdvantages;
 



