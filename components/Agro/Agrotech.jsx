"use client";
import React from "react";
import { motion } from "framer-motion";

const Agrotech = () => {
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
            src="/assets/agro3.avif" // Replace with actual path if needed
            alt="Vision"
            className="rounded-2xl shadow-2xl w-full object-cover"
            style={{ height: "550px" }}
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

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-md leading-relaxed mb-6"
          >
            <p>
              At <strong>BigByte Innovations</strong>, the company is engaged in
              designing and manufacturing machinery for agricultural produce.
              It has different verticals for different agricultural products.
            </p>
            <br />
            <ul className="list-disc list-inside space-y-1">
              <li>
                Oil Extraction Plants: Rice bran oil and other oil cakes extraction
                plants,
              </li>
              <li>Rice Processing Machinery (plain and par boiled)</li>
              <li>Herbal and pharmaceutical plants</li>
              <li>
                Post Harvest Machinery: Cleaners, Graders, Separators, De-Stoners,
                Blowers, Aspirators,
              </li>
              <li>Seed treaters, Mobile Plants</li>
              <li>Food Processing Machinery</li>
              <li>Mushroom Processing Machinery</li>
              <li>Pulse Mills</li>
              <li>Cattle and Poultry Feed Mills</li>
              <li>
                Material Handling: Bucket Elevator, Hopper, conveyors
              </li>
            </ul>
          </motion.div>          
        </div>
      </div>
    </section>
  );
};

export default Agrotech;





// "use client"
// import React from "react";
// import { motion } from "framer-motion";

// const Agrotech = () => {
//   return (
//     <section className="bg-white py-24 px-6 md:px-20 text-black">
//       <div className="max-w-7xl mx-auto flex flex-col-reverse md:flex-row items-center gap-16 mt-10">

//         {/* Image Left */}
//         <motion.div
//           className="flex-1"
//           initial={{ opacity: 0, scale: 0.9 }}
//           whileInView={{ opacity: 1, scale: 1 }}
//           transition={{ duration: 0.8 }}
//           viewport={{ once: true }}
//         >
//           <img
//             src="/assets/agro3.avif" // Replace with actual path
//             alt="Vision"
//             className="rounded-2xl shadow-2xl w-full object-cover"
//             style={{ height: "550px" }}
//           />
//         </motion.div>

//         {/* Text Right */}
//         <div className="flex-1">
//           <motion.h2
//             initial={{ opacity: 0, x: -100 }}
//             whileInView={{ opacity: 1, x: 0 }}
//             transition={{ duration: 0.8 }}
//             viewport={{ once: true }}
//             className="text-4xl font-extrabold text-black mb-6 text-center md:text-left"
//           >
//             Agro {" "}
//             <span className="underline underline-offset-4 decoration-2 font-light decoration-gray-900 text-orange-400">
//                Technologies
//             </span>
//           </motion.h2>

//           <motion.p
//             initial={{ opacity: 0, y: 30 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.8, delay: 0.2 }}
//             viewport={{ once: true }}
//             className="text-md leading-relaxed mb-6"
//           >
//             At <strong>BigByte Innovations</strong>, The company is engaged in designing and manufacturing machinery for agricultural produce. It has different verticals for different agricultural products.
//           </motion.p>

//           <motion.p
//             initial={{ opacity: 0, y: 30 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.8, delay: 0.4 }}
//             viewport={{ once: true }}
//             className="text-md leading-relaxed mb-6"
//           >
//            {/* <p className="mb-2">
//               <strong>Oil Extraction Plants:</strong> <br /></p> */}
//               <ul className="list-disc list-inside space-y-1">
//                 <li>Oil Extraction Plants: Rice bran oil and other oil cakes extraction plants,</li>

// <li>Rice Processing Machinery (plain and par boiled)</li>

// <li>Herbal and pharmaceutical plants</li>

// <li>Post Harvest Machinery : Cleaners, Graders, Seperators, De-Stoners, Blowers, Aspirators,</li>

// <li>Seed treaters, Mobile Plants</li>

// <li>Food Processing Machinery</li>

// <li>Mushroom Processing Machinery</li>

// <li>Pulse Mills</li>

// <li>Cattle and Poultry Feed Mills</li>

// <li>Material Handling: Bucket Elevator, Hopper, conveyors</li>
                
//               </ul><br />
//           </motion.p>

          
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Agrotech;