// import React from "react";
// import { motion } from "framer-motion";

// const AboutIntro = () => {
//   return (
//     <section className="bg-[#344867] py-24 px-6 md:px-20 text-white relative z-0 ">
//       <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-16 mt-24">
//         {/* Text Content */}
//         <div className="flex-1">
//           <motion.h2
//             initial={{ opacity: 0, x: 100 }}
//             whileInView={{ opacity: 1, x: 0 }}
//             transition={{ duration: 0.8 }}
//             viewport={{ once: true }}
//             className="text-4xl sm:text-4xl font-extrabold text-white mb-6 mt-12 text-center md:text-left"
//           >
//             About{" "}
//             <span className="underline underline-offset-4 decoration-2 font-light decoration-gray-900 text-orange-400">
//               Us
//             </span>
//           </motion.h2>

//           <motion.p
//             initial={{ opacity: 0, y: 30 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.8, delay: 0.2 }}
//             viewport={{ once: true }}
//             className="text-gray-200 text-md md:text-md leading-relaxed mb-6"
//           >
//             At <strong>BigByte Innovations</strong>, we are committed to delivering
//             cutting-edge solutions that harness the power of technology to transform
//             businesses and drive success. With a passion for innovation and excellence,
//             we specialize in providing tailored services that help our clients stay ahead
//             of the curve in an ever-evolving digital landscape.
//           </motion.p>

//           <motion.p
//             initial={{ opacity: 0, y: 30 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.8, delay: 0.4 }}
//             viewport={{ once: true }}
//             className="text-gray-200 text-md md:text-md leading-relaxed mb-10"
//           >
//             Our team of experienced professionals brings together a diverse set of skills
//             in software development, AI, blockchain, and data analytics. We focus on
//             understanding the unique needs of each client, offering customized solutions
//             that optimize operations, enhance user experiences, and accelerate growth.
//           </motion.p>
//         </div>

//         {/* Image */}
//         <motion.div
//           className="flex-1 relative mt-10 md:mt-9"
//           initial={{ opacity: 0, scale: 0.9 }}
//           whileInView={{ opacity: 1, scale: 1 }}
//           transition={{ duration: 0.8, delay: 0.6 }}
//           viewport={{ once: true }}
//         >
//           <motion.img
//             src="/assets/about.png"
//             alt="Team"
//             className="rounded-2xl shadow-2xl w-full object-cover"
//             style={{ height: "330px" }}
//           />
//         </motion.div>
//       </div>
//     </section>
//   );
// };

// export default AboutIntro;
"use client";
import React from "react";
import { motion } from "framer-motion";

const AboutIntro = () => {
  return (
    <section className="bg-[#344867] py-24 px-6 md:px-20 text-white relative z-0">
      
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
            About{" "}
            <span className="underline underline-offset-4 decoration-2 font-light decoration-white  text-orange-400">
              Us
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-gray-200 text-md leading-relaxed mb-6"
          >
             At <strong>BigByte Innovations</strong>, we are committed to delivering
             cutting-edge solutions that harness the power of technology to transform
             businesses and drive success. With a passion for innovation and excellence,
             we specialize in providing tailored services that help our clients stay ahead
             of the curve in an ever-evolving digital landscape.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="text-gray-200 text-md leading-relaxed mb-10"
          >
           Our team of experienced professionals brings together a diverse set of skills
          in software development, AI, blockchain, and data analytics. We focus on
             understanding the unique needs of each client, offering customized solutions
             that optimize operations, enhance user experiences, and accelerate growth.
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
            src="/assets/about.png"
            alt="About"
            className="rounded-2xl shadow-2xl w-full object-cover"
            style={{ height: "330px" }}
          />
        </motion.div>
      </div>

      {/* Section 2: Image Left, Text Right */}
      <div className="max-w-7xl mx-auto flex flex-col-reverse md:flex-row items-center gap-16 mt-32">
        
        </div>
    </section>
  );
};

export default AboutIntro;
