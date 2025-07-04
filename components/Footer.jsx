import { MdOutlineLocationOn } from "react-icons/md";
import { MdMailOutline } from "react-icons/md";
import { FiPhone } from "react-icons/fi";

const Footer = () => {
  return (
    <div className='pt-10 px-4 md:px-20 lg:px-32 bg-[#152339f5] w-full overflow-hidden' id='Footer'>
      <div className='container mx-auto flex flex-col md:flex-row justify-between items-start'>
        <div className='w-full md:w-1/3 mb-8 md:mb-0'>
            <img className="w-28 h-auto" src={'/assets/bb_logo.png'} alt="" />
            <p className='text-gray-400 mt-4'>BigByte Innovations Pvt. Ltd. </p>
        </div>
        <div className='w-full md:w-1/5 mb-8 md:mb-0'>
           <h3 className='text-white text-lg font-bold mb-4'>Company</h3>
           <ul className='flex flex-col gap-2 text-gray-400'>
            <a href="#Header" className='hover:text-white'>Home</a>
            <a href="#About" className='hover:text-white'>About Us</a>
            <a href="#Contact" className='hover:text-white'>Contact Us</a>
            <a href="/privacy" className='hover:text-white'>Privacy policy</a>
           </ul>
        </div>
        <div className='w-full md:w-1/3'>
    <h3 className='text-white text-lg font-bold mb-4'>Contact Info</h3>

    <div className="flex items-start gap-2">
        <MdOutlineLocationOn className="text-white text-xl mt-1" />
        <p className="text-gray-400">
            Plot No. 151, Industrial Area, Sector. 2,<br /> Kurukshetra, Haryana (136118)
        </p>
    </div>

    <div className="flex items-center gap-2 mt-2">
        <MdMailOutline className="text-white text-xl" />
        <p className="text-gray-400">info@bigbyteinnovations.com</p>
    </div>

    <div className="flex items-start gap-2 mt-2">
        <FiPhone className="text-white text-xl mt-1" />
        <div className="text-gray-400">
            {/* <p>+91 94661 94004</p> */}
            <p>+91 92157 15723</p>
        </div>
    </div>
</div>
      </div>
      <div className='border-t border-gary-700 py-4 mt-10 text-center text-gray-500'>
        Copyright 2025 @ BigByte Innovations All Rights Reserved.
      </div>
    </div>
  )
}

export default Footer
