"use client"

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
  FaSeedling, FaSatelliteDish, FaPlane,
  FaGraduationCap, FaHospital, FaLaptopCode,
  FaSnowflake, FaOilCan, FaShoppingCart
} from 'react-icons/fa';
import { PiNuclearPlantFill } from "react-icons/pi";
import Link from "next/link";

export default function Sectors() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const sectors = [
    { title: "Power Plants", icon: <PiNuclearPlantFill />, description: "Manufacturing steam boilers & supplying power generation plants on EPC basis." },
    { title: "Agro Technologies", icon: <FaSeedling />, description: "Manufacturing agro processing plants like solvent extraction, cattle feed & food processing." },
    { title: "Telecom", icon: <FaSatelliteDish />, description: "A telecom VAS provider with a presence in 50+ countries, covering 100+ operators." },
    { title: "Tourism", icon: <FaPlane />, description: "Partnering with governments for tourism industry projects across Asia." },
    { title: "Education", icon: <FaGraduationCap />, description: "Provide education , affiliations, and manpower for institutions." },
    { title: "Health Care", icon: <FaHospital />, description: "Manufacturing allopathic & ayurvedic medicines, private labels & custom formulations." },
    { title: "IT & Digital Marketing", icon: <FaLaptopCode />, description: "Offering software, IT services, and web technologies for businesses." },
    // { title: "HVAC Industry", icon: <FaSnowflake />, description: "India's biggest HVAC filters & pre-insulated duct manufacturer." },
    { title: "Petroleum Industry", icon: <FaOilCan />, description: "Installing modular refineries for petroleum industries in Africa & Asia." }
    // { title: "FMCG", icon: <FaShoppingCart />, description: "Manufacturing cosmetics, essential oils & henna under private and own brands." }
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
      className="bg-gray-100 py-10 px-4 md:px-10"
      id='Sectors1'
    >
      <motion.h2
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        viewport={{ once: true }}
        className='text-2xl sm:text-4xl font-bold mb-2 text-center'>Sectors <span className='underline underline-offset-4 decoration-1 under font-light decoration-gray-900 text-[#fc9908]'>We are Into</span>
      </motion.h2>

      <motion.p
        initial={{ opacity: 0, y: -100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        viewport={{ once: true }}
        className="text-base text-gray-500 mb-8 text-center"
      >
        Transforming Industries with Cutting-Edge Solutions
      </motion.p>

      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 px-4">
        {sectors.map((sector, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.05, boxShadow: "0px 0px 20px rgba(255, 153, 8, 0.5)" }}
            className="bg-white border border-gray-200 shadow-lg rounded-lg p-6 text-center hover:shadow-xl transition-shadow duration-500"
          >
            <motion.div
              className="flex justify-center items-center text-4xl mb-4"
              animate={{ y: [0, -5, 0] }}
              transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
              style={{ color: "#fc9908" }}
            >
              {sector.icon}
            </motion.div>

            <h3 className="text-xl font-semibold mb-2 text-gray-800">
              {sector.title}
            </h3>

            <p className="text-gray-600 text-sm mb-4">
              {sector.description}
            </p>

            <button
              className="font-semibold border border-[#fc9908] text-[#fc9908] py-2 px-4 rounded-full transition duration-300 hover:bg-[#fc9908] hover:text-white"
            ><Link href="/sectors">Read More</Link>
            </button>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}