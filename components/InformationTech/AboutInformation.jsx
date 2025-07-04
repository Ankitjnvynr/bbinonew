"use client";

import React from "react";
import { motion } from "framer-motion";

const AboutIntro = () => {
  return (
    <section className="bg-gray-200 py-16 px-6 md:px-20 text-black relative z-0">
      
      {/* Section 1: Text Left, Image Right */}
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-24 mt-0">
        
        {/* Text Content */}
        <div className="flex-1">
          <motion.h2
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-4xl font-extrabold text-black    mb-6 mt-6 text-center md:text-left"
          >
            Information{" "}
            <span className="underline underline-offset-4 decoration-2 font-light decoration-black  text-orange-400">
              Technology
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-black text-md leading-relaxed mb-6"
          >
            At <strong>BigByte Innovations</strong>,A wide range of digital solutions is available, including software development, digital marketing, and advanced web technologies. Services encompass e-commerce platforms, SEO, SMO, and mobile-friendly web development. Customized strategies are designed to enhance online visibility, improve user engagement, and drive business growth in a competitive digital environment.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="text-black text-md leading-relaxed "
          >
          Proficiency in leading CMS platforms such as WordPress, Drupal, Shopify, Magento, and WooCommerce enables the creation of flexible and scalable websites. Strong emphasis is placed on cybersecurity, ensuring protection against unauthorized access and digital threats. With a blend of creativity and technical precision, the focus remains on delivering reliable, efficient, and secure digital experiences.
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
            src="/assets/info2.jpg"
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