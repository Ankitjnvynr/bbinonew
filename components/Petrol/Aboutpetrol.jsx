"use client";

import React from "react";
import { motion } from "framer-motion";

const Aboutpetrol = () => {
  return (
    <section className="bg-[#5a3816] py-2 px-6 md:px-20 text-white relative z-0">
      
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
            Petrolium{" "}
            <span className="underline underline-offset-4 decoration-2 font-light decoration-gray-900 text-orange-400">
             Industry
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-gray-200 text-md leading-relaxed mb-6"
          >
            At <strong>Big Byte Innovations Pvt. Ltd.</strong> , we dealing in all aspects of oil and gas production and conversion and have considerable experience in Oil Refining and EPC projects. We have specialists of system engineering who have many years of experience in all fields of Production and Conversion from all type of oil and gas to finished products. The company also has considerable experience in the custom design, manufacture and supply of plant to the Iron & Steel industry sector. The company has come up with a Modular refinery project which is very economical as compared to the full fledged refinery and also is willing to fund the project based on certain terms and conditions to be fulfilled by prospective partners in business. We are an EPC company representing some of the world’s leading oil and gas process plant manufacturers based in North America. Our technical partners manufacture equipment to process crude oil into AGO, PMS, DPK and a residual product of LPFO. A small amount of gas is given off which is recovered and used to power the process making the plant self-sufficient in power. These processes are not a full refining process as such but are referred to in the industry as Modular Refineries or Crude Topping Units. These process plants have some advantages over a full refining process in that they are much more economical and much faster to implement.
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
            src="/assets/petrol1.png"
            alt="About"
            className="rounded-2xl shadow-2xl w-full object-cover"
            style={{ height: "550px" }}
          />
        </motion.div>
      </div>

      {/* Section 2: Image Left, Text Right */}
      <div className="max-w-7xl mx-auto flex flex-col-reverse md:flex-row items-center gap-16 mt-32">
        
        </div>
    </section>
  );
};

export default Aboutpetrol;
