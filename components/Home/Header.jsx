"use client";

import React, { useState, useEffect } from 'react';
import { useRouter, usePathname } from 'next/navigation';
import { motion, AnimatePresence } from "framer-motion";
import { FlipWords } from './FlipWords';

const Header = () => {
  const words = ["thinking", "ideas", "dreams", "vision"];
  const images = [
    "/inno2.jpg",
    "/powerplant.jpg",
    "/healthcare.jpg",
    "/agro.jpg",
    "/inno1.jpg",
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    // Preload images
    images.forEach(imageSrc => {
      const img = new Image();
      img.src = imageSrc;
      img.onerror = () => {
        console.error(`Failed to preload image: ${imageSrc}. Check path and ensure it's in the public folder.`);
      };
    });

    // Interval to change the image
    const intervalId = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);

    // Set visibility after a short delay to ensure proper animation
    const visibilityTimer = setTimeout(() => {
      setIsVisible(true);
    }, 100);

    // Clear interval and timer on component unmount
    return () => {
      clearInterval(intervalId);
      clearTimeout(visibilityTimer);
    };
  }, []);

  // Reset visibility when pathname changes to home
  useEffect(() => {
    if (pathname === '/') {
      setIsVisible(false);
      const timer = setTimeout(() => {
        setIsVisible(true);
      }, 100);
      return () => clearTimeout(timer);
    }
  }, [pathname]);

  const imageVariants = {
    initial: { opacity: 0, scale: 1.05 },
    animate: { opacity: 1, scale: 1, transition: { duration: 1.5, ease: "easeInOut" } },
    exit: { opacity: 0, scale: 1.05, transition: { duration: 1.5, ease: "easeInOut" } }
  };

  const textVariants = {
    hidden: { opacity: 0, y: 100 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 1.5, delay: 0.5, ease: "easeOut" }
    }
  };

  const handleSectionNavigation = (sectionId) => {
    if (pathname !== '/') {
      router.push(`/#${sectionId}`);
    } else {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
  };
  
  return (
    <div className='min-h-screen mb-4 relative flex items-center justify-center w-full overflow-hidden' id='Header'>
      
      <AnimatePresence initial={false}>
        <motion.div
          key={currentImageIndex}
          className='absolute inset-0 w-full h-full bg-cover bg-center'
          style={{
            backgroundImage: `url('${images[currentImageIndex]}')`
          }}
          variants={imageVariants}
          initial="initial"
          animate="animate"
          exit="exit"
        >
          <div className="absolute inset-0 bg-black opacity-30"></div>
        </motion.div>
      </AnimatePresence>

      <motion.div
        className='container relative z-10 text-center mx-auto py-4 px-6 md:px-20 lg:px-32 text-white'
        variants={textVariants}
        initial="hidden"
        animate={isVisible ? "visible" : "hidden"}
      >
        <h2 className='text-5xl sm:text-6xl md:text-[82px] inline-block max-w-3xl font-semibold pt-20'>
          Let's make your <FlipWords words={words} /> in reality.
        </h2>
        <div className='space-x-6 mt-16'>
          <button 
            onClick={() => handleSectionNavigation('Sectors1')} 
            className='border border-white px-8 py-3 rounded-md hover:bg-white hover:text-black transition-colors duration-300 cursor-pointer'
          >
            Sectors
          </button>
          <a 
            href="#Contact" 
            className='inline-block px-8 py-3 rounded-md text-white hover:opacity-90 transition-opacity duration-300' 
            style={{ backgroundColor: '#fc9908' }}
          >
            Contact Us
          </a>
        </div>
      </motion.div>
    </div>
  );
}

export default Header;








// "use client";

// import React, { useState, useEffect } from 'react';
// import { useRouter, usePathname } from 'next/navigation';
// import { motion, AnimatePresence } from "framer-motion";
// import { FlipWords } from './FlipWords'; // Assuming FlipWords is in the same folder

// const Header = () => {
//   const words = ["thinking", "ideas", "dreams", "vision"];
//   const images = [
//     "/inno2.jpg", // **VERIFY THIS PATH**: e.g., should be in `public/head1.jpg`
//     "/powerplant.jpg",
//     "/healthcare.jpg",
//     "/agro.jpg",
//     "/inno1.jpg",
//   ];

//   const [currentImageIndex, setCurrentImageIndex] = useState(0);

//     const router = useRouter();
//     const pathname = usePathname();

//   useEffect(() => {

//     images.forEach(imageSrc => {
//       const img = new Image();
//       img.src = imageSrc;
//       img.onerror = () => {
//         console.error(`Failed to preload image: ${imageSrc}. Check path and ensure it's in the public folder.`);
//       };
//     });

//     // Interval to change the image
//     const intervalId = setInterval(() => {
//       setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
//     }, 5000); // Change image every 5 seconds

//     // Clear interval on component unmount
//     return () => clearInterval(intervalId);
//   }, [images]); // Updated dependency to `images` array itself, in case it could change.

//   const imageVariants = {
//     initial: { opacity: 0, scale: 1.05 },
//     animate: { opacity: 1, scale: 1, transition: { duration: 1.5, ease: "easeInOut" } },
//     exit: { opacity: 0, scale: 1.05, transition: { duration: 1.5, ease: "easeInOut" } }
//   };

//   const handleSectionNavigation = (sectionId) => {
//     if (pathname !== '/') {
//       router.push(`/#${sectionId}`);
//     } else {
//       const element = document.getElementById(sectionId);
//       if (element) {
//         element.scrollIntoView({ behavior: 'smooth', block: 'start' });
//       }
//     }
//   };
  
//   return (
//     <div className='min-h-screen mb-4 relative flex items-center justify-center w-full overflow-hidden' id='Header'>
      
//       <AnimatePresence initial={false}>
//         <motion.div
//           key={currentImageIndex} // Important for AnimatePresence to detect changes
//           className='absolute inset-0 w-full h-full bg-cover bg-center'
//           style={{
//             backgroundImage: `url('${images[currentImageIndex]}')`
//           }}
//           variants={imageVariants}
//           initial="initial"
//           animate="animate"
//           exit="exit"
          
//         >
//           <div className="absolute inset-0 bg-black opacity-30"></div>
//         </motion.div>
//       </AnimatePresence>

//       <motion.div
//         initial={{ opacity: 0, y: 100 }}
//         transition={{ duration: 1.5, delay: 0.5 }}
//         whileInView={{ opacity: 1, y: 0 }}
//         viewport={{ once: true }}
//         className='container relative z-10 text-center mx-auto py-4 px-6 md:px-20 lg:px-32 text-white'
//       >
//         <h2 className='text-5xl sm:text-6xl md:text-[82px] inline-block max-w-3xl font-semibold pt-20'>
//           Let's make your <FlipWords words={words} /> in reality.
//         </h2>
//         <div className='space-x-6 mt-16'>
//           <a onClick={() => handleSectionNavigation('Sectors1')} href="#Projects" className='border border-white px-8 py-3 rounded-md hover:bg-white hover:text-black transition-colors duration-300'>
//             Sectors
//           </a>
//           <a href="#Contact" className='px-8 py-3 rounded-md text-white hover:opacity-90 transition-opacity duration-300' style={{ backgroundColor: '#fc9908' }}>
//             Contact Us
//           </a>
//         </div>
//       </motion.div>
//     </div>
//   );
// }
// export default Header;







// "use client";

// import React from 'react'
// // import Navbar from '../Navbar'
// import { motion} from "framer-motion"
// import { FlipWords } from './FlipWords';

// const Header = () => {
//   const words = ["thinking", "ideas", "dreams", "vision"];
//   return (
//     <div className='min-h-screen mb-4 bg-cover bg-center flex items-center w-full overflow-hidden' style={{backgroundImage: "url('/head1.jpg')"}} id='Header'>
      
//       {/* <Navbar/> */}
//       <motion.div
//       initial={{opacity: 0, y:100}}
//       transition={{duration: 1.5}}
//       whileInView={{opacity: 1, y:0}}
//       viewport={{once: true}}
//       className='container text-center mx-auto py-4 px-6 md:px-20 lg:px-32 text-white'>
//         <h2 className='text-5xl sm:text-6xl md:text-[82px] inline-block max-w-3xl font-semibold pt-20'>  Let's make your <FlipWords words={words} /> in reality. </h2>
//         <div className='space-x-6 mt-16'>
//           <a href="#Projects" className='border border-white px-8 py-3 roundedd'>Projects</a>
//           <a href="#Contact" className=' px-8 py-3 roundedd'style={{ backgroundColor: '#fc9908'}}>Contact Us</a>
//         </div>
//       </motion.div>
//     </div>
//   )
// }

// export default Header