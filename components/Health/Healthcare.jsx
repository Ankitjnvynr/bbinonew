"use client"

import React from "react";
import { motion } from "framer-motion";

const Healthcare = () => {
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
            src="/assets/health2.jpg" // Replace with actual path
            alt="Vision"
            className="rounded-2xl shadow-2xl w-full object-cover"
            style={{ height: "500px" }}
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
            Agro{" "}
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
            At <strong>BigByte Innovations</strong>, we understand the transformative power of
            education. Our educational services are designed to equip individuals and organizations
            with practical knowledge, technical skills, and industry insights to thrive in a competitive
            world.
          </motion.p>

          {/* Replace motion.p with motion.div to wrap the list */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="text-md leading-relaxed mb-6"
          >
            <ul className="list-disc list-inside space-y-1">
              <li>
                We offer hands-on training in various technical and professional domains, helping
                learners upgrade their skills and stay industry-ready.
              </li>
              <li>
                Customized training solutions for businesses to enhance employee productivity, technical
                expertise, and leadership capabilities.
              </li>
              <li>
                Interactive sessions led by industry experts covering the latest trends, tools, and
                technologies relevant to diverse sectors.
              </li>
              <li>
                Flexible e-learning modules and virtual classrooms that enable learning anytime,
                anywhere, with a focus on self-paced and instructor-led formats.
              </li>
              <li>
                Guidance and strategy development for institutions or organizations looking to build
                impactful learning programs or improve existing systems.
              </li>
              <li>
                Practical exposure and on-the-job learning opportunities for students and young professionals
                looking to bridge the gap between academics and industry.
              </li>
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Healthcare;
