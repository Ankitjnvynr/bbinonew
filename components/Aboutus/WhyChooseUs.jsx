// import React from "react";
// import { motion } from "framer-motion";

// const features = [
//   {
//     title: "Expert Team",
//     desc: "Our team consists of skilled professionals with diverse expertise in software, AI, and blockchain.",
//   },
//   {
//     title: "Tailored Solutions",
//     desc: "We understand your business needs and craft custom strategies for optimal performance.",
//   },
//   {
//     title: "Tech-Driven Innovation",
//     desc: "We leverage cutting-edge tools and technology to stay ahead in the digital landscape.",
//   },
//   {
//     title: "Client-Centric Approach",
//     desc: "We build strong partnerships, focusing on long-term success and growth for our clients.",
//   },
// ];

// const WhyChooseUs = () => {
//   return (
//     <section className="bg-white py-20 px-6 md:px-20 text-gray-800">
//       <div className="max-w-5xl mx-auto text-center">
//         <motion.h2
//           initial={{ opacity: 0, y: 40 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8 }}
//           viewport={{ once: true }}
//           className="text-4xl md:text-4xl font-extrabold mb-4"
//         >
//           Why{" "}
//           <span className="text-[#fc9908] underline decoration-2 underline-offset-4  decoration-gray-900">
//             Choose Us?
//           </span>
//         </motion.h2>

//         <motion.p
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8, delay: 0.2 }}
//           viewport={{ once: true }}
//           className="text-lg text-gray-600 max-w-2xl mx-auto mb-12"
//         >
//           We are not just developers, we are partners in your journey to digital excellence.
//         </motion.p>

//         <div className="grid md:grid-cols-2 gap-10 text-left">
//           {features.map((item, idx) => (
//             <motion.div
//               key={idx}
//               initial={{ opacity: 0, y: 30 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.6, delay: idx * 0.2 }}
//               viewport={{ once: true }}
//               className="flex gap-4 items-start"
//             >
//               <div className="w-7 h-7 mt-1 flex items-center justify-center text-[#fc9908] text-xl font-bold">
//                 ✓
//               </div>
//               <div>
//                 <h3 className="text-xl font-semibold">{item.title}</h3>
//                 <p className="text-gray-600 mt-1">{item.desc}</p>
//               </div>
//             </motion.div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default WhyChooseUs;
"use client";
import React from "react";
import { motion } from "framer-motion";

const features = [
  {
    title: "Expert Team",
    desc: "Our team consists of skilled professionals with diverse expertise in software, AI, and blockchain.",
  },
  {
    title: "Tailored Solutions",
    desc: "We understand your business needs and craft custom strategies for optimal performance.",
  },
  {
    title: "Tech-Driven Innovation",
    desc: "We leverage cutting-edge tools and technology to stay ahead in the digital landscape.",
  },
  {
    title: "Client-Centric Approach",
    desc: "We build strong partnerships, focusing on long-term success and growth for our clients.",
  },
];

const WhyChooseUs = () => {
  return (
    <section className="bg-[#2d3e5f] py-20 px-6 md:px-20 text-white">
      <div className="max-w-5xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-4xl md:text-4xl font-extrabold mb-4"
        >
          Why{" "}
          <span className="text-[#fc9908] underline decoration-2 underline-offset-4 decoration-white">
            Choose Us?
          </span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-lg text-gray-200 max-w-2xl mx-auto mb-12"
        >
          We are not just developers, we are partners in your journey to digital excellence.
        </motion.p>

        <div className="grid md:grid-cols-2 gap-10 text-left">
          {features.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: idx * 0.2 }}
              viewport={{ once: true }}
              className="flex gap-4 items-start"
            >
              <div className="w-7 h-7 mt-1 flex items-center justify-center text-[#fc9908] text-xl font-bold">
                ✓
              </div>
              <div>
                <h3 className="text-xl font-semibold text-white">{item.title}</h3>
                <p className="text-gray-300 mt-1">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
