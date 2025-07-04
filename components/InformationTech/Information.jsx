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
            src="/assets/info3.jpg" // Replace with actual path
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
            IT {" "}
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
            A comprehensive suite of IT services is available, designed to enhance digital presence and operational efficiency. These services encompass software development, digital marketing, and web technologies, aiming to provide tailored solutions that align with specific business objectives.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="text-md leading-relaxed mb-6"
          >
            <ul className="text-md leading-relaxed mb-3 list-disc list-inside space-y-1 text-md">
          <li><strong>E-commerce Development: </strong> Designing interactive, multilingual, and multi-currency online stores with social media integration to enhance customer engagement.</li>
          <li><strong>Search Engine Optimization (SEO):</strong> Implementing strategies to improve website rankings on search engines, increasing visibility and attracting targeted traffic.</li>
          <li><strong>Web Development: </strong> Creating customized, secure, and responsive websites that cater to diverse business needs and provide seamless user experiences.</li>
          <li><strong>Digital Marketing:</strong> Offering comprehensive digital marketing services to boost online presence, including content creation, email marketing, and analytics.
</li>
          <li><strong>Social Media Optimization (SMO):</strong> Enhancing brand awareness and customer interaction through strategic use of social media platforms.</li>
          <li><strong>Content Management Systems (CMS):</strong> Developing and managing websites using platforms like WordPress, Drupal, Shopify, Magento, and WooCommerce for efficient content handling.</li>
        </ul>
          </motion.p>

          
        </div>
      </div>
    </section>
  );
};

export default Power;