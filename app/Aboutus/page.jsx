"use client";
import React from "react";
import AboutIntro from "../../components/Aboutus/AboutIntro";
import WhyChooseUs from "../../components/Aboutus/WhyChooseUs";
import AboutVision from "../../components/Aboutus/AboutVision";
import BigByteAdvantages from "../../components/Aboutus/BigByteAdvantages";

const AboutusPage = () => {
  return (
    <div>
      <AboutIntro />
      <AboutVision />
      <WhyChooseUs />
      <BigByteAdvantages />
    </div>
  );
};

export default AboutusPage;