import React from 'react'
import Hero from "@/components/Petrol/Hero7"
import Aboutpetrol from "@/components/Petrol/Aboutpetrol"
import Petrolium from "@/components/Petrol/Petrolium"

const Page = () => {
    return (
      <div className='w-full overflow-hidden'>
        <Hero/>
       <Aboutpetrol/>
       <Petrolium/>
      </div>
    )
  }
  
  export default Page