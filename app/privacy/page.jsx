"use client";

import React from "react";
import { motion } from "framer-motion";

const PrivacyPolicy = () => {
  return (
    <section className="bg-[#7e7b77] py-32 px-6 md:px-20 text-white relative z-0">
      
      {/* Section 1: Image Left, Text Right */}
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-24 mt-0">
        
        {/* Image Left */}
        <motion.div
          className="flex-1 relative mt-10 md:mt-9"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
        >
          <img
            src="/assets/privacy.jpg"
            alt="Privacy Policy"
            className="rounded-2xl shadow-2xl w-full object-cover"
            style={{ height: "450px" }}
          />
        </motion.div>

        {/* Text Content */}
        <div className="flex-1">
          <motion.h2
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-4xl font-extrabold text-white mb-6 mt-6 text-center md:text-left"
          >
            Privacy{" "}
            <span className="underline underline-offset-4 decoration-2 font-light decoration-white text-orange-400">
              Policy
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-gray-200 text-md leading-relaxed mb-6"
          >
            At <strong>BigByte Innovations</strong>, we are committed to protecting your privacy and ensuring the security of your personal information. This Privacy Policy outlines how we collect, use, store, and protect your data when you interact with our services, visit our website, or engage with our industrial power plant solutions. We believe in transparency and want you to understand exactly how your information is handled throughout our business relationship. We collect information that you provide directly to us, such as when you request a consultation, submit project inquiries, or communicate with our engineering teams.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="text-gray-200 text-md leading-relaxed"
          >
            Your personal information is used solely for legitimate business purposes including providing Engineering, Procurement, and Construction (EPC) services, project consultations, maintenance support, and communication regarding our turnkey power plant solutions. We implement industry-standard security measures to protect your data and will never sell, rent, or share your personal information with third parties without your explicit consent, except as required by law or necessary for service delivery. You have the right to access, update, or delete your personal information at any time, and we regularly review our privacy practices to ensure compliance with applicable regulations.
          </motion.p>
        </div>
      </div>
    </section>
  );
};

export default PrivacyPolicy;