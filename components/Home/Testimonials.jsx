"use client"

import React from 'react'

import { motion } from 'framer-motion'

const Testimonials = () => {

  const projectsData = [
    {
      title: "Skyline Haven",
      price: "$2,50,000",
      location: "California",
      image: "/assets/project_img_1.jpg"
    },
    {
      title: "Vista Verde",
      price: "$2,50,000",
      location: "San Francisco",
      image: "/assets/project_img_2.jpg"
    },
    {
      title: "Serenity Suites",
      price: "$2,50,000",
      location: "Chicago",
      image: "/assets/project_img_3.jpg"
    },
    {
      title: "Central Square",
      price: "$2,50,000",
      location: "Los Angeles",
      image: "/assets/project_img_4.jpg"
    },
    {
      title: "Vista Verde",
      price: "$2,50,000",
      location: "San Francisco",
      image: "/assets/project_img_5.jpg"
    },
    {
      title: "Serenity Suites",
      price: "$2,50,000",
      location: "Chicago",
      image: "/assets/project_img_6.jpg"
    }
  ];
   const assets = {
    logo: "/assets/logo.png",
    logo_dark: "/assets/logo_dark.svg",
    cross_icon: "/assets/cross_icon.svg",
    menu_icon: "/assets/menu_icon.svg",
    star_icon: "/assets/star_icon.svg",
    // header_img: "/assets/header_img.png", // Uncomment if needed
    brand_img: "/assets/brand_img.png",
    project_img_1: "/assets/project_img_1.jpg",
    project_img_2: "/assets/project_img_2.jpg",
    project_img_3: "/assets/project_img_3.jpg",
    project_img_4: "/assets/project_img_4.jpg",
    left_arrow: "/assets/left_arrow.svg",
    right_arrow: "/assets/right_arrow.svg"
  };
  

 const testimonialsData = [
    {
      name: "Donald Jackman",
      title: "Marketing Manager",
      image: "/assets/profile_img_1.png",
      alt: "Portrait of Donald Jackman",
      rating: 5,
      text: "From the very first meeting, they understood my vision and helped me find the perfect property. Their attention to detail and commitment to client satisfaction is unmatched."
    },
    {
      name: "Richard Nelson",
      title: "UI/UX Designer",
      image: "/assets/profile_img_2.png",
      alt: "Portrait of Richard Nelson",
      rating: 4,
      text: "From the very first meeting, they understood my vision and helped me find the perfect property. Their attention to detail and commitment to client satisfaction is unmatched."
    },
    {
      name: "James Washington",
      title: "Co-Founder",
      image: "/assets/profile_img_3.png",
      alt: "Portrait of James Washington",
      rating: 5,
      text: "From the very first meeting, they understood my vision and helped me find the perfect property. Their attention to detail and commitment to client satisfaction is unmatched."
    }
  ];
  
  




  return (
    <div className='container bg-gray-100 mx-auto py-10 lg:px-32 w-full overflow-hidden'id='Testimonials'>
      <motion.h1
      initial={{opacity: 0, x:200}}
      transition={{duration: 1}}
      whileInView={{opacity: 1, x:0}}
      viewport={{once: true}}
      className='text-2xl sm:text-4xl font-bold mb-2 text-center'>Customer <span className='underline underline-offset-4 decoration-1 under font-light decoration-gray-900 text-[#fc9908]'>Testimonials</span></motion.h1>
      <motion.p
      initial={{opacity: 0, x:200}}
      transition={{duration: 1}}
      whileInView={{opacity: 1, x:0}}
      viewport={{once: true}}
      className='text-center text-gray-500 mb-12 max-w-80 mx-auto'>Real Stories from Those who Found Home with Us</motion.p>


      <motion.div
      initial={{opacity: 0, x:-200}}
      transition={{duration: 1}}
      whileInView={{opacity: 1, x:0}}
      viewport={{once: true}}
      className='flex flex-wrap justify-center gap-8'>
        {testimonialsData.map((testimonial, index)=>(
            <div key={index} className='max-w-[300px] border shadow-lg rounded px-8 py-12 text-center'>
                <img className='w-20 h-20 rounded-full mx-auto mb-4' src={testimonial.image} alt={testimonial.alt} />
                <h2 className='text-xl text-gray-700 font-medium'>{testimonial.name}</h2>
                <p className='text-gray-500 mb-4 text-sm'>{testimonial.title}</p>
                <div className='flex justify-center gap-1 text-red-500 mb-4'>
                    {Array.from({length: testimonial.rating}, (item, index)=>(
                        <img key={index} src={assets.star_icon} alt="" />
                    ))}
                </div>
                <p className='text-gary-600'>{testimonial.text}</p>
            </div>
        ))}
      </motion.div>
    </div>
  )
}

export default Testimonials
