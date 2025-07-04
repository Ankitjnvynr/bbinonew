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
            src="/assets/telecom2.jpg" // Replace with actual path
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
            Telecom{" "}
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
            {/* Additional introductory text can be added here */}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="text-md leading-relaxed mb-6"
          >
            <ul className="list-disc list-inside space-y-1">
              <li>
                <strong>Omni-Channel Communication Platforms:</strong> Integrated solutions like Firebird that enhance messaging and voice communication channels for telecom operators.
              </li>
              <li>
                <strong>Value-Added Services (VAS):</strong> A diverse range of content-based services designed to enrich user experience and engagement.
              </li>
              <li>
                <strong>Revenue Assurance & Fraud Management:</strong> Tools and strategies to ensure revenue integrity and mitigate fraudulent activities within telecom operations.
              </li>
              <li>
                <strong>Customer Lifecycle Management:</strong> Comprehensive services to manage customer interactions from acquisition to retention, enhancing customer satisfaction and loyalty.
              </li>
              <li>
                <strong>Digital Content Distribution:</strong> Platforms facilitating the delivery of digital content to end-users, supporting various media formats.
              </li>
              <li>
                <strong>E-Governance Solutions:</strong> Implementation of digital platforms for government services, improving accessibility and transparency.
              </li>
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Power;
