import Image from "next/image";
import Header from "@/components/Home/Header";
import { ToastContainer } from "react-toastify";
import About from "@/components/Home/About";
import Sectors1 from "@/components/Home/Sectors1";
import OurApproach from "@/components/Home/OurApproach";
import Testimonials from "@/components/Home/Testimonials";
import Contact from "@/components/Home/Contact";
import Partners from "@/components/Home/Partners";

export default function Home() {
  return (
    <>
    <div className='w-full overflow-hidden'>
      <Header/>
      <ToastContainer/>
      <About/>
      <Sectors1/>
      {/* <Projects/> */}
      <OurApproach/>
      {/* <Testimonials/> */}
      <Contact/>
      <Partners/>
     
    </div>
    </>
  );
}
