"use client"
import React from "react";
import { motion } from "framer-motion";

const Aboutagro = () => {
  return (
    <section className="bg-[#34673d] py-2 px-6 md:px-20 text-white relative z-0">
      
      {/* Section 1: Text Left, Image Right */}
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-16 mt-24">
        
        {/* Text Content */}
        <div className="flex-1">
          <motion.h2
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-4xl font-extrabold text-white mb-6 mt-12 text-center md:text-left"
          >
            Agro{" "}
            <span className="underline underline-offset-4 decoration-2 font-light decoration-gray-900 text-orange-400">
              Tech
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-gray-200 text-md leading-relaxed mb-6"
          >
             <strong>Big Byte Innovations Pvt. Ltd.</strong> is a trusted EPC contractor, supplier and exporter of agro processing equipment namely Solvent Extraction Plants, Refineries, expellers and feed plants. 
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="text-gray-200 text-md leading-relaxed mb-10"
          >
          We provide a wide range of agro processing machinery which are specifically designed and fabricated to provide high-grade service to our customers. Our machines and agro processing plants are widely used for different requirements. We have maintained three-stage quality control modules, which includes a stringent check on the incoming raw material, in-process control and final testing. Our qualified and experienced team in all the departments ensures the quality of our final product. Our machines and equipment are widely known for their high performance and long service life.
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
            src="/assets/agro1.webp"
            alt="About"
            className="rounded-2xl shadow-2xl w-full object-cover"
            style={{ height: "500px" }}
          />
        </motion.div>
      </div>

      {/* Section 2: Image Left, Text Right */}
      <div className="max-w-7xl mx-auto flex flex-col-reverse md:flex-row items-center gap-16 mt-32">
        
        </div>
    </section>
  );
};

export default Aboutagro;
