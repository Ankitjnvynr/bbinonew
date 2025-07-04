"use client";

import React from "react";
import { motion } from "framer-motion";

const AboutIntro = () => {
  return (
    <section className="bg-[#7e7b77] py-16 px-6 md:px-20 text-white relative z-0">
      
      {/* Section 1: Text Left, Image Right */}
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-24 mt-0">
        
        {/* Text Content */}
        <div className="flex-1">
          <motion.h2
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-4xl font-extrabold text-white mb-6 mt-6 text-center md:text-left"
          >
            Tourism{" "}
            <span className="underline underline-offset-4 decoration-2 font-light decoration-white  text-orange-400">
              Sector
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-gray-200 text-md leading-relaxed mb-6"
          >
             BigByte Health offers comprehensive medical tourism services, seamlessly integrating healthcare with travel and hospitality to provide patients with a holistic healing experience. By connecting individuals to over 650 accredited hospitals across India, they ensure access to world-class medical care at significantly lower costs compared to many other countries. Their services encompass assistance with medical visa applications, coordination with leading healthcare professionals, and personalized treatment plans that blend modern medicine with traditional Indian practices like Ayurveda and Yoga. This integrative approach not only addresses the physical aspects of healing but also caters to the emotional and spiritual well-being of patients. 
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="text-gray-200 text-md leading-relaxed "
          >
          Beyond medical treatments, BigByte Health enhances the patient journey by offering comfortable accommodations for families and caregivers, ensuring a supportive environment throughout the recovery process. Their travel services include guidance on flight bookings, airport transfers, and even air ambulance services for critical cases, facilitating a stress-free experience for international patients. Moreover, patients and their companions have the opportunity to explore India's rich cultural heritage, as the organization provides information on various tourist destinations, allowing for a rejuvenating experience that combines healthcare with the exploration of India's diverse landscapes and traditions.
          </motion.p>
        </div>

        {/* Image Right */}
        <motion.div
          className="flex-1 relative mt-10 md:mt-9"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
        >
          <img
            src="/assets/tourism1.jpg"
            alt="About"
            className="rounded-2xl shadow-2xl w-full object-cover"
            style={{ height: "450px" }}
          />
        </motion.div>
      </div>

      {/* Section 2: Image Left, Text Right */}
      {/* <div className="max-w-7xl mx-auto flex flex-col-reverse md:flex-row items-center gap-16 mt-32">
        
        </div> */}
    </section>
  );
};

export default AboutIntro;