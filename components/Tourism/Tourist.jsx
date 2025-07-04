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
            src="/assets/tourism2.jpg" // Replace with actual path
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
            Travel{" "}
            <span className="underline underline-offset-4 decoration-2 font-light decoration-gray-900 text-orange-400">
              Innovators
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

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="text-md leading-relaxed mb-6"
          >
            <ul className="mb-3 list-disc list-inside space-y-1">
              <li>
                <strong>Cultural Immersion: </strong>
                Experience India’s diverse cultural heritage, from vibrant festivals like Diwali and Holi to traditional dance forms such as Kathakali and Bharatanatyam.
              </li>
              <li>
                <strong>Scenic Exploration: </strong>
                Discover breathtaking landscapes, including the majestic Himalayas and the serene backwaters of Kerala, offering a perfect blend of healing and sightseeing.
              </li>
              <li>
                <strong>Accommodation Options: </strong>
                Access to a variety of accommodations, ranging from budget-friendly to luxurious, ensuring comfort and convenience during your stay.
              </li>
              <li>
                <strong>Local Transportation: </strong>
                Seamless travel arrangements, including airport pickups and local transfers, to facilitate easy movement between treatment centers and tourist destinations.
              </li>
              <li>
                <strong>Visa Assistance: </strong>
                Comprehensive support in obtaining medical visas, ensuring a smooth and hassle-free travel experience.
              </li>
              <li>
                <strong>Tour Packages: </strong>
                Customized itineraries that combine medical treatment with leisure travel, allowing patients and their companions to explore India’s attractions.
              </li>
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Power;
