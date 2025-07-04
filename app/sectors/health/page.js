import React from 'react'

import Hero from "@/components/Health/Hero5"
import Abouthealth from "@/components/Health/Abouthealth"
import Healthcare from "@/components/Health/Healthcare"

const page = () => {
  return (
    <div className='w-full overflow-hidden'>
        <Hero/>
       <Abouthealth/>
       <Healthcare/>
       


      </div>
  )
}

export default page