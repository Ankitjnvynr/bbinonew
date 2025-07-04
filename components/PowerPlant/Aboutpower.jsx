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
            Power{" "}
            <span className="underline underline-offset-4 decoration-2 font-light decoration-white  text-orange-400">
              Plant
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-gray-200 text-md leading-relaxed mb-6"
          >
             At <strong>BigByte Innovations</strong>,we specialize in delivering innovative and cost-effective industrial power plant solutions tailored to the unique needs of our clients. With over two decades of experience, we provide end-to-end Engineering, Procurement, and Construction (EPC) services for biomass and coal-fired power plants across industries such as rice mills, textiles, sugar, and food processing. Our turnkey projects are designed to ensure maximum energy efficiency, reduced operating costs, and short payback periods. One of our key strengths lies in fuel flexibility—our power plants are capable of operating on a wide range of fuels including rice husk, wood chips, biomass pellets, briquettes, Indian and imported coal, petcoke, and natural gas.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="text-gray-200 text-md leading-relaxed "
          >
           To help industries avoid heavy upfront investment, we offer a unique "Steam at Cost" model, under which we install and maintain the steam boiler infrastructure and charge only for the steam consumed. In addition to plant installation, Mago Thermal offers expert engineering consultancy, capacity upgrades, combustion system modifications, and full-scale operation and maintenance services to ensure continuous and efficient performance. We also prioritize environmental sustainability by integrating advanced air pollution control systems such as Electrostatic Precipitators, Bag Filters, Flue Gas Desulphurisation units, and Wet Scrubbers into our plants.
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
            src="/assets/Power_Plant1.jpg"
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