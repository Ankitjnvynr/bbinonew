"use client"
import React from "react";
import { motion } from "framer-motion";

const Aboutedu = () => {
  return (
    <section className="bg-[#344867] py-2 px-6 md:px-20 text-white relative z-0">
      
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
            BigByte{" "}
            <span className="underline underline-offset-4 decoration-2 font-light decoration-gray-900 text-orange-400">
              Education
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-gray-200 text-md leading-relaxed mb-6"
          >
            At <strong>Big Byte Innovations Pvt. Ltd.</strong>, we believe that education is the key to progress, growth, and innovation. Whether in the workplace or the wider world, continuous learning drives excellence and opens new opportunities for individuals and organizations alike.
          </motion.p>

          {/* Separate the paragraph and the list */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="text-gray-200 text-md leading-relaxed mb-2"
          >
            We are committed to fostering a culture of learning by:
          </motion.p>

          <motion.ul
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="list-disc list-inside space-y-1 mb-10"
          >
            <li>Encouraging skill development and professional growth</li>
            <li>Providing training programs for employees, partners, and clients</li>
            <li>Supporting knowledge-sharing through seminars, workshops, and digital content</li>
            <li>Staying updated with the latest technologies and industry best practices</li>
          </motion.ul>
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
            src="/assets/edu1.jpg"
            alt="About"
            className="rounded-2xl shadow-2xl w-full object-cover"
            style={{ height: "400px" }}
          />
        </motion.div>
      </div>

      {/* Section 2: Image Left, Text Right */}
      <div className="max-w-7xl mx-auto flex flex-col-reverse md:flex-row items-center gap-16 mt-32">
        {/* Additional content can be added here */}
      </div>
    </section>
  );
};

export default Aboutedu;




// "use client"
// import React from "react";
// import { motion } from "framer-motion";

// const Aboutedu = () => {
//   return (
//     <section className="bg-[#344867] py-2 px-6 md:px-20 text-white relative z-0">
      
//       {/* Section 1: Text Left, Image Right */}
//       <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-16 mt-24">
        
//         {/* Text Content */}
//         <div className="flex-1">
//           <motion.h2
//             initial={{ opacity: 0, x: 100 }}
//             whileInView={{ opacity: 1, x: 0 }}
//             transition={{ duration: 0.8 }}
//             viewport={{ once: true }}
//             className="text-4xl font-extrabold text-white mb-6 mt-12 text-center md:text-left"
//           >
//             BigByte{" "}
//             <span className="underline underline-offset-4 decoration-2 font-light decoration-gray-900 text-orange-400">
//               Education
//             </span>
//           </motion.h2>

//           <motion.p
//             initial={{ opacity: 0, y: 30 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.8, delay: 0.2 }}
//             viewport={{ once: true }}
//             className="text-gray-200 text-md leading-relaxed mb-6"
//           >
//             At <strong>Big Byte Innovations Pvt. Ltd.</strong> , we believe that education is the key to progress, growth, and innovation. Whether in the workplace or the wider world, continuous learning drives excellence and opens new opportunities for individuals and organizations alike. 
//           </motion.p>

//           <motion.p
//             initial={{ opacity: 0, y: 30 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.8, delay: 0.4 }}
//             viewport={{ once: true }}
//             className="text-gray-200 text-md leading-relaxed mb-10"
//           >
//          We are committed to fostering a culture of learning by:
//          <ul className="list-disc list-inside space-y-1">

//                 <li>Encouraging skill development and professional growth</li>

//                 <li>Providing training programs for employees, partners, and clients</li>

//                 <li>Supporting knowledge-sharing through seminars, workshops, and digital content</li>

//                 <li>Staying updated with the latest technologies and industry best practices</li>
// </ul>
//           </motion.p>
//         </div>

//         {/* Image Right */}
//         <motion.div
//           className="flex-1 relative mt-10 md:mt-9"
//           initial={{ opacity: 0, scale: 0.9 }}
//           whileInView={{ opacity: 1, scale: 1 }}
//           transition={{ duration: 0.8, delay: 0.6 }}
//           viewport={{ once: true }}
//         >
//           <img
//             src="/assets/edu1.jpg"
//             alt="About"
//             className="rounded-2xl shadow-2xl w-full object-cover"
//             style={{ height: "400px" }}
//           />
//         </motion.div>
//       </div>

//       {/* Section 2: Image Left, Text Right */}
//       <div className="max-w-7xl mx-auto flex flex-col-reverse md:flex-row items-center gap-16 mt-32">
        
//         </div>
//     </section>
//   );
// };

// export default Aboutedu;
